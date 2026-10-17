let allTools = [];
let activeCategory = 'all';
let currentTool = null;

async function loadCatalog() {
  const res = await fetch('/api/tools');
  const data = await res.json();
  allTools = data.tools || [];
  renderCatalog();

  const initialSlug = window.__INITIAL_TOOL_SLUG__;
  const matched = allTools.find((t) => t.slug === initialSlug) || allTools[0];
  if (matched) selectTool(matched, false);
}

function renderCatalog() {
  const query = (document.getElementById('tool-search')?.value || '').toLowerCase();
  const container = document.getElementById('tools-directory');
  if (!container) return;

  const filtered = allTools.filter((t) => {
    const catOk = activeCategory === 'all' || t.category === activeCategory;
    const searchOk = !query || t.slug.includes(query) || t.title.toLowerCase().includes(query);
    return catOk && searchOk;
  });

  const countEl = document.getElementById('catalog-count');
  if (countEl) countEl.textContent = `${filtered.length} TOOLS`;

  container.replaceChildren(
    ...filtered.map((tool) => {
      const link = document.createElement('a');
      link.href = `/tools/${tool.slug}`;
      link.className = 'log-entry';
      link.style.textDecoration = 'none';
      link.style.color = 'inherit';
      link.style.display = 'block';

      const top = document.createElement('div');
      top.className = 'log-meta';
      top.textContent = `[${tool.category.toUpperCase()}] /tools/${tool.slug} • ${tool.runtime}`;

      const name = document.createElement('div');
      name.style.fontWeight = '700';
      name.style.color = 'var(--cyan-bright)';
      name.textContent = tool.title;

      const bench = document.createElement('div');
      bench.style.fontSize = '0.64rem';
      bench.style.color = 'var(--text-muted)';
      bench.textContent = `Paid Benchmark: ${tool.benchmark}`;

      link.append(top, name, bench);
      link.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.pushState({}, '', `/tools/${tool.slug}`);
        selectTool(tool, true);
      });
      return link;
    })
  );
}

function selectTool(tool) {
  currentTool = tool;
  document.title = `${tool.title} — Free Browser Tool (PixPunk Engine)`;
  const h1 = document.getElementById('tool-page-h1');
  if (h1) h1.textContent = tool.title.toUpperCase();

  const titleEl = document.getElementById('active-tool-title');
  if (titleEl) titleEl.textContent = `CLIENT-SIDE WORKSPACE // ${tool.title.toUpperCase()}`;

  const benchEl = document.getElementById('active-tool-benchmark');
  if (benchEl) benchEl.textContent = tool.benchmark;

  const engines = ['image-canvas', 'doc-markdown', 'cad-dxf', 'media-audio-video', '3d-stage'];
  for (const eng of engines) {
    const el = document.getElementById(`engine-${eng}`);
    if (el) el.style.display = eng === tool.engine ? 'block' : 'none';
  }
}

// Category & Search listeners
document.querySelectorAll('#category-tabs button').forEach((btn) => {
  btn.addEventListener('click', () => {
    activeCategory = btn.getAttribute('data-cat') || 'all';
    renderCatalog();
  });
});

document.getElementById('tool-search')?.addEventListener('input', renderCatalog);

// 1. Image Canvas Engine
const workCanvas = document.getElementById('work-canvas');
const workCtx = workCanvas?.getContext('2d');

function drawDemoGraphic() {
  if (!workCanvas || !workCtx) return;
  const effect = document.getElementById('img-effect')?.value || 'none';
  workCtx.clearRect(0, 0, workCanvas.width, workCanvas.height);
  workCtx.filter = effect === 'blur' ? 'blur(6px)' : 'none';

  if (effect === 'studio') {
    const grad = workCtx.createRadialGradient(280, 150, 20, 280, 150, 260);
    grad.addColorStop(0, '#0f2942');
    grad.addColorStop(1, '#020813');
    workCtx.fillStyle = grad;
    workCtx.fillRect(0, 0, workCanvas.width, workCanvas.height);
  }

  workCtx.strokeStyle = '#38bdf8';
  workCtx.lineWidth = 3;
  workCtx.strokeRect(110, 55, 340, 190);
  workCtx.fillStyle = '#7dd3fc';
  workCtx.font = 'bold 20px monospace';
  workCtx.fillText(currentTool ? currentTool.title.toUpperCase() : 'PIXPUNK STUDIO', 135, 135);
  workCtx.fillStyle = '#34d399';
  workCtx.font = '14px monospace';
  workCtx.fillText('100% Client-Side Canvas / WebGPU Pipeline', 135, 175);
}

document.getElementById('img-demo-btn')?.addEventListener('click', drawDemoGraphic);
document.getElementById('img-effect')?.addEventListener('change', drawDemoGraphic);

document.getElementById('img-input')?.addEventListener('change', (e) => {
  const file = e.target.files?.[0];
  if (!file || !workCanvas || !workCtx) return;
  const img = new Image();
  img.onload = () => {
    const scale = parseFloat(document.getElementById('img-scale')?.value || '1');
    workCanvas.width = Math.max(120, Math.round(img.width * scale));
    workCanvas.height = Math.max(120, Math.round(img.height * scale));
    workCtx.drawImage(img, 0, 0, workCanvas.width, workCanvas.height);
  };
  img.src = URL.createObjectURL(file);
});

document.getElementById('img-export-btn')?.addEventListener('click', () => {
  if (!workCanvas) return;
  const mime = document.getElementById('img-format')?.value || 'image/png';
  const ext = mime.split('/')[1];
  const url = workCanvas.toDataURL(mime, 0.9);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${currentTool?.slug || 'converted'}.${ext}`;
  a.click();
});

// 2. Document to Markdown & PII Redaction Engine
document.getElementById('doc-sample-table-btn')?.addEventListener('click', () => {
  const input = document.getElementById('doc-input');
  if (input) {
    input.value = `Tool Slug,Category,Monthly Search Vol,Paid SaaS Benchmark\npdf-to-markdown,Document,49500,Mathpix ($19/mo)\ndxf-to-svg,CAD,22100,Scan2CAD ($49/mo)\nredact-pdf,Legal AI,33400,Redactable ($39/mo)`;
  }
});

document.getElementById('doc-sample-pii-btn')?.addEventListener('click', () => {
  const input = document.getElementById('doc-input');
  if (input) {
    input.value = `CONFIDENTIAL CLIENT AGREEMENT\nClient Email: founder@acmecorp.io\nPhone: (415) 890-2319\nSSN: 123-45-6789\nBilling Card: 4532 0151 1283 0366`;
  }
});

document.getElementById('doc-convert-md-btn')?.addEventListener('click', async () => {
  const raw = document.getElementById('doc-input')?.value || '';
  const res = await fetch('/api/tools/convert', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode: 'markdown', text: raw })
  });
  const data = await res.json();
  const out = document.getElementById('doc-output');
  if (out) out.value = data.output || '';
});

document.getElementById('doc-redact-btn')?.addEventListener('click', async () => {
  const raw = document.getElementById('doc-input')?.value || '';
  const res = await fetch('/api/tools/convert', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode: 'redact', text: raw })
  });
  const data = await res.json();
  const out = document.getElementById('doc-output');
  if (out) out.value = data.output || '';
});

document.getElementById('doc-download-btn')?.addEventListener('click', () => {
  const out = document.getElementById('doc-output')?.value || '';
  const blob = new Blob([out], { type: 'text/markdown' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${currentTool?.slug || 'document'}.md`;
  a.click();
});

// 3. CAD DXF to SVG Engine
const sampleDxf = `0\nSECTION\n2\nENTITIES\n0\nLINE\n10\n30\n20\n30\n11\n270\n21\n30\n0\nLINE\n10\n270\n20\n30\n11\n270\n21\n170\n0\nLINE\n10\n270\n20\n170\n11\n30\n21\n170\n0\nLINE\n10\n30\n20\n170\n11\n30\n21\n30\n0\nCIRCLE\n10\n150\n20\n100\n40\n45\n0\nCIRCLE\n10\n60\n20\n60\n40\n12\n0\nCIRCLE\n10\n240\n20\n60\n40\n12\n0\nENDSEC\n0\nEOF`;

async function renderDxfPreview() {
  const raw = document.getElementById('dxf-input')?.value || sampleDxf;
  const res = await fetch('/api/tools/convert', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode: 'dxf', text: raw })
  });
  const data = await res.json();
  const preview = document.getElementById('dxf-preview');
  if (preview) preview.innerHTML = data.output || '';
}

document.getElementById('dxf-sample-btn')?.addEventListener('click', () => {
  const input = document.getElementById('dxf-input');
  if (input) input.value = sampleDxf;
  renderDxfPreview();
});

document.getElementById('dxf-convert-btn')?.addEventListener('click', renderDxfPreview);

document.getElementById('dxf-download-btn')?.addEventListener('click', () => {
  const svg = document.getElementById('dxf-preview')?.innerHTML || '';
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${currentTool?.slug || 'blueprint'}.svg`;
  a.click();
});

// 4. Audio / Video WAV Synthesizer
document.getElementById('media-synth-btn')?.addEventListener('click', () => {
  const sampleRate = 44100;
  const duration = 1;
  const numSamples = sampleRate * duration;
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);
  const writeStr = (offset, str) => {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  };
  writeStr(0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  writeStr(8, 'WAVEfmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, 'data');
  view.setUint32(40, numSamples * 2, true);
  for (let i = 0; i < numSamples; i++) {
    const sample = Math.sin((2 * Math.PI * 440 * i) / sampleRate) * 0.35;
    view.setInt16(44 + i * 2, sample * 32767, true);
  }
  const blob = new Blob([buffer], { type: 'audio/wav' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${currentTool?.slug || 'audio'}.wav`;
  a.click();
});

drawDemoGraphic();
loadCatalog();
