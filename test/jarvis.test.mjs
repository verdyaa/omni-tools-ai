import test from 'node:test';
import assert from 'node:assert/strict';
import { getMetricsSnapshot, resolveSupportEmails } from '../src/connectors.mjs';
import { routeCommand, generateDailyBrief, SUBAGENTS } from '../src/agents.mjs';
import { createJarvisServer } from '../src/server.mjs';

test('connectors return immutable metrics snapshot for RevenueCat, Buffer, Meta Ads, and Gmail', async () => {
  const snapshot = await getMetricsSnapshot({});
  assert.equal(snapshot.revenueCat.downloads7d, 2459);
  assert.equal(snapshot.revenueCat.revenue7d, 4289);
  assert.equal(snapshot.buffer.postsPerDay, 3);
  assert.equal(snapshot.metaAds.spend7d, 475);
  assert.equal(snapshot.metaAds.roas, 1.5);
  assert.equal(snapshot.gmail.totalReceived, 16);
  assert.equal(snapshot.gmail.autoResolved, 13);
});

test('support agent resolves common FAQ emails and flags billing/custom escalations', () => {
  const faqMarkdown = `# FAQ\n## Reset Password\nUse Settings > Reset.\n## Cancel Subscription\nManage in App Store settings.`;
  const emails = [
    { id: '1', subject: 'How do I reset password?', body: 'I forgot my password' },
    { id: '2', subject: 'Cancel subscription question', body: 'How to cancel?' },
    { id: '3', subject: 'Custom enterprise partnership', body: 'Need custom SLA contract' }
  ];
  const result = resolveSupportEmails(emails, faqMarkdown);
  assert.equal(result.resolved.length, 2);
  assert.equal(result.escalated.length, 1);
  assert.equal(result.escalated[0].id, '3');
});

test('routeCommand dispatches tasks to Tom, Scout, Support, or Jarvis orchestrator', async () => {
  assert.equal(SUBAGENTS.length, 3);

  const devTask = await routeCommand("Have Tom review the back-end PR and fix auth", {});
  assert.equal(devTask.agentId, 'tom');
  assert.match(devTask.reply, /Tom/i);

  const scoutTask = await routeCommand("Have Scout research the next set of organic content angles", {});
  assert.equal(scoutTask.agentId, 'scout');
  assert.match(scoutTask.reply, /Scout/i);

  const wakeTask = await routeCommand("Hey Jarvis, wake up! How's the app doing?", {});
  assert.equal(wakeTask.agentId, 'jarvis');
  assert.match(wakeTask.reply, /2,459 new downloads/i);
  assert.match(wakeTask.reply, /\$4,289/i);
});

test('generateDailyBrief compiles full multi-MCP briefing matching the reel workflow', async () => {
  const brief = await generateDailyBrief({});
  assert.match(brief.speechText, /Good evening, sir/i);
  assert.match(brief.speechText, /2,459 new downloads/i);
  assert.match(brief.speechText, /Tom, the developer agent/i);
  assert.match(brief.speechText, /Scout research the next set of organic content angles/i);
  assert.equal(brief.recommendations.length, 3);
});

test('HTTP server serves HUD and /api/brief, /api/command endpoints', async () => {
  const server = createJarvisServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;

  try {
    const htmlRes = await fetch(`${baseUrl}/`);
    assert.equal(htmlRes.status, 200);
    const html = await htmlRes.text();
    assert.match(html, /J\.A\.R\.V\.I\.S\./);

    const briefRes = await fetch(`${baseUrl}/api/brief`);
    assert.equal(briefRes.status, 200);
    const brief = await briefRes.json();
    assert.ok(brief.speechText.includes('Good evening, sir'));

    const cmdRes = await fetch(`${baseUrl}/api/command`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command: 'Have Tom review the back-end PR' })
    });
    assert.equal(cmdRes.status, 200);
    const cmdData = await cmdRes.json();
    assert.equal(cmdData.agentId, 'tom');

    const ttsNoKeyRes = await fetch(`${baseUrl}/api/tts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: 'Good evening, sir.' })
    });
    assert.equal(ttsNoKeyRes.status, 204);

    const toolsApiRes = await fetch(`${baseUrl}/api/tools`);
    assert.equal(toolsApiRes.status, 200);
    const toolsData = await toolsApiRes.json();
    assert.equal(toolsData.total, 84);

    const seoPageRes = await fetch(`${baseUrl}/tools/dxf-to-svg`);
    assert.equal(seoPageRes.status, 200);
    const seoHtml = await seoPageRes.text();
    assert.match(seoHtml, /DXF to SVG/i);

    const sitemapRes = await fetch(`${baseUrl}/sitemap.xml`);
    assert.equal(sitemapRes.status, 200);
    const sitemapXml = await sitemapRes.text();
    assert.match(sitemapXml, /\/tools\/pdf-to-markdown<\/loc>/);
    assert.match(sitemapXml, /\/tools\/dxf-to-svg<\/loc>/);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

test('buildStaticSite generates standalone 84-page Bento-styled monetized static site for GitHub Pages (omni-tools-ai)', async () => {
  const { buildStaticSite } = await import('../src/build-static.mjs');
  const result = buildStaticSite({
    baseUrl: 'https://verdyaa.github.io/omni-tools-ai',
    basePath: '/omni-tools-ai'
  });
  assert.equal(result.pagesBuilt, 85); // 1 home + 84 tool pages
  assert.match(result.sampleHtml, /https:\/\/verdyaa\.github\.io\/omni-tools-ai\/dxf-to-svg\//);
  assert.match(result.sampleHtml, /class="bento-grid"/);
  assert.match(result.sampleHtml, /<dialog id="pro-dialog" closedby="any"/);
  assert.match(result.sampleHtml, /Unlock OmniTools Pro/);
});

test('license security: validates cryptographic checksums and rejects mock keys and tampered payloads', async () => {
  const { computeLicenseChecksum, validateLicensePayload } = await import('../src/build-static.mjs');

  const validKey = 'GUMROAD-REAL-KEY-12345';
  const productId = 'IWq3y0TS5f0qACrpBmCung==';
  const sig = computeLicenseChecksum(validKey, productId);

  // 1. Valid signed payload must pass
  const validPayload = {
    k: validKey,
    pid: productId,
    ts: Date.now(),
    sig
  };
  assert.equal(validateLicensePayload(validPayload), true);

  // 2. Mock / backdoor keys must fail
  assert.equal(validateLicensePayload('OMNI-PRO-2026'), false);
  assert.equal(validateLicensePayload({ k: 'OMNI-PRO-2026', pid: productId, sig: 'invalid' }), false);

  // 3. Tampered payload must fail
  assert.equal(validateLicensePayload({ k: validKey, pid: 'TAMPERED_PRODUCT_ID', ts: Date.now(), sig }), false);
  assert.equal(validateLicensePayload({ k: 'OTHER_KEY', pid: productId, ts: Date.now(), sig }), false);
  assert.equal(validateLicensePayload(null), false);
  assert.equal(validateLicensePayload(''), false);

  // 4. Expired subscription must fail
  const expiredPayload = {
    k: validKey,
    pid: productId,
    ts: Date.now() - 40 * 86400 * 1000,
    exp: Date.now() - 1000,
    sig
  };
  assert.equal(validateLicensePayload(expiredPayload), false);
});

test('client bundle & CSS: enforces concrete gates, has zero backdoors, and includes distinct design character', async () => {
  const { buildClientBundle, buildBentoStyles } = await import('../src/build-static.mjs');

  const bundle = buildClientBundle('/omni-tools-ai');
  // Backdoor check: mock key auto-unlock and raw ?pro_key= setting must NOT exist
  assert.ok(!bundle.includes("localStorage.setItem(STORAGE_KEY_PRO, key)"));
  assert.ok(!bundle.includes("localStorage.setItem(STORAGE_KEY_PRO, params.get('pro_key'))"));
  assert.ok(!bundle.includes("Pro batch & 4x Hi-DPI unlocked"));

  // Real Gumroad API check
  assert.ok(bundle.includes('https://api.gumroad.com/v2/licenses/verify'));
  assert.ok(bundle.includes('IWq3y0TS5f0qACrpBmCung=='));
  assert.ok(bundle.includes('dcjKFDn4SlOJSRSXInQIrQ=='));

  // Gate checks: Quota, upscale clamp, batch blocker, deactivate button
  assert.ok(bundle.includes('FREE_DAILY_LIMIT = 2'));
  assert.ok(bundle.includes('deactivate-license-btn'));
  assert.ok(bundle.includes('img-scale'));

  // CSS Character check: Custom fonts, status LED, tactile button, precision grid
  const css = buildBentoStyles();
  assert.ok(css.includes('JetBrains Mono'));
  assert.ok(css.includes('Space Grotesk'));
  assert.ok(css.includes('.status-led'));
  assert.ok(css.includes('radial-gradient'));
  assert.ok(css.includes('box-shadow'));
});

test('renderBentoHtml produces structured hardware console UI with Gumroad checkout & dialog', async () => {
  const { renderBentoHtml } = await import('../src/build-static.mjs');
  const { TOOLS_CATALOG } = await import('../src/tools-catalog.mjs');

  const dxfTool = TOOLS_CATALOG.find((t) => t.slug === 'dxf-to-svg');
  const html = renderBentoHtml(dxfTool, {
    baseUrl: 'https://verdyaa.github.io/omni-tools-ai',
    basePath: '/omni-tools-ai'
  });

  // Verify Gumroad checkout links
  assert.ok(html.includes('https://wedworks.gumroad.com/l/xlqmp'));
  assert.ok(html.includes('https://wedworks.gumroad.com/l/etvreq'));

  // Verify hardware telemetry and status LED
  assert.ok(html.includes('status-led'));
  assert.ok(html.includes('TERMINAL // REV 2026.4'));
  assert.ok(html.includes('LOCAL RAM // ZERO CLOUD'));

  // Verify Pro dialog with reason banner and reset button
  assert.ok(html.includes('id="pro-dialog-reason"'));
  assert.ok(html.includes('id="dialog-deactivate-btn"'));
  assert.ok(html.includes('id="deactivate-license-btn"'));
  assert.ok(html.includes('closedby="any"'));
});

test('all 5 tool engines expose matching file inputs (including image input for OCR, DXF upload, audio waveform, and PDF builder)', async () => {
  const { renderBentoHtml, buildClientBundle } = await import('../src/build-static.mjs');
  const { TOOLS_CATALOG } = await import('../src/tools-catalog.mjs');

  const ocrTool = TOOLS_CATALOG.find((t) => t.slug === 'image-to-text');
  const html = renderBentoHtml(ocrTool, {
    baseUrl: 'https://verdyaa.github.io/omni-tools-ai',
    basePath: '/omni-tools-ai'
  });

  // 1. Document / OCR engine must have an image & document file input + OCR preview canvas
  assert.ok(html.includes('id="doc-file-input"'));
  assert.ok(html.includes('accept="image/*'));
  assert.ok(html.includes('id="ocr-preview-canvas"'));
  assert.ok(html.includes('id="doc-ocr-sample-btn"'));

  // 2. CAD DXF engine must have a .dxf file input
  assert.ok(html.includes('id="dxf-file-input"'));

  // 3. Audio/Video engine must have waveform canvas, transcript output, paste button, and dropzone
  assert.ok(html.includes('id="media-waveform"'));
  assert.ok(html.includes('id="media-transcript"'));
  assert.ok(html.includes('id="media-paste-btn"'));
  assert.ok(html.includes('id="media-dropzone"'));

  // 4. Client bundle must wire up OCR recognition, background removal, PDF generation, real audio WAV encoding, drag/drop/paste routing, and 3D rig uploads
  const bundle = buildClientBundle('/omni-tools-ai');
  assert.ok(bundle.includes('runImageOcr'));
  assert.ok(bundle.includes('applyBackgroundRemoval'));
  assert.ok(bundle.includes('canvasToPdfBlob'));
  assert.ok(bundle.includes('handleImageFiles'));
  assert.ok(bundle.includes('handleMediaFiles'));
  assert.ok(bundle.includes('routeIncomingFiles'));
  assert.ok(bundle.includes('syncFilesToInput'));
  assert.ok(bundle.includes("window.addEventListener('paste'"));
  assert.ok(bundle.includes('renderTextDocumentCanvas'));
  assert.ok(bundle.includes('decodedAudioBuffer'));
  assert.ok(bundle.includes("getElementById('mmd-file-input')?.addEventListener('change'"));
});






