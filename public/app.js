const state = {
  speaking: false,
  listening: false,
  phase: 0
};

function updateClock() {
  const now = new Date();
  const timeEl = document.getElementById('hud-clock');
  const dateEl = document.getElementById('hud-date');
  if (timeEl) timeEl.textContent = now.toTimeString().slice(0, 8);
  if (dateEl) {
    dateEl.textContent = `${now.toDateString().toUpperCase()} // TELEMETRY NOMINAL`;
  }
}
setInterval(updateClock, 1000);
updateClock();

function appendLog(speaker, message, isUser = false) {
  const log = document.getElementById('comms-log');
  if (!log) return;
  const entry = document.createElement('div');
  entry.className = `log-entry${isUser ? ' user' : ''}`;

  const meta = document.createElement('div');
  meta.className = 'log-meta';
  meta.textContent = `[${new Date().toTimeString().slice(0, 8)}] ${speaker}`;

  const body = document.createElement('div');
  body.textContent = message;

  entry.append(meta, body);
  log.prepend(entry);
}

async function speakJarvis(text) {
  const pill = document.getElementById('voice-status-pill');
  state.speaking = true;
  if (pill) pill.textContent = 'VOICE: TRANSMITTING...';

  try {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    if (res.status === 200) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.onended = () => {
        state.speaking = false;
        if (pill) pill.textContent = 'VOICE: FISH AUDIO ACTIVE';
        URL.revokeObjectURL(url);
      };
      await audio.play();
      return;
    }
  } catch {
    // Fall back to browser British Web Speech synthesis
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const britishVoice =
      voices.find((v) => v.lang.includes('en-GB') && /male|daniel|george|oliver|arthur/i.test(v.name)) ||
      voices.find((v) => v.lang.includes('en-GB')) ||
      voices[0];
    if (britishVoice) utterance.voice = britishVoice;
    utterance.rate = 1.03;
    utterance.pitch = 0.92;
    utterance.onend = () => {
      state.speaking = false;
      if (pill) pill.textContent = 'VOICE: BRITISH TTS READY';
    };
    utterance.onerror = () => {
      state.speaking = false;
    };
    window.speechSynthesis.speak(utterance);
  } else {
    setTimeout(() => {
      state.speaking = false;
      if (pill) pill.textContent = 'VOICE: BRITISH TTS READY';
    }, 3500);
  }
}

function renderSubagents(subagents, activeId = '') {
  const container = document.getElementById('subagents-list');
  if (!container) return;
  container.replaceChildren(
    ...subagents.map((agent) => {
      const card = document.createElement('div');
      card.className = `subagent-card${agent.id === activeId ? ' active-flash' : ''}`;

      const top = document.createElement('div');
      top.className = 'subagent-top';

      const title = document.createElement('span');
      title.textContent = `${agent.name.toUpperCase()} // ${agent.role}`;

      const badge = document.createElement('span');
      badge.className = 'subagent-status';
      badge.textContent = agent.id === activeId ? 'DISPATCHED' : agent.status;

      top.append(title, badge);

      const task = document.createElement('div');
      task.className = 'subagent-task';
      task.textContent = agent.currentTask;

      card.append(top, task);
      return card;
    })
  );
}

function renderRecommendations(recommendations) {
  const container = document.getElementById('recommendations-list');
  if (!container) return;
  container.replaceChildren(
    ...recommendations.map((rec) => {
      const item = document.createElement('div');
      item.className = 'rec-item';

      const top = document.createElement('div');
      top.className = 'rec-top';

      const title = document.createElement('span');
      title.textContent = rec.title;

      const badge = document.createElement('span');
      badge.className = 'rec-badge';
      badge.textContent = rec.badge;

      top.append(title, badge);

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'hud-btn';
      btn.textContent = `DISPATCH TO ${rec.agentId.toUpperCase()}`;
      btn.addEventListener('click', () => sendCommand(rec.command));

      item.append(top, btn);
      return item;
    })
  );
}

function renderMetrics(metrics) {
  if (!metrics) return;
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(val);
  };
  setText('rc-revenue', `$${metrics.revenueCat.revenue7d.toLocaleString('en-US')}`);
  setText('rc-downloads', metrics.revenueCat.downloads7d.toLocaleString('en-US'));
  setText('rc-subs', metrics.revenueCat.activeSubscriptions.toLocaleString('en-US'));
  setText('buffer-rate', `${metrics.buffer.postsPerDay} / DAY`);
  setText('meta-roas', `${metrics.metaAds.roas}x`);
  setText('meta-spend', metrics.metaAds.spend7d);
  setText('gmail-resolved', metrics.gmail.autoResolved);
  setText('gmail-total', metrics.gmail.totalReceived);
}

let cachedSubagents = [];

async function runDailyBrief(speak = false) {
  const res = await fetch('/api/brief');
  const brief = await res.json();
  cachedSubagents = brief.subagents || [];
  renderSubagents(cachedSubagents);
  renderRecommendations(brief.recommendations || []);
  renderMetrics(brief.metrics);

  if (speak) {
    appendLog('USER', 'Hey Jarvis, wake up! How is the app doing?', true);
    appendLog('J.A.R.V.I.S.', brief.speechText, false);
    await speakJarvis(brief.speechText);
  } else {
    appendLog('J.A.R.V.I.S. (ROUTINE)', 'Daily briefing pre-computed and ready for inspection, sir.');
  }
}

async function sendCommand(commandText) {
  if (!commandText.trim()) return;
  appendLog('USER', commandText, true);

  const res = await fetch('/api/command', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ command: commandText })
  });
  const data = await res.json();

  const indicator = document.getElementById('active-agent-indicator');
  if (indicator) indicator.textContent = `ACTIVE: ${data.agentName.toUpperCase()}`;

  renderSubagents(cachedSubagents, data.agentId);
  renderMetrics(data.metrics);
  appendLog(data.agentName.toUpperCase(), data.reply, false);
  await speakJarvis(data.reply);
}

// Wire up controls
document.getElementById('wake-btn')?.addEventListener('click', () => runDailyBrief(true));

document.getElementById('command-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('command-input');
  if (!input || !input.value.trim()) return;
  const text = input.value;
  input.value = '';
  sendCommand(text);
});

document.getElementById('mic-btn')?.addEventListener('click', () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    appendLog('SYSTEM', 'Browser SpeechRecognition unavailable — use the command bar or Chrome desktop.');
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  state.listening = true;
  const micBtn = document.getElementById('mic-btn');
  if (micBtn) micBtn.textContent = '🔴 LISTENING...';

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    sendCommand(transcript);
  };
  recognition.onend = () => {
    state.listening = false;
    if (micBtn) micBtn.textContent = '🎙️ PUSH TO TALK';
  };
  recognition.start();
});

// 3D Wireframe Globe & Waveform Canvas Render Loop
function initCanvases() {
  const globeCanvas = document.getElementById('globe-canvas');
  const waveCanvas = document.getElementById('wave-canvas');
  if (!globeCanvas || !waveCanvas) return;
  const gCtx = globeCanvas.getContext('2d');
  const wCtx = waveCanvas.getContext('2d');

  function render() {
    state.phase += state.speaking ? 0.045 : 0.014;

    // 1. Draw 3D Wireframe Globe
    const w = globeCanvas.width;
    const h = globeCanvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const pulse = state.speaking ? 1 + Math.sin(state.phase * 3) * 0.055 : 1;
    const radius = 128 * pulse;

    gCtx.clearRect(0, 0, w, h);
    gCtx.strokeStyle = state.speaking ? 'rgba(125, 211, 252, 0.85)' : 'rgba(56, 189, 248, 0.52)';
    gCtx.lineWidth = 1.1;

    // Longitude meridians
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 8 + state.phase * 0.5;
      const rx = Math.abs(Math.cos(angle)) * radius;
      gCtx.beginPath();
      gCtx.ellipse(cx, cy, rx, radius, 0, 0, Math.PI * 2);
      gCtx.stroke();
    }

    // Latitude parallels
    for (let lat = -0.75; lat <= 0.75; lat += 0.375) {
      const ry = Math.sqrt(1 - lat * lat) * radius;
      const yOffset = cy + lat * radius;
      gCtx.beginPath();
      gCtx.ellipse(cx, yOffset, ry, ry * 0.24, 0, 0, Math.PI * 2);
      gCtx.stroke();
    }

    // 2. Draw Dual-Channel Audio/Telemetry Waveform
    const ww = waveCanvas.width;
    const wh = waveCanvas.height;
    wCtx.clearRect(0, 0, ww, wh);

    const amp = state.speaking ? 28 : 9;
    [
      { color: '#38bdf8', freq: 0.04, speed: 2.2 },
      { color: '#34d399', freq: 0.065, speed: -1.6 }
    ].forEach((ch) => {
      wCtx.beginPath();
      wCtx.strokeStyle = ch.color;
      wCtx.lineWidth = 1.8;
      for (let x = 0; x < ww; x++) {
        const env = Math.sin((x / ww) * Math.PI);
        const y =
          wh / 2 +
          Math.sin(x * ch.freq + state.phase * ch.speed) * amp * env;
        if (x === 0) wCtx.moveTo(x, y);
        else wCtx.lineTo(x, y);
      }
      wCtx.stroke();
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

initCanvases();
runDailyBrief(false);
