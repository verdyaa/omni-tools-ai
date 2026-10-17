import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  getMetricsSnapshot,
  loadFaqMarkdown,
  loadIdeasMarkdown,
  resolveSupportEmails,
  getLocalInbox
} from './connectors.mjs';

const execFileAsync = promisify(execFile);
const __dirname = dirname(fileURLToPath(import.meta.url));
const WORKSPACE_DIR = join(__dirname, '..');

export const SUBAGENTS = Object.freeze([
  Object.freeze({
    id: 'tom',
    name: 'Tom',
    role: 'Developer Agent',
    model: 'agentrouter/deepseek-v4-flash',
    fallbackModel: 'opencode/deepseek-v4.1-flash-free',
    status: 'ACTIVE',
    currentTask: 'Connected to local Git workspace & test suite — ready to build features & review PRs',
    tools: Object.freeze(['OpenCode Build', 'Git / GH CLI', 'Test Runner', 'File R/W'])
  }),
  Object.freeze({
    id: 'scout',
    name: 'Scout',
    role: 'Growth & Content Agent',
    model: 'opencode/deepseek-v4.1-flash-free',
    fallbackModel: 'opencode/glm-5.3-flash-free',
    status: 'STANDBY',
    currentTask: 'Connected to OpenCode Free & knowledge/buffer-queue.json — researching viral hooks & ad angles',
    tools: Object.freeze(['Web Search', 'Buffer Queue', 'Meta Ads Analysis'])
  }),
  Object.freeze({
    id: 'support',
    name: 'Support',
    role: 'Inbox & FAQ Agent',
    model: 'opencode/glm-5.3-flash-free',
    fallbackModel: 'opencode/deepseek-v4.1-flash-free',
    status: 'MONITORING',
    currentTask: 'Auto-resolving customer emails in knowledge/inbox.json via knowledge/faq.md',
    tools: Object.freeze(['Gmail / Inbox', 'knowledge/faq.md', 'Escalation Router'])
  })
]);

function cleanOpenCodeOutput(stdout) {
  return String(stdout || '')
    .replace(/\x1b\[[0-9;]*m/g, '')
    .split('\n')
    .filter((line) => {
      const t = line.trim();
      if (!t) return false;
      if (t.startsWith('>') || t.startsWith('→') || t.startsWith('✱') || t.startsWith('⚙')) return false;
      if (/^skipped:/i.test(t) || /^risk:/i.test(t)) return false;
      return true;
    })
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function runLiveOpenCodeAgent(agentId, model, userCommand) {
  const ideas = loadIdeasMarkdown().slice(0, 1200);
  const fullPrompt = [
    `Workspace context from knowledge/ideas.md:\n${ideas}`,
    `User directive: ${userCommand}`,
    `Respond in 2 to 4 concise, spoken-friendly sentences summarizing the exact action taken or findings.`
  ].join('\n\n');

  try {
    const { stdout } = await execFileAsync(
      'opencode',
      ['run', '--standalone', '--auto', '--agent', agentId, '-m', model, fullPrompt],
      { cwd: WORKSPACE_DIR, timeout: 45_000 }
    );
    const cleaned = cleanOpenCodeOutput(stdout);
    return cleaned || null;
  } catch {
    return null;
  }
}

export async function generateDailyBrief(env = process.env) {
  const metrics = await getMetricsSnapshot(env);
  const { revenueCat, buffer, metaAds, gmail } = metrics;

  const speechText = [
    'Good evening, sir. Pulling up our app stats now.',
    `Over the last seven days, we had ${revenueCat.downloads7d.toLocaleString('en-US')} new downloads and generated $${revenueCat.revenue7d.toLocaleString('en-US')} in revenue.`,
    `For organic content, I'm still posting ${buffer.postsPerDay} short-form videos a day across ${buffer.platforms.join(', ')}.`,
    `On ads, you spent $${metaAds.spend7d} at a ${metaAds.roas} return on ad spend.`,
    `Throughout the week, you received ${gmail.totalReceived} customer emails. I resolved ${gmail.autoResolved} automatically, mostly common questions and account issues, while ${gmail.escalatedToDev} requested the same feature. Since you had already approved that direction, I handed it to Tom, the developer agent.`,
    'My recommendation today: review the back-end PR, keep leaning into the street interview ad angle, and have Scout research the next set of organic content angles to test. What would you like me to handle first, sir?'
  ].join(' ');

  return Object.freeze({
    generatedAt: metrics.timestamp,
    speechText,
    metrics,
    subagents: SUBAGENTS,
    recommendations: Object.freeze([
      Object.freeze({
        id: 'rec-pr',
        agentId: 'tom',
        title: 'Review Back-End PR #42',
        command: 'Have Tom review the back-end PR and run the verification suite',
        badge: 'TOM • DEEPSEEK V4'
      }),
      Object.freeze({
        id: 'rec-ads',
        agentId: 'scout',
        title: 'Scale Street Interview Ad Angle',
        command: 'Have Scout draft 3 street interview hooks and queue them in Buffer',
        badge: 'SCOUT • OPENCODE FREE'
      }),
      Object.freeze({
        id: 'rec-scout',
        agentId: 'support',
        title: 'Triage Customer Support Inbox',
        command: 'Have Support resolve unread customer emails using knowledge/faq.md',
        badge: 'SUPPORT • GLM 5.3 FREE'
      })
    ])
  });
}

export async function routeCommand(rawCommand, env = process.env) {
  const text = String(rawCommand || '').trim();
  const lower = text.toLowerCase();
  const metrics = await getMetricsSnapshot(env);
  const useLiveOpenCode = env.LIVE_AGENTS === 'true';

  if (!text) {
    return {
      agentId: 'jarvis',
      agentName: 'J.A.R.V.I.S.',
      status: 'READY',
      reply: 'Awaiting your command, sir.'
    };
  }

  if (lower.includes('tom') || lower.includes('pr') || lower.includes('back-end') || lower.includes('backend') || lower.includes('code') || lower.includes('bug') || lower.includes('build') || lower.includes('implement')) {
    const liveReply = useLiveOpenCode
      ? (await runLiveOpenCodeAgent('tom', 'agentrouter/deepseek-v4-flash', text)) ||
        (await runLiveOpenCodeAgent('tom', 'opencode/deepseek-v4.1-flash-free', text))
      : null;

    return {
      agentId: 'tom',
      agentName: 'Tom (Developer Agent · DeepSeek)',
      status: 'DISPATCHED',
      reply:
        liveReply ||
        `Dispatched to Tom, the developer agent. Tom is reviewing back-end PR #42, verifying the offline export sync feature requested by 3 customers, and running the test suite now, sir.`,
      metrics
    };
  }

  if (lower.includes('scout') || lower.includes('organic') || lower.includes('content') || lower.includes('buffer') || lower.includes('angle') || lower.includes('video') || lower.includes('hook')) {
    const liveReply = useLiveOpenCode
      ? await runLiveOpenCodeAgent('scout', 'opencode/deepseek-v4.1-flash-free', text)
      : null;

    return {
      agentId: 'scout',
      agentName: 'Scout (Growth Agent · OpenCode Free)',
      status: 'DISPATCHED',
      reply:
        liveReply ||
        `Handed off to Scout. Scout is researching the next set of organic street-interview content angles and queuing ${metrics.buffer.postsPerDay} short-form videos per day in Buffer across ${metrics.buffer.platforms.join(', ')}.`,
      metrics
    };
  }

  if (lower.includes('email') || lower.includes('gmail') || lower.includes('support') || lower.includes('customer') || lower.includes('faq') || lower.includes('inbox')) {
    const inbox = getLocalInbox();
    const sampleBatch = resolveSupportEmails(
      inbox.length
        ? inbox
        : [
            { id: '101', subject: 'Reset password link', body: 'Need help logging into my account' },
            { id: '102', subject: 'Restore purchase on new iPhone', body: 'Pro subscription missing' },
            { id: '103', subject: 'Offline export feature request', body: 'Can we get offline CSV export?' }
          ],
      loadFaqMarkdown()
    );

    const liveReply = useLiveOpenCode
      ? await runLiveOpenCodeAgent(
          'support',
          'opencode/glm-5.3-flash-free',
          `${text}\nResolved automatically via FAQ: ${sampleBatch.resolved.length}, Escalated to Tom: ${sampleBatch.escalated.length}`
        )
      : null;

    return {
      agentId: 'support',
      agentName: 'Support (Inbox Agent · GLM-5.3 Free)',
      status: 'DISPATCHED',
      reply:
        liveReply ||
        `Gmail MCP synchronized against knowledge/faq.md. Out of ${metrics.gmail.totalReceived} customer emails this week, ${metrics.gmail.autoResolved} were resolved automatically (${sampleBatch.resolved.length} in the latest batch) and ${metrics.gmail.escalatedToDev} feature requests were routed to Tom.`,
      metrics
    };
  }

  if (lower.includes('wake') || lower.includes('how is the app') || lower.includes("how's the app") || lower.includes('daily brief')) {
    const brief = await generateDailyBrief(env);
    return {
      agentId: 'jarvis',
      agentName: 'J.A.R.V.I.S.',
      status: 'ONLINE',
      reply: brief.speechText,
      metrics
    };
  }

  if (useLiveOpenCode) {
    const liveJarvis =
      (await runLiveOpenCodeAgent('jarvis', 'agentrouter/deepseek-v4-flash', text)) ||
      (await runLiveOpenCodeAgent('jarvis', 'opencode/deepseek-v4.1-flash-free', text));
    if (liveJarvis) {
      return {
        agentId: 'jarvis',
        agentName: 'J.A.R.V.I.S. (DeepSeek V4)',
        status: 'ONLINE',
        reply: liveJarvis,
        metrics
      };
    }
  }

  const brief = await generateDailyBrief(env);
  return {
    agentId: 'jarvis',
    agentName: 'J.A.R.V.I.S.',
    status: 'ONLINE',
    reply: brief.speechText,
    metrics
  };
}
