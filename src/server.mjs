import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateDailyBrief, routeCommand } from './agents.mjs';
import { loadFaqMarkdown, loadIdeasMarkdown, appendIdeaMarkdown } from './connectors.mjs';
import {
  TOOLS_CATALOG,
  getToolBySlug,
  generateSitemapXml,
  convertTableToMarkdown,
  redactSensitiveText,
  convertDxfToSvg
} from './tools-catalog.mjs';
import { renderBentoHtml } from './build-static.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

const MIME_TYPES = Object.freeze({
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml'
});

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 65_536) {
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error('Invalid JSON payload'));
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, status, payload) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function renderToolsPage(tool, host = '127.0.0.1:8340') {
  return renderBentoHtml(tool, {
    baseUrl: `http://${host}/tools`,
    basePath: '/tools'
  });
}

export function createJarvisServer(env = process.env) {
  return createServer(async (req, res) => {
    try {
      const host = req.headers.host || '127.0.0.1:8340';
      const url = new URL(req.url || '/', `http://${host}`);

      if (req.method === 'GET' && url.pathname === '/api/brief') {
        const brief = await generateDailyBrief(env);
        return sendJson(res, 200, brief);
      }

      if (req.method === 'GET' && url.pathname === '/api/faq') {
        return sendJson(res, 200, { markdown: loadFaqMarkdown() });
      }

      if (req.method === 'GET' && url.pathname === '/api/ideas') {
        return sendJson(res, 200, { markdown: loadIdeasMarkdown() });
      }

      if (req.method === 'POST' && url.pathname === '/api/ideas') {
        const body = await readJsonBody(req);
        const idea = typeof body.idea === 'string' ? body.idea.slice(0, 4000) : '';
        const markdown = appendIdeaMarkdown(idea);
        return sendJson(res, 200, { ok: true, markdown });
      }

      if (req.method === 'GET' && url.pathname === '/api/tools') {
        return sendJson(res, 200, {
          total: TOOLS_CATALOG.length,
          tools: TOOLS_CATALOG
        });
      }

      if (req.method === 'POST' && url.pathname === '/api/tools/convert') {
        const body = await readJsonBody(req);
        const mode = String(body.mode || '');
        const text = String(body.text || '');
        const output =
          mode === 'redact'
            ? redactSensitiveText(text)
            : mode === 'dxf'
              ? convertDxfToSvg(text)
              : convertTableToMarkdown(text);
        return sendJson(res, 200, { ok: true, output });
      }

      if (req.method === 'GET' && url.pathname === '/sitemap.xml') {
        const xml = generateSitemapXml(`http://${host}`);
        res.writeHead(200, { 'Content-Type': 'application/xml; charset=utf-8' });
        return res.end(xml);
      }

      if (req.method === 'GET' && url.pathname.startsWith('/tools/assets/')) {
        const assetName = url.pathname.slice('/tools/assets/'.length);
        if (assetName.includes('..') || assetName.includes('/')) {
          return sendJson(res, 404, { error: 'Not found' });
        }
        const assetPath = join(PUBLIC_DIR, 'assets', assetName);
        if (!existsSync(assetPath)) {
          return sendJson(res, 404, { error: 'Not found' });
        }
        const ext = extname(assetPath);
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'text/plain; charset=utf-8' });
        return res.end(readFileSync(assetPath));
      }

      if (req.method === 'GET' && (url.pathname === '/tools' || url.pathname.startsWith('/tools/'))) {
        const slug = url.pathname.slice('/tools/'.length).replace(/\/+$/, '');
        const tool = slug ? getToolBySlug(slug) : null;
        if (slug && !tool) {
          return sendJson(res, 404, { error: 'Tool route not found' });
        }
        const html = renderToolsPage(tool, host);
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(html);
      }

      if (req.method === 'POST' && url.pathname === '/api/command') {
        const body = await readJsonBody(req);
        const command = typeof body.command === 'string' ? body.command.slice(0, 1000) : '';
        const result = await routeCommand(command, env);
        return sendJson(res, 200, result);
      }

      if (req.method === 'POST' && url.pathname === '/api/tts') {
        const body = await readJsonBody(req);
        const text = typeof body.text === 'string' ? body.text.slice(0, 1500) : '';
        const apiKey = env.FISH_API_KEY;
        const voiceId = env.FISH_VOICE_ID || 'ae74d1059517440aa6e5d2d50598d179';
        const model = env.FISH_MODEL || 's2.1-pro';

        if (!apiKey || !text) {
          res.writeHead(204);
          return res.end();
        }

        const requestTts = (targetModel) =>
          fetch('https://api.fish.audio/v1/tts', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
              model: targetModel
            },
            body: JSON.stringify({
              text,
              reference_id: voiceId,
              format: 'mp3'
            })
          });

        let ttsRes = await requestTts(model);
        if (ttsRes.status === 402 && model !== 's2.1-pro-free') {
          ttsRes = await requestTts('s2.1-pro-free');
        }

        const contentType = ttsRes.headers.get('content-type') || '';
        if (!ttsRes.ok || contentType.includes('application/json')) {
          res.writeHead(204);
          return res.end();
        }

        const audioBuffer = Buffer.from(await ttsRes.arrayBuffer());
        res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
        return res.end(audioBuffer);
      }

      const safeFile = url.pathname === '/' ? 'index.html' : url.pathname.replace(/^\/+/, '');
      if (safeFile.includes('..') || safeFile.includes('/')) {
        return sendJson(res, 404, { error: 'Not found' });
      }

      const filePath = join(PUBLIC_DIR, safeFile);
      if (!existsSync(filePath)) {
        return sendJson(res, 404, { error: 'Not found' });
      }

      const ext = extname(filePath);
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'text/plain; charset=utf-8' });
      res.end(readFileSync(filePath));
    } catch {
      sendJson(res, 400, { error: 'Bad request' });
    }
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT || 8340);
  const server = createJarvisServer();
  server.listen(port, '127.0.0.1', () => {
    console.log(`J.A.R.V.I.S. Command Center online at http://127.0.0.1:${port}`);
  });
}
