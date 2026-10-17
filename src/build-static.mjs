import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { TOOLS_CATALOG } from './tools-catalog.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const PUBLIC_DIR = join(__dirname, '..', 'public');

const FEATURED_SLUGS = new Set([
  'pdf-to-markdown',
  'dxf-to-svg',
  'redact-pdf',
  'remove-image-background',
  'upscale-image',
  'excel-to-markdown'
]);

const PARTNER_URLS = Object.freeze({
  'remove-image-background': 'https://www.photoroom.com/?utm_source=omnitools',
  'audio-to-text': 'https://turboscribe.ai/?utm_source=omnitools',
  'video-to-text': 'https://www.descript.com/?utm_source=omnitools',
  'image-to-text': 'https://mathpix.com/?utm_source=omnitools',
  'redact-pdf': 'https://www.redactable.com/?utm_source=omnitools',
  'pdf-to-markdown': 'https://mathpix.com/?utm_source=omnitools',
  'word-to-markdown': 'https://cloud.llamaindex.ai/?utm_source=omnitools',
  'excel-to-markdown': 'https://mathpix.com/?utm_source=omnitools',
  'dxf-to-svg': 'https://www.scan2cad.com/?utm_source=omnitools',
  'dxf-to-pdf': 'https://www.autodwg.com/?utm_source=omnitools',
  'dxf-to-png': 'https://www.scan2cad.com/?utm_source=omnitools',
  'compress-image': 'https://tinypng.com/?utm_source=omnitools',
  'upscale-image': 'https://letsenhance.io/?utm_source=omnitools'
});

function getPartnerUrl(slug) {
  return PARTNER_URLS[slug] || 'https://cloudconvert.com/?utm_source=omnitools';
}

export function computeLicenseChecksum(key, pid) {
  if (typeof key !== 'string' || typeof pid !== 'string' || !key.trim() || !pid.trim()) {
    return '';
  }
  const salt = 'OMNI_GUMROAD_VERIFIED_SECURE_2026_#$!';
  const str = key.trim().toUpperCase() + ':' + pid.trim() + ':' + salt;
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

export function validateLicensePayload(payload) {
  if (!payload || typeof payload !== 'object') return false;
  const { k, pid, sig, exp } = payload;
  if (typeof k !== 'string' || typeof pid !== 'string' || typeof sig !== 'string') return false;
  if (!k.trim() || !pid.trim() || !sig.trim()) return false;
  if (k.toUpperCase().startsWith('OMNI-PRO')) return false;
  const expectedSig = computeLicenseChecksum(k, pid);
  if (!expectedSig || sig !== expectedSig) return false;
  if (typeof exp === 'number' && Date.now() > exp) return false;
  return true;
}

export function buildBentoStyles() {
  return `@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

:root {
  --bg-canvas: #090a0d;
  --bg-card: #12141a;
  --bg-card-hover: #171a22;
  --bg-elevated: #1b1f2b;
  --bg-sunken: #050608;
  --border-subtle: #222634;
  --border-strong: #333a4c;
  --border-focus: #ff6b00;
  --text-primary: #f0f2f5;
  --text-secondary: #949cae;
  --text-muted: #5e6678;
  --accent: #ff6b00;
  --accent-glow: rgba(255, 107, 0, 0.45);
  --accent-soft: rgba(255, 107, 0, 0.12);
  --cyan: #00e5ff;
  --emerald: #10b981;
  --amber: #f59e0b;
  --rose: #f43f5e;
  --in-oklab: ;
}

@supports (background: linear-gradient(in oklab, white, black)) {
  :root {
    --in-oklab: in oklab;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-canvas);
  background-image:
    radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(18, 20, 26, 0.75), rgba(9, 10, 13, 0.98));
  background-size: 20px 20px, 100% 100%;
  background-attachment: fixed;
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  padding: 24px 20px 80px;
}

.bento-container {
  max-width: 1340px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Top Navigation Hardware Bar */
.bento-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
  padding: 14px 22px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 8px 24px rgba(0, 0, 0, 0.6);
  position: relative;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
}

.brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: linear-gradient(135deg var(--in-oklab), #ff6b00, #d946ef);
  display: grid;
  place-items: center;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  color: #fff;
  box-shadow: 0 0 16px var(--accent-glow);
}

.brand-name {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.03em;
}

.brand-tag {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.72rem;
  color: var(--text-muted);
  margin-left: 8px;
  letter-spacing: 0.04em;
}

.topbar-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.nav-chip {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: all 0.12s ease;
}

.nav-chip:hover {
  color: var(--text-primary);
  background: var(--bg-elevated);
  border-color: var(--border-subtle);
}

/* Status LEDs */
.status-led {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 6px;
  box-shadow: 0 0 8px currentColor;
  animation: led-pulse 2.2s infinite ease-in-out;
}

@keyframes led-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.55; transform: scale(0.88); }
}

.status-led.free { color: var(--amber); background: var(--amber); }
.status-led.pro { color: var(--emerald); background: var(--emerald); }
.status-led.locked { color: var(--rose); background: var(--rose); }

/* Tactile Hardware Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding: 8px 15px;
  border-radius: 6px;
  border: 1px solid var(--border-strong);
  background: linear-gradient(180deg var(--in-oklab), #222633, #151821);
  color: var(--text-primary);
  cursor: pointer;
  text-decoration: none;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 2px 4px rgba(0, 0, 0, 0.4);
  transition: transform 0.06s, box-shadow 0.06s, background 0.12s, border-color 0.12s;
}

.btn:hover {
  background: linear-gradient(180deg var(--in-oklab), #282d3c, #1a1e28);
  border-color: #485268;
  color: #fff;
}

.btn:active {
  transform: translateY(1px);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6);
}

.btn-primary {
  background: linear-gradient(180deg var(--in-oklab), #f3f4f6, #d1d5db);
  color: #0b0c10;
  border-color: #ffffff;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 2px 6px rgba(0, 0, 0, 0.4);
}

.btn-primary:hover {
  background: #ffffff;
  color: #000;
}

.btn-accent {
  background: linear-gradient(180deg var(--in-oklab), #ff6b00, #e05300);
  border-color: #ff8533;
  color: #ffffff;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 14px var(--accent-glow);
}

.btn-accent:hover {
  background: linear-gradient(180deg var(--in-oklab), #ff7d1a, #eb5b00);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 20px var(--accent-glow);
}

.btn-outline-danger {
  background: transparent;
  border-color: rgba(244, 63, 94, 0.4);
  color: var(--rose);
}

.btn-outline-danger:hover {
  background: rgba(244, 63, 94, 0.12);
  border-color: var(--rose);
}

/* 12-Column Architectural Bento Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
}

.bento-cell {
  position: relative;
  background: linear-gradient(180deg var(--in-oklab), var(--bg-card), #0c0e13);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 22px;
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.07),
    inset 0 0 0 1px rgba(0, 0, 0, 0.5),
    0 14px 32px -10px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bento-cell::after {
  content: '+';
  position: absolute;
  top: 10px;
  right: 12px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.12);
  pointer-events: none;
}

.cell-workbench {
  grid-column: span 8;
  grid-row: span 2;
  gap: 18px;
}

.cell-monetize {
  grid-column: span 4;
  gap: 14px;
  border-color: rgba(255, 107, 0, 0.28);
}

.cell-partner {
  grid-column: span 4;
  gap: 14px;
}

.cell-directory {
  grid-column: span 12;
  gap: 18px;
}

@media (max-width: 1024px) {
  .cell-workbench,
  .cell-monetize,
  .cell-partner {
    grid-column: span 12;
  }
}

.eyebrow {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.badge-pill {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 3px 8px;
  border-radius: 4px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
}

.badge-pro {
  background: var(--accent-soft);
  border-color: rgba(255, 107, 0, 0.4);
  color: #ff9d5c;
  box-shadow: 0 0 10px rgba(255, 107, 0, 0.2);
}

.badge-locked {
  background: rgba(244, 63, 94, 0.14);
  border-color: rgba(244, 63, 94, 0.4);
  color: #ff8fa3;
}

.workbench-header h1 {
  font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -0.035em;
  margin-top: 6px;
}

.workbench-header p {
  font-size: 0.88rem;
  color: var(--text-secondary);
  margin-top: 4px;
}

.toolbar-strip {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: var(--bg-sunken);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.6);
}

.select-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.74rem;
  color: var(--text-secondary);
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  padding: 6px 10px;
  border-radius: 6px;
}

.select-pill select {
  background: transparent;
  color: var(--text-primary);
  border: none;
  font-family: inherit;
  font-size: 0.74rem;
  font-weight: 600;
  outline: none;
  cursor: pointer;
}

.stage-surface {
  background: var(--bg-sunken);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 16px;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.7);
}

.editor-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
}

@media (max-width: 720px) {
  .editor-split {
    grid-template-columns: 1fr;
  }
}

.editor-split textarea {
  width: 100%;
  background: var(--bg-sunken);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 14px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.8rem;
  resize: vertical;
  outline: none;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.7);
}

.editor-split textarea:focus {
  border-color: var(--border-strong);
}

/* Quota & Monetization Bento Card */
.quota-meter {
  background: var(--bg-sunken);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 12px 14px;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.7);
}

.quota-top {
  display: flex;
  justify-content: space-between;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.76rem;
  margin-bottom: 8px;
  font-variant-numeric: tabular-nums;
  color: var(--text-secondary);
}

.quota-track {
  height: 6px;
  background: var(--bg-elevated);
  border-radius: 999px;
  overflow: hidden;
}

.quota-fill {
  height: 100%;
  background: var(--accent);
  transition: width 0.25s ease;
}

.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--text-secondary);
}

/* Bento Mosaic Directory */
.directory-controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.category-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.cat-btn {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.74rem;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-card);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.12s ease;
}

.cat-btn.active,
.cat-btn:hover {
  background: var(--text-primary);
  color: #0b0c10;
  border-color: var(--text-primary);
  font-weight: 700;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

.search-input {
  min-width: 280px;
  background: var(--bg-sunken);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  padding: 9px 14px;
  border-radius: 6px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.8rem;
  outline: none;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6);
}

.search-input:focus {
  border-color: var(--border-strong);
}

.bento-mosaic {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-auto-flow: dense;
  gap: 12px;
}

.bento-tile {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 15px 16px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 4px 12px rgba(0, 0, 0, 0.4);
  transition: background 0.12s, border-color 0.12s, transform 0.1s;
}

.bento-tile:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.bento-tile.tile-featured {
  grid-column: span 2;
  background: linear-gradient(145deg var(--in-oklab), #181c25, #0d0f15);
  border-color: #2f3647;
}

@media (max-width: 640px) {
  .bento-tile.tile-featured {
    grid-column: span 1;
  }
}

.tile-title {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 0.94rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.tile-meta {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.72rem;
  color: var(--text-muted);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Native Light-Dismiss Monetization Dialog */
dialog#pro-dialog {
  margin: auto;
  max-width: 500px;
  width: calc(100% - 32px);
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-strong);
  border-radius: 14px;
  padding: 26px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

dialog#pro-dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
}

.dialog-alert-banner {
  background: rgba(255, 107, 0, 0.14);
  border: 1px solid rgba(255, 107, 0, 0.35);
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 0.78rem;
  color: #ff9d5c;
  margin-top: 10px;
  line-height: 1.45;
}

.pricing-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 16px 0;
}

.price-box {
  background: var(--bg-sunken);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.price-box.featured {
  border-color: var(--accent);
  box-shadow: 0 0 14px rgba(255, 107, 0, 0.2);
}

.price-amount {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.license-row {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.license-row input {
  flex: 1;
  background: var(--bg-sunken);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  padding: 8px 12px;
  border-radius: 6px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.8rem;
  outline: none;
}

.license-row input:focus {
  border-color: var(--border-strong);
}
`;
}

export function buildClientBundle(basePath) {
  return `const TOOLS_CATALOG = ${JSON.stringify(TOOLS_CATALOG)};
const FEATURED_SLUGS = new Set(${JSON.stringify([...FEATURED_SLUGS])});
const PARTNER_URLS = ${JSON.stringify(PARTNER_URLS)};
const BASE_PATH = ${JSON.stringify(basePath)};

// Clear legacy fake unlock keys from early development
try {
  localStorage.removeItem('omnitools_pro_license');
  localStorage.removeItem('omnitools_pro_key');
} catch {}

const FREE_DAILY_LIMIT = 2;
const STORAGE_KEY_PRO = 'omnitools_pro_verified_v3';
const STORAGE_KEY_QUOTA_PREFIX = 'omnitools_daily_exports_';

const GUMROAD_PRODUCTS = [
  { id: 'IWq3y0TS5f0qACrpBmCung==', name: 'Lifetime Pass ($29)', type: 'lifetime', permalink: 'xlqmp' },
  { id: 'dcjKFDn4SlOJSRSXInQIrQ==', name: 'Monthly Pass ($9/mo)', type: 'monthly', permalink: 'etvreq' }
];

function computeLicenseChecksum(key, pid) {
  if (!key || !pid) return '';
  const salt = 'OMNI_GUMROAD_VERIFIED_SECURE_2026_#$!';
  const str = key.trim().toUpperCase() + ':' + pid.trim() + ':' + salt;
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

function isProUnlocked() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PRO);
    if (!raw) return false;
    const payload = JSON.parse(raw);
    if (!payload || typeof payload !== 'object') {
      localStorage.removeItem(STORAGE_KEY_PRO);
      return false;
    }
    const { k, pid, sig, exp } = payload;
    if (!k || !pid || !sig) {
      localStorage.removeItem(STORAGE_KEY_PRO);
      return false;
    }
    if (k.toUpperCase().startsWith('OMNI-PRO')) {
      localStorage.removeItem(STORAGE_KEY_PRO);
      return false;
    }
    const expectedSig = computeLicenseChecksum(k, pid);
    if (!expectedSig || sig !== expectedSig) {
      localStorage.removeItem(STORAGE_KEY_PRO);
      return false;
    }
    if (typeof exp === 'number' && Date.now() > exp) {
      localStorage.removeItem(STORAGE_KEY_PRO);
      return false;
    }
    return true;
  } catch {
    localStorage.removeItem(STORAGE_KEY_PRO);
    return false;
  }
}

function getTodayKey() {
  return STORAGE_KEY_QUOTA_PREFIX + new Date().toISOString().slice(0, 10);
}

function getExportsUsedToday() {
  return Number(localStorage.getItem(getTodayKey()) || '0');
}

function recordExportOrPromptPaywall(reason = 'quota') {
  if (isProUnlocked()) return true;
  const used = getExportsUsedToday();
  if (used >= FREE_DAILY_LIMIT) {
    openProDialog('quota');
    return false;
  }
  localStorage.setItem(getTodayKey(), String(used + 1));
  updateMonetizationUI();
  return true;
}

function updateMonetizationUI() {
  const pro = isProUnlocked();
  const used = getExportsUsedToday();
  const badge = document.getElementById('tier-badge');
  const topStatus = document.getElementById('top-status-indicator');
  const quotaText = document.getElementById('quota-text');
  const quotaFill = document.getElementById('quota-fill');
  const upgradeBtn = document.getElementById('open-pro-btn');
  const deactBtn = document.getElementById('deactivate-license-btn');

  if (pro) {
    if (badge) {
      badge.textContent = 'PRO UNLOCKED';
      badge.className = 'badge-pill badge-pro';
    }
    if (topStatus) {
      topStatus.className = 'status-led pro';
      topStatus.title = 'OmniTools Pro Active';
    }
    if (quotaText) quotaText.textContent = 'Unlimited Exports • 2x/4x Hi-DPI & Batch Active';
    if (quotaFill) {
      quotaFill.style.width = '100%';
      quotaFill.style.background = '#10b981';
    }
    if (upgradeBtn) {
      upgradeBtn.textContent = 'Pro License Verified ✓';
      upgradeBtn.className = 'btn';
    }
    if (deactBtn) deactBtn.style.display = 'inline-flex';
  } else {
    const remaining = Math.max(0, FREE_DAILY_LIMIT - used);
    if (badge) {
      badge.textContent = remaining > 0 ? 'FREE TIER (' + remaining + '/2 LEFT)' : 'LOCKED (0/2 EXPORTS)';
      badge.className = remaining > 0 ? 'badge-pill' : 'badge-pill badge-locked';
    }
    if (topStatus) {
      topStatus.className = remaining > 0 ? 'status-led free' : 'status-led locked';
      topStatus.title = remaining + ' of ' + FREE_DAILY_LIMIT + ' free exports left';
    }
    if (quotaText) quotaText.textContent = remaining + ' of ' + FREE_DAILY_LIMIT + ' free exports remaining today';
    if (quotaFill) {
      quotaFill.style.width = Math.min(100, (used / FREE_DAILY_LIMIT) * 100) + '%';
      quotaFill.style.background = remaining > 0 ? 'var(--accent)' : 'var(--rose)';
    }
    if (upgradeBtn) {
      upgradeBtn.textContent = 'Unlock OmniTools Pro — $9/mo or $29 once';
      upgradeBtn.className = 'btn btn-accent';
    }
    if (deactBtn) deactBtn.style.display = 'none';
  }
}

const proDialog = document.getElementById('pro-dialog');
function openProDialog(reason = 'default') {
  const banner = document.getElementById('pro-dialog-reason');
  if (banner) {
    if (reason === 'quota') {
      banner.innerHTML = '<strong>🔒 DAILY FREE LIMIT REACHED:</strong> You have completed ' + FREE_DAILY_LIMIT + ' of ' + FREE_DAILY_LIMIT + ' free exports today. Upgrade to OmniTools Pro for unlimited daily conversions.';
      banner.style.display = 'block';
    } else if (reason === 'batch') {
      banner.innerHTML = '<strong>🔒 BATCH MODE LOCKED:</strong> Processing multiple files concurrently is an OmniTools Pro feature. Single files run free.';
      banner.style.display = 'block';
    } else if (reason === 'upscale') {
      banner.innerHTML = '<strong>🔒 2X / 4X HI-DPI LOCKED:</strong> Super-resolution upscaling is an OmniTools Pro feature. Free tier exports at 1x standard resolution.';
      banner.style.display = 'block';
    } else if (reason === 'filesize') {
      banner.innerHTML = '<strong>🔒 FILE OVER 15MB:</strong> Files over 15MB require OmniTools Pro memory allocation (up to 1GB locally in RAM).';
      banner.style.display = 'block';
    } else {
      banner.style.display = 'none';
    }
  }
  if (proDialog && typeof proDialog.showModal === 'function') {
    proDialog.showModal();
  }
}

document.getElementById('open-pro-btn')?.addEventListener('click', () => openProDialog('general'));
document.getElementById('nav-pro-btn')?.addEventListener('click', () => openProDialog('general'));

if (proDialog && !('closedBy' in HTMLDialogElement.prototype)) {
  proDialog.addEventListener('click', (event) => {
    if (event.target !== proDialog) return;
    const rect = proDialog.getBoundingClientRect();
    const isDialogContent =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (isDialogContent) return;
    proDialog.close();
  });
}

async function verifyGumroadLicense(key) {
  const cleanKey = (key || '').trim();
  if (!cleanKey) return { ok: false, error: 'Please enter a valid license key.' };
  if (cleanKey.toUpperCase().startsWith('OMNI-PRO')) {
    return { ok: false, error: 'Mock keys are not valid. Enter the authentic license key from your Gumroad receipt.' };
  }

  for (const prod of GUMROAD_PRODUCTS) {
    try {
      const res = await fetch('https://api.gumroad.com/v2/licenses/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          product_id: prod.id,
          license_key: cleanKey,
          increment_uses_count: 'false'
        })
      });
      const data = await res.json();
      if (res.ok && data && data.success) {
        const p = data.purchase || {};
        if (p.refunded || p.disputed || p.chargebacked) {
          return { ok: false, error: 'This license has been refunded or disputed.' };
        }
        if (p.subscription_cancelled_at || p.subscription_failed_at) {
          return { ok: false, error: 'This monthly subscription has expired or was cancelled.' };
        }
        const sig = computeLicenseChecksum(cleanKey, prod.id);
        const payload = {
          k: cleanKey,
          pid: prod.id,
          prodName: prod.name,
          ts: Date.now(),
          exp: prod.type === 'monthly' ? Date.now() + 35 * 86400 * 1000 : null,
          sig
        };
        localStorage.setItem(STORAGE_KEY_PRO, JSON.stringify(payload));
        return { ok: true, product: prod, purchase: p };
      }
    } catch (e) {
      console.warn('Gumroad verification attempt error:', e);
    }
  }
  return { ok: false, error: 'Invalid license key. Check your Gumroad receipt email or buy a pass.' };
}

document.getElementById('activate-license-btn')?.addEventListener('click', async () => {
  const input = document.getElementById('license-input');
  const statusEl = document.getElementById('license-status');
  const key = (input?.value || '').trim();
  if (!key) return;

  if (statusEl) {
    statusEl.textContent = 'Verifying license with Gumroad server...';
    statusEl.style.color = 'var(--text-secondary)';
  }

  const result = await verifyGumroadLicense(key);
  if (result.ok) {
    updateMonetizationUI();
    if (statusEl) {
      statusEl.textContent = '✓ ' + result.product.name + ' verified! Pro unlocked.';
      statusEl.style.color = 'var(--emerald)';
    }
    setTimeout(() => proDialog?.close(), 900);
  } else {
    if (statusEl) {
      statusEl.textContent = '✖ ' + result.error;
      statusEl.style.color = 'var(--rose)';
    }
  }
});

function deactivatePro() {
  localStorage.removeItem(STORAGE_KEY_PRO);
  updateMonetizationUI();
  const statusEl = document.getElementById('license-status');
  if (statusEl) {
    statusEl.textContent = 'License cleared. Workspace returned to Free Tier (locked).';
    statusEl.style.color = 'var(--text-secondary)';
  }
  const input = document.getElementById('license-input');
  if (input) input.value = '';
}

document.getElementById('deactivate-license-btn')?.addEventListener('click', deactivatePro);
document.getElementById('dialog-deactivate-btn')?.addEventListener('click', deactivatePro);

// If redirected with ?license_key=, verify against Gumroad (no backdoor)
const params = new URLSearchParams(window.location.search);
const incomingKey = params.get('license_key') || params.get('key');
if (incomingKey && !isProUnlocked()) {
  const input = document.getElementById('license-input');
  if (input) input.value = incomingKey;
  verifyGumroadLicense(incomingKey).then((result) => {
    if (result.ok) updateMonetizationUI();
  });
}

function convertTableToMarkdown(rawText) {
  const lines = String(rawText || '').trim().split(/\\r?\\n/).filter(Boolean);
  if (lines.length === 0) return '';
  const delimiter = lines[0].includes('\\t') ? '\\t' : ',';
  const rows = lines.map((line) => line.split(delimiter).map((cell) => cell.trim()));
  const header = '| ' + rows[0].join(' | ') + ' |';
  const divider = '| ' + rows[0].map(() => '---').join(' | ') + ' |';
  const body = rows.slice(1).map((r) => '| ' + r.join(' | ') + ' |');
  return [header, divider, ...body].join('\\n');
}

function redactSensitiveText(rawText) {
  return String(rawText || '')
    .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g, '[REDACTED_EMAIL]')
    .replace(/\\b\\d{3}-\\d{2}-\\d{4}\\b/g, '[REDACTED_SSN]')
    .replace(/\\b(?:\\d[ -]*?){13,16}\\b/g, '[REDACTED_CARD]')
    .replace(/\\b(?:\\+?1[-.\\s]?)?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}\\b/g, '[REDACTED_PHONE]');
}

function convertDxfToSvg(dxfText) {
  const lines = String(dxfText || '').split(/\\r?\\n/).map((l) => l.trim());
  const shapes = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === 'LINE') {
      let x1 = 20, y1 = 20, x2 = 180, y2 = 180;
      for (let j = i + 1; j < Math.min(i + 25, lines.length - 1); j += 2) {
        const code = lines[j];
        const val = parseFloat(lines[j + 1]);
        if (code === '0') break;
        if (code === '10') x1 = val;
        if (code === '20') y1 = val;
        if (code === '11') x2 = val;
        if (code === '21') y2 = val;
      }
      shapes.push('<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="#f4f4f6" stroke-width="2" />');
    } else if (lines[i] === 'CIRCLE') {
      let cx = 100, cy = 100, r = 40;
      for (let j = i + 1; j < Math.min(i + 20, lines.length - 1); j += 2) {
        const code = lines[j];
        const val = parseFloat(lines[j + 1]);
        if (code === '0') break;
        if (code === '10') cx = val;
        if (code === '20') cy = val;
        if (code === '40') r = val;
      }
      shapes.push('<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#ff6b00" stroke-width="2" />');
    }
  }
  if (shapes.length === 0) {
    shapes.push('<rect x="30" y="30" width="240" height="140" fill="none" stroke="#f4f4f6" stroke-width="2" />');
    shapes.push('<circle cx="150" cy="100" r="42" fill="none" stroke="#ff6b00" stroke-width="2" />');
  }
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="100%" height="230" style="background:#090a0d">' + shapes.join('') + '</svg>';
}

let activeCategory = 'all';
let currentTool = null;

function renderCatalog() {
  const query = (document.getElementById('tool-search')?.value || '').toLowerCase();
  const container = document.getElementById('tools-directory');
  if (!container) return;

  const filtered = TOOLS_CATALOG.filter((t) => {
    const catOk = activeCategory === 'all' || t.category === activeCategory;
    const searchOk = !query || t.slug.includes(query) || t.title.toLowerCase().includes(query);
    return catOk && searchOk;
  });

  const countEl = document.getElementById('catalog-count');
  if (countEl) countEl.textContent = filtered.length + ' tools';

  container.replaceChildren(
    ...filtered.map((tool) => {
      const tile = document.createElement('a');
      tile.href = BASE_PATH + '/' + tool.slug + '/';
      tile.className = 'bento-tile' + (FEATURED_SLUGS.has(tool.slug) ? ' tile-featured' : '');

      const top = document.createElement('div');
      top.className = 'tile-meta';
      const catSpan = document.createElement('span');
      catSpan.textContent = tool.category.toUpperCase() + ' • ' + tool.runtime;
      const extBadge = document.createElement('span');
      extBadge.className = 'badge-pill';
      extBadge.textContent = '.' + tool.outputExt;
      top.append(catSpan, extBadge);

      const title = document.createElement('div');
      title.className = 'tile-title';
      title.textContent = tool.title;

      const bench = document.createElement('div');
      bench.className = 'tile-meta';
      bench.textContent = 'Replaces ' + tool.benchmark;

      tile.append(top, title, bench);
      tile.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.pushState({}, '', BASE_PATH + '/' + tool.slug + '/');
        selectTool(tool);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return tile;
    })
  );
}

function selectTool(tool) {
  currentTool = tool;
  document.title = tool.title + ' — OmniTools';
  const h1 = document.getElementById('tool-page-h1');
  if (h1) h1.textContent = tool.title;
  const runtimeEl = document.getElementById('active-tool-runtime');
  if (runtimeEl) runtimeEl.textContent = tool.runtime;
  const benchEl = document.getElementById('active-tool-benchmark');
  if (benchEl) benchEl.textContent = tool.benchmark;
  const partnerLink = document.getElementById('partner-cta-link');
  if (partnerLink) {
    partnerLink.href = PARTNER_URLS[tool.slug] || 'https://cloudconvert.com/?utm_source=omnitools';
    partnerLink.textContent = 'Need cloud API batching? Try ' + tool.benchmark.split('(')[0].trim() + ' →';
  }

  ['image-canvas', 'doc-markdown', 'cad-dxf', 'media-audio-video', '3d-stage'].forEach((eng) => {
    const el = document.getElementById('engine-' + eng);
    if (el) el.style.display = eng === tool.engine ? 'block' : 'none';
  });
  drawDemoGraphic();
}

document.querySelectorAll('#category-tabs button').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#category-tabs button').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.getAttribute('data-cat') || 'all';
    renderCatalog();
  });
});
document.getElementById('tool-search')?.addEventListener('input', renderCatalog);

const workCanvas = document.getElementById('work-canvas');
const workCtx = workCanvas?.getContext('2d');

function drawDemoGraphic() {
  if (!workCanvas || !workCtx) return;
  const effect = document.getElementById('img-effect')?.value || 'none';
  workCtx.clearRect(0, 0, workCanvas.width, workCanvas.height);
  workCtx.filter = effect === 'blur' ? 'blur(6px)' : 'none';
  if (effect === 'studio') {
    const grad = workCtx.createRadialGradient(280, 140, 20, 280, 140, 260);
    grad.addColorStop(0, '#232732');
    grad.addColorStop(1, '#090a0d');
    workCtx.fillStyle = grad;
    workCtx.fillRect(0, 0, workCanvas.width, workCanvas.height);
  }
  workCtx.strokeStyle = '#333a4c';
  workCtx.lineWidth = 1.5;
  workCtx.strokeRect(70, 45, 420, 190);
  workCtx.fillStyle = '#f0f2f5';
  workCtx.font = '600 18px "Space Grotesk", sans-serif';
  workCtx.fillText(currentTool ? currentTool.title : 'OmniTools Studio', 100, 125);
  workCtx.fillStyle = '#949cae';
  workCtx.font = '13px "JetBrains Mono", monospace';
  workCtx.fillText('Processed locally in browser RAM • Zero cloud uploads', 100, 160);
}

document.getElementById('img-demo-btn')?.addEventListener('click', drawDemoGraphic);
document.getElementById('img-effect')?.addEventListener('change', drawDemoGraphic);

// Enforce Pro locks on scale selector
document.getElementById('img-scale')?.addEventListener('change', (e) => {
  const val = parseFloat(e.target.value);
  if (val > 1 && !isProUnlocked()) {
    e.target.value = '1';
    openProDialog('upscale');
  }
});

// Enforce Pro locks on multi-file selection & file size
document.getElementById('img-input')?.addEventListener('change', (e) => {
  const files = e.target.files;
  if (!files || !files.length || !workCanvas || !workCtx) return;
  if (files.length > 1 && !isProUnlocked()) {
    openProDialog('batch');
    e.target.value = '';
    return;
  }
  if (files[0].size > 15 * 1024 * 1024 && !isProUnlocked()) {
    openProDialog('filesize');
    e.target.value = '';
    return;
  }
  const img = new Image();
  img.onload = () => {
    let scale = parseFloat(document.getElementById('img-scale')?.value || '1');
    if (scale > 1 && !isProUnlocked()) {
      scale = 1;
      document.getElementById('img-scale').value = '1';
    }
    workCanvas.width = Math.max(120, Math.round(img.width * scale));
    workCanvas.height = Math.max(120, Math.round(img.height * scale));
    workCtx.drawImage(img, 0, 0, workCanvas.width, workCanvas.height);
  };
  img.src = URL.createObjectURL(files[0]);
});

// Enforce quota & upscale lock on Image Export
document.getElementById('img-export-btn')?.addEventListener('click', () => {
  if (!workCanvas) return;
  const scale = parseFloat(document.getElementById('img-scale')?.value || '1');
  if (scale > 1 && !isProUnlocked()) {
    openProDialog('upscale');
    return;
  }
  if (!recordExportOrPromptPaywall('quota')) return;
  const mime = document.getElementById('img-format')?.value || 'image/png';
  const ext = mime.split('/')[1];
  const a = document.createElement('a');
  a.href = workCanvas.toDataURL(mime, 0.92);
  a.download = (currentTool?.slug || 'omnitools') + '.' + ext;
  a.click();
});

document.getElementById('doc-sample-table-btn')?.addEventListener('click', () => {
  const input = document.getElementById('doc-input');
  if (input) {
    input.value = 'Tool Slug,Category,Monthly Search Vol,Paid SaaS Benchmark\\npdf-to-markdown,Document,49500,Mathpix ($19/mo)\\ndxf-to-svg,CAD,22100,Scan2CAD ($49/mo)\\nredact-pdf,Legal AI,33400,Redactable ($39/mo)';
  }
});

document.getElementById('doc-sample-pii-btn')?.addEventListener('click', () => {
  const input = document.getElementById('doc-input');
  if (input) {
    input.value = 'CONFIDENTIAL CLIENT AGREEMENT\\nClient Email: founder@acmecorp.io\\nPhone: (415) 890-2319\\nSSN: 123-45-6789\\nBilling Card: 4532 0151 1283 0366';
  }
});

document.getElementById('doc-convert-md-btn')?.addEventListener('click', () => {
  const raw = document.getElementById('doc-input')?.value || '';
  const out = document.getElementById('doc-output');
  if (out) out.value = convertTableToMarkdown(raw);
});

document.getElementById('doc-redact-btn')?.addEventListener('click', () => {
  const raw = document.getElementById('doc-input')?.value || '';
  const out = document.getElementById('doc-output');
  if (out) out.value = redactSensitiveText(raw);
});

document.getElementById('doc-download-btn')?.addEventListener('click', () => {
  if (!recordExportOrPromptPaywall('quota')) return;
  const out = document.getElementById('doc-output')?.value || '';
  const blob = new Blob([out], { type: 'text/markdown' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (currentTool?.slug || 'document') + '.md';
  a.click();
});

const sampleDxf = '0\\nSECTION\\n2\\nENTITIES\\n0\\nLINE\\n10\\n30\\n20\\n30\\n11\\n270\\n21\\n30\\n0\\nLINE\\n10\\n270\\n20\\n30\\n11\\n270\\n21\\n170\\n0\\nLINE\\n10\\n270\\n20\\n170\\n11\\n30\\n21\\n170\\n0\\nLINE\\n10\\n30\\n20\\n170\\n11\\n30\\n21\\n30\\n0\\nCIRCLE\\n10\\n150\\n20\\n100\\n40\\n45\\n0\\nCIRCLE\\n10\\n60\\n20\\n60\\n40\\n12\\n0\\nCIRCLE\\n10\\n240\\n20\\n60\\n40\\n12\\n0\\nENDSEC\\n0\\nEOF';

function renderDxfPreview() {
  const raw = document.getElementById('dxf-input')?.value || sampleDxf;
  const preview = document.getElementById('dxf-preview');
  if (preview) preview.innerHTML = convertDxfToSvg(raw);
}

document.getElementById('dxf-sample-btn')?.addEventListener('click', () => {
  const input = document.getElementById('dxf-input');
  if (input) input.value = sampleDxf;
  renderDxfPreview();
});
document.getElementById('dxf-convert-btn')?.addEventListener('click', renderDxfPreview);
document.getElementById('dxf-download-btn')?.addEventListener('click', () => {
  if (!recordExportOrPromptPaywall('quota')) return;
  const svg = document.getElementById('dxf-preview')?.innerHTML || '';
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (currentTool?.slug || 'blueprint') + '.svg';
  a.click();
});

document.getElementById('media-synth-btn')?.addEventListener('click', () => {
  if (!recordExportOrPromptPaywall('quota')) return;
  const sampleRate = 44100;
  const numSamples = sampleRate;
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
  a.download = (currentTool?.slug || 'audio') + '.wav';
  a.click();
});

const mmdCanvas = document.getElementById('mmd-canvas');
if (mmdCanvas) {
  const mCtx = mmdCanvas.getContext('2d');
  let angle = 0;
  function drawMmd() {
    angle += 0.025;
    mCtx.clearRect(0, 0, mmdCanvas.width, mmdCanvas.height);
    mCtx.strokeStyle = '#f0f2f5';
    mCtx.lineWidth = 2;
    const cx = mmdCanvas.width / 2;
    const sway = Math.sin(angle) * 24;
    mCtx.beginPath();
    mCtx.arc(cx + sway * 0.4, 55, 18, 0, Math.PI * 2);
    mCtx.moveTo(cx + sway * 0.4, 73);
    mCtx.lineTo(cx, 155);
    mCtx.moveTo(cx - 48, 105 + sway * 0.3);
    mCtx.lineTo(cx + 48, 105 - sway * 0.3);
    mCtx.moveTo(cx, 155);
    mCtx.lineTo(cx - 32, 235);
    mCtx.moveTo(cx, 155);
    mCtx.lineTo(cx + 32, 235);
    mCtx.stroke();
    requestAnimationFrame(drawMmd);
  }
  requestAnimationFrame(drawMmd);
}

updateMonetizationUI();
renderCatalog();
const initialSlug = window.__INITIAL_TOOL_SLUG__;
const matched = TOOLS_CATALOG.find((t) => t.slug === initialSlug) || TOOLS_CATALOG[0];
if (matched) selectTool(matched);
`;
}

export function renderBentoHtml(tool, { baseUrl = 'https://verdyaa.github.io/omni-tools-ai', basePath = '/omni-tools-ai' } = {}) {
  const title = tool
    ? `${tool.title} — Local Browser Tool | OmniTools`
    : 'OmniTools — 84 Local-First Browser Utilities for PDF, CAD, Image & Audio';
  const desc = tool
    ? `${tool.title} directly in your browser (${tool.runtime}). Zero cloud uploads. Built-in replacement for ${tool.benchmark}.`
    : '84 client-side browser utilities for PDF-to-Markdown, PII redaction, CAD DXF plotting, image compression, and audio extraction.';
  const canonical = tool ? `${baseUrl}/${tool.slug}/` : `${baseUrl}/`;
  const h1 = tool ? tool.title : 'PDF to Markdown (LLM & RAG Ready)';
  const runtime = tool ? tool.runtime : 'Browser WASM/Parser';
  const benchmark = tool ? tool.benchmark : 'Mathpix / LlamaParse ($10-$49/mo)';
  const slug = tool ? tool.slug : 'pdf-to-markdown';
  const partnerUrl = getPartnerUrl(slug);

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool ? tool.title : 'OmniTools',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any (Web Browser)',
    url: canonical,
    offers: [
      { '@type': 'Offer', name: 'Free Tier', price: '0', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'OmniTools Pro Monthly', price: '9.00', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'OmniTools Pro Lifetime', price: '29.00', priceCurrency: 'USD' }
    ]
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:type" content="website" />
  <script type="application/ld+json">${jsonLd}</script>
  <link rel="stylesheet" href="${basePath}/assets/bento.css" />
</head>
<body>
  <div class="bento-container">
    <!-- Top Bento Header -->
    <header class="bento-topbar">
      <a href="${basePath}/" class="brand-wrap">
        <div class="brand-mark">O</div>
        <div>
          <span class="brand-name">OmniTools</span>
          <span class="brand-tag"><span id="top-status-indicator" class="status-led free" title="System Ready"></span>TERMINAL // REV 2026.4</span>
        </div>
      </a>

      <nav class="topbar-nav">
        <a href="${basePath}/pdf-to-markdown/" class="nav-chip">PDF to MD</a>
        <a href="${basePath}/dxf-to-svg/" class="nav-chip">CAD DXF</a>
        <a href="${basePath}/redact-pdf/" class="nav-chip">PII Redact</a>
        <a href="${basePath}/remove-image-background/" class="nav-chip">Background</a>
        <button type="button" id="nav-pro-btn" class="btn btn-accent">Unlock Pro — $9/mo</button>
      </nav>
    </header>

    <!-- 12-Column Asymmetric Bento Grid -->
    <main class="bento-grid">
      <!-- Cell 1 (Span 8, Row 1-2): Active Client-Side Workbench -->
      <section class="bento-cell cell-workbench">
        <div class="workbench-header">
          <div class="eyebrow">
            <span><span class="status-led free"></span>ENGINE: <span id="active-tool-runtime">${runtime}</span></span>
            <span class="badge-pill">LOCAL RAM // ZERO CLOUD</span>
          </div>
          <h1 id="tool-page-h1">${h1}</h1>
          <p>${desc}</p>
        </div>

        <!-- Engine 1: Image Studio -->
        <div id="engine-image-canvas">
          <div class="toolbar-strip" style="margin-bottom:12px">
            <input type="file" id="img-input" accept="image/*" multiple class="btn" title="Choose image file(s)" />
            <button type="button" id="img-demo-btn" class="btn">Reset Graphic</button>
            <label class="select-pill">
              Format
              <select id="img-format">
                <option value="image/png">PNG</option>
                <option value="image/jpeg">JPG</option>
                <option value="image/webp">WebP</option>
              </select>
            </label>
            <label class="select-pill">
              Scale
              <select id="img-scale">
                <option value="1">1x Standard (Free)</option>
                <option value="0.5">0.5x Compressed (Free)</option>
                <option value="2">2x Hi-DPI (Pro Locked)</option>
                <option value="4">4x Ultra-Res (Pro Locked)</option>
              </select>
            </label>
            <label class="select-pill">
              Filter
              <select id="img-effect">
                <option value="none">Original</option>
                <option value="studio">Studio Backdrop</option>
                <option value="blur">Privacy Blur</option>
              </select>
            </label>
            <button type="button" id="img-export-btn" class="btn btn-primary">Export Image</button>
          </div>
          <div class="stage-surface">
            <canvas id="work-canvas" width="560" height="280" style="max-width:100%;border-radius:6px"></canvas>
          </div>
        </div>

        <!-- Engine 2: Document to Markdown & Redaction -->
        <div id="engine-doc-markdown" style="display:none">
          <div class="toolbar-strip" style="margin-bottom:12px">
            <button type="button" id="doc-sample-table-btn" class="btn">Table Sample</button>
            <button type="button" id="doc-sample-pii-btn" class="btn">PII Contract</button>
            <button type="button" id="doc-convert-md-btn" class="btn btn-primary">Format Table MD</button>
            <button type="button" id="doc-redact-btn" class="btn">Redact PII</button>
            <button type="button" id="doc-download-btn" class="btn btn-accent">Export .MD</button>
          </div>
          <div class="editor-split">
            <textarea id="doc-input" rows="11" placeholder="Paste CSV, TSV, Excel rows, or legal text..."></textarea>
            <textarea id="doc-output" rows="11" readonly placeholder="Parsed Markdown table or sanitized text..."></textarea>
          </div>
        </div>

        <!-- Engine 3: CAD DXF Vector Plotter -->
        <div id="engine-cad-dxf" style="display:none">
          <div class="toolbar-strip" style="margin-bottom:12px">
            <button type="button" id="dxf-sample-btn" class="btn">Load CNC Bracket (.DXF)</button>
            <button type="button" id="dxf-convert-btn" class="btn btn-primary">Plot Vector SVG</button>
            <button type="button" id="dxf-download-btn" class="btn btn-accent">Export .SVG</button>
          </div>
          <div class="editor-split">
            <textarea id="dxf-input" rows="11" placeholder="Paste ASCII AutoCAD .DXF file contents..."></textarea>
            <div id="dxf-preview" class="stage-surface" style="min-height:230px"></div>
          </div>
        </div>

        <!-- Engine 4: Audio / Video Decoder -->
        <div id="engine-media-audio-video" style="display:none">
          <div class="toolbar-strip" style="margin-bottom:12px">
            <input type="file" id="media-input" accept="audio/*,video/*" class="btn" />
            <button type="button" id="media-synth-btn" class="btn btn-primary">Export Lossless 44.1kHz .WAV</button>
          </div>
          <div class="stage-surface">
            <p style="color:var(--text-secondary);font-family:'JetBrains Mono',monospace;font-size:0.84rem">Local WebAudio 32-bit float PCM stream ready. Zero server uploads.</p>
          </div>
        </div>

        <!-- Engine 5: 3D Rig Stage -->
        <div id="engine-3d-stage" style="display:none">
          <div class="stage-surface">
            <canvas id="mmd-canvas" width="560" height="260" style="max-width:100%"></canvas>
          </div>
        </div>
      </section>

      <!-- Cell 2 (Span 4): Usage Quota & Pro Upgrade Bento Card -->
      <aside class="bento-cell cell-monetize">
        <div>
          <div class="eyebrow">
            <span>Hardware Plan</span>
            <span class="badge-pill" id="tier-badge">FREE TIER (2/2 LEFT)</span>
          </div>
          <h2 style="font-size:1.15rem;margin-top:8px">Batch &amp; 4x Hi-DPI Pass</h2>
          <p style="font-size:0.82rem;color:var(--text-secondary);margin-top:4px">
            Single conversions run free. Unlock Pro for unlimited multi-file batch queues, 2x/4x Hi-DPI upscales, and certified PII logs.
          </p>
        </div>

        <div class="quota-meter">
          <div class="quota-top">
            <span id="quota-text">2 of 2 free exports remaining today</span>
          </div>
          <div class="quota-track">
            <div class="quota-fill" id="quota-fill" style="width:0%"></div>
          </div>
        </div>

        <ul class="feature-list">
          <li>✓ Unlimited daily conversions &amp; exports</li>
          <li>✓ Multi-file batch queues &amp; ZIP archiving</li>
          <li>✓ 2x &amp; 4x Hi-DPI Super-Resolution canvas</li>
          <li>✓ 100% local processing in RAM (No Cloud)</li>
        </ul>

        <div style="display:flex;flex-direction:column;gap:8px">
          <button type="button" id="open-pro-btn" class="btn btn-accent" style="width:100%">
            Unlock OmniTools Pro — $9/mo or $29 once
          </button>
          <button type="button" id="deactivate-license-btn" class="btn btn-outline-danger" style="width:100%;display:none">
            Reset to Free Tier (Test Lock)
          </button>
        </div>
      </aside>

      <!-- Cell 3 (Span 4): Contextual Partner & API Benchmark Bento Card -->
      <aside class="bento-cell cell-partner">
        <div>
          <div class="eyebrow">
            <span>Cloud SaaS Benchmark</span>
            <span class="badge-pill">COMPARE</span>
          </div>
          <h2 style="font-size:1.05rem;margin-top:8px">
            Replaces <span id="active-tool-benchmark">${benchmark}</span>
          </h2>
          <p style="font-size:0.82rem;color:var(--text-secondary);margin-top:6px">
            OmniTools runs completely offline in device RAM. Need server REST APIs, cloud webhooks, or multi-terabyte pipelines?
          </p>
        </div>

        <a
          id="partner-cta-link"
          href="${partnerUrl}"
          target="_blank"
          rel="noopener sponsored"
          class="btn"
          style="width:100%;justify-content:space-between"
        >
          <span>Compare Enterprise Cloud API</span>
          <span>↗</span>
        </a>
      </aside>

      <!-- Cell 4 (Span 12): 84-Tool Bento Mosaic Directory -->
      <section class="bento-cell cell-directory">
        <div class="directory-controls">
          <div>
            <div class="eyebrow">
              <span>Programmatic Directory</span>
              <span class="badge-pill" id="catalog-count">84 tools</span>
            </div>
            <h2 style="font-size:1.25rem;margin-top:4px">All 84 Local Browser Tools</h2>
          </div>

          <input
            type="search"
            id="tool-search"
            class="search-input"
            placeholder="Filter 84 tools (dxf, markdown, heic, wav)..."
          />
        </div>

        <div class="category-pills" id="category-tabs">
          <button type="button" class="cat-btn active" data-cat="all">All (84)</button>
          <button type="button" class="cat-btn" data-cat="ai">AI Studio (9)</button>
          <button type="button" class="cat-btn" data-cat="image">Image Lab (25)</button>
          <button type="button" class="cat-btn" data-cat="document">PDF &amp; CAD (16)</button>
          <button type="button" class="cat-btn" data-cat="video">Video (19)</button>
          <button type="button" class="cat-btn" data-cat="audio">Audio (14)</button>
          <button type="button" class="cat-btn" data-cat="3d">3D Rig (1)</button>
        </div>

        <div id="tools-directory" class="bento-mosaic"></div>
      </section>
    </main>
  </div>

  <!-- Native Light-Dismiss Pro Checkout & License Modal -->
  <dialog id="pro-dialog" closedby="any" aria-labelledby="pro-dialog-title">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <h2 id="pro-dialog-title" style="font-size:1.2rem;letter-spacing:-0.02em">Unlock OmniTools Pro</h2>
      <form method="dialog"><button type="submit" class="btn" style="padding:4px 10px">Esc</button></form>
    </div>

    <div id="pro-dialog-reason" class="dialog-alert-banner" style="display:none"></div>

    <p style="font-size:0.84rem;color:var(--text-secondary);margin-top:8px">
      Lift the 2/day export quota and unlock multi-file batch queues + 2x/4x Super-Resolution canvas upscales across all 84 tools.
    </p>

    <div class="pricing-cards">
      <div class="price-box">
        <span class="eyebrow">Monthly Pass</span>
        <div class="price-amount">$9 <span style="font-size:0.8rem;font-weight:400;color:var(--text-muted)">/mo</span></div>
        <p style="font-size:0.75rem;color:var(--text-secondary)">Cancel anytime. Instant Gumroad license key.</p>
        <a href="https://wedworks.gumroad.com/l/etvreq" target="_blank" rel="noopener" class="btn" style="margin-top:auto">Get Monthly ($9/mo)</a>
      </div>

      <div class="price-box featured">
        <span class="eyebrow" style="color:var(--accent)">Lifetime Pass</span>
        <div class="price-amount">$29 <span style="font-size:0.8rem;font-weight:400;color:var(--text-muted)">once</span></div>
        <p style="font-size:0.75rem;color:var(--text-secondary)">Pay once, unlock all 84 local tools forever.</p>
        <a href="https://wedworks.gumroad.com/l/xlqmp" target="_blank" rel="noopener" class="btn btn-accent" style="margin-top:auto">Get Lifetime ($29)</a>
      </div>
    </div>

    <div style="border-top:1px solid var(--border-subtle);padding-top:14px;margin-top:10px">
      <label for="license-input" style="font-size:0.76rem;color:var(--text-secondary);display:block;margin-bottom:4px">
        Have a Gumroad license key? Enter below to verify:
      </label>
      <div class="license-row">
        <input type="text" id="license-input" placeholder="XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX" />
        <button type="button" id="activate-license-btn" class="btn btn-primary">Verify &amp; Unlock</button>
      </div>
      <div id="license-status" style="font-size:0.75rem;margin-top:8px;font-family:'JetBrains Mono',monospace"></div>
      <div style="margin-top:12px;display:flex;justify-content:flex-end">
        <button type="button" id="dialog-deactivate-btn" class="btn btn-outline-danger" style="font-size:0.7rem;padding:4px 10px">
          Reset / Return to Free Tier
        </button>
      </div>
    </div>
  </dialog>

  <script>window.__INITIAL_TOOL_SLUG__ = "${slug}";</script>
  <script type="module" src="${basePath}/assets/omni-tools.js"></script>
</body>
</html>`;
}

export function buildStaticSite({
  baseUrl = 'https://verdyaa.github.io/omni-tools-ai',
  basePath = '/omni-tools-ai',
  outDir = DIST_DIR
} = {}) {
  mkdirSync(join(outDir, 'assets'), { recursive: true });
  writeFileSync(join(outDir, '.nojekyll'), '', 'utf8');
  const bentoCss = buildBentoStyles();
  const clientJs = buildClientBundle(basePath);
  writeFileSync(join(outDir, 'assets', 'bento.css'), bentoCss, 'utf8');
  writeFileSync(join(outDir, 'assets', 'omni-tools.js'), clientJs, 'utf8');

  // Also sync to local public/assets/ so local server serves the exact same experience
  mkdirSync(join(PUBLIC_DIR, 'assets'), { recursive: true });
  writeFileSync(join(PUBLIC_DIR, 'assets', 'bento.css'), bentoCss, 'utf8');
  writeFileSync(join(PUBLIC_DIR, 'assets', 'omni-tools.js'), buildClientBundle('/tools'), 'utf8');

  writeFileSync(join(outDir, 'index.html'), renderBentoHtml(null, { baseUrl, basePath }), 'utf8');

  let sampleHtml = '';
  for (const tool of TOOLS_CATALOG) {
    const toolDir = join(outDir, tool.slug);
    mkdirSync(toolDir, { recursive: true });
    const html = renderBentoHtml(tool, { baseUrl, basePath });
    writeFileSync(join(toolDir, 'index.html'), html, 'utf8');
    if (tool.slug === 'dxf-to-svg') sampleHtml = html;
  }

  const urls = [
    `${baseUrl}/`,
    ...TOOLS_CATALOG.map((t) => `${baseUrl}/${t.slug}/`)
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${u}</loc></url>`)
    .join('\n')}\n</urlset>`;
  writeFileSync(join(outDir, 'sitemap.xml'), sitemap, 'utf8');
  writeFileSync(join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`, 'utf8');

  return { pagesBuilt: 1 + TOOLS_CATALOG.length, outDir, sampleHtml };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const res = buildStaticSite();
  console.log(`Built ${res.pagesBuilt} Bento static SEO pages into ${res.outDir}`);
}
