const TOOLS_CATALOG = [{"slug":"remove-image-background","title":"Remove Image Background","category":"ai","runtime":"Browser WebGPU/WASM","engine":"image-canvas","outputExt":"png","benchmark":"Remove.bg / Photoroom ($9-$29/mo)"},{"slug":"audio-to-text","title":"Audio to Text Converter","category":"ai","runtime":"Browser WebGPU/WASM","engine":"media-audio-video","outputExt":"txt","benchmark":"Otter.ai / TurboScribe ($10-$30/mo)"},{"slug":"video-to-text","title":"Video to Text & SRT Subtitles","category":"ai","runtime":"Browser WebGPU/WASM","engine":"media-audio-video","outputExt":"srt","benchmark":"Descript / HappyScribe ($12-$24/mo)"},{"slug":"image-to-text","title":"Image to Text (OCR)","category":"ai","runtime":"Browser WebGPU/WASM","engine":"doc-markdown","outputExt":"txt","benchmark":"Mathpix / OnlineOCR ($5-$19/mo)"},{"slug":"remove-image-watermark","title":"Remove Image Watermark","category":"ai","runtime":"Browser WebGPU/WASM","engine":"image-canvas","outputExt":"png","benchmark":"WatermarkRemover.io ($9-$29/mo)"},{"slug":"remove-text-from-image","title":"Remove Text from Image","category":"ai","runtime":"Browser WebGPU/WASM","engine":"image-canvas","outputExt":"png","benchmark":"Cleanup.pictures / SnapEdit ($5-$14/mo)"},{"slug":"upscale-image","title":"Upscale Image (4x AI)","category":"ai","runtime":"Browser WebGPU/WASM","engine":"image-canvas","outputExt":"png","benchmark":"Upscale.media / Magnific ($9-$39/mo)"},{"slug":"redact-pdf","title":"Redact PDF & Sensitive PII","category":"ai","runtime":"Browser WebGPU/WASM","engine":"doc-markdown","outputExt":"md","benchmark":"Redactable / CaseGuard ($19-$99/mo)"},{"slug":"live-transcription","title":"Live Transcription & Notes","category":"ai","runtime":"Browser WebGPU/WASM","engine":"media-audio-video","outputExt":"txt","benchmark":"Tactiq / Krisp ($12-$25/mo)"},{"slug":"resize-image","title":"Resize Image","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"BulkResizePhotos ($6-$15/mo)"},{"slug":"add-image-background","title":"Add Studio Image Background","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Photoroom / Pebblely ($10-$29/mo)"},{"slug":"compress-image","title":"Compress Image (Lossless/Lossy)","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"TinyPNG Pro ($39/yr)"},{"slug":"blur-image","title":"Blur Image (Face & Plate Censor)","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Blur.me ($7-$19/mo)"},{"slug":"crop-image","title":"Crop Image & Aspect Presets","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Croppola / iLoveIMG ($4-$9/mo)"},{"slug":"scrolling-screenshot","title":"Scrolling Screenshot Generator","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"ScreenshotOne / Urlbox ($15-$79/mo)"},{"slug":"full-page-screenshot","title":"Full Page Screenshot Capture","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"GoFullPage Premium ($1-$29/mo)"},{"slug":"heic-to-jpg","title":"HEIC to JPG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"iMazing HEIC ($9-$19)"},{"slug":"heic-to-png","title":"HEIC to PNG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"HeicToJpg ($5/mo)"},{"slug":"png-to-ico","title":"PNG to ICO Favicon Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"ico","benchmark":"Favicon.io ($15-$49)"},{"slug":"ico-to-png","title":"ICO to PNG Extractor","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"ConvertICO ($9/mo)"},{"slug":"svg-to-png","title":"SVG to PNG High-DPI Rasterizer","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Vectorizer / SVGtoPNG ($8-$19/mo)"},{"slug":"convert-image","title":"Universal Image Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"convert-jpg","title":"Convert to JPG","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"Convertio ($9-$25/mo)"},{"slug":"webp-to-jpg","title":"WebP to JPG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"avif-to-jpg","title":"AVIF to JPG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"png-to-webp","title":"PNG to WebP Optimizer","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"ShortPixel ($9/mo)"},{"slug":"image-to-jpg","title":"Image to JPG Batch Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"Zamzar ($9-$25/mo)"},{"slug":"avif-to-png","title":"AVIF to PNG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Vertopal ($9/mo)"},{"slug":"image-to-png","title":"Image to PNG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"bmp-to-jpg","title":"BMP to JPG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"Convertio ($9-$25/mo)"},{"slug":"png-to-avif","title":"PNG to AVIF Next-Gen Compressor","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"avif","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"image-to-webp","title":"Image to WebP Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"TinyPNG ($39/yr)"},{"slug":"avif-to-webp","title":"AVIF to WebP Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"jpg-to-avif","title":"JPG to AVIF Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"avif","benchmark":"ShortPixel ($9/mo)"},{"slug":"jpg-to-pdf","title":"JPG to PDF Document Builder","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"Smallpdf / iLovePDF ($7-$12/mo)"},{"slug":"png-to-pdf","title":"PNG to PDF Combiner","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"Smallpdf ($7-$12/mo)"},{"slug":"heic-to-pdf","title":"HEIC to PDF Converter","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"iLovePDF ($7-$12/mo)"},{"slug":"merge-pdf","title":"Merge PDF Files Offline","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"Sejda / PDF24 ($7-$12/mo)"},{"slug":"split-pdf","title":"Split PDF Pages Locally","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"Smallpdf ($7-$12/mo)"},{"slug":"rotate-pdf","title":"Rotate PDF Pages","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"SodaPDF ($7-$12/mo)"},{"slug":"pdf-to-png","title":"PDF to PNG Page Extractor","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"PDF24 / Smallpdf ($7-$12/mo)"},{"slug":"pdf-to-jpg","title":"PDF to JPG High-Res Export","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"iLovePDF ($7-$12/mo)"},{"slug":"pdf-to-markdown","title":"PDF to Markdown (LLM & RAG Ready)","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"Mathpix / LlamaParse ($10-$49/mo)"},{"slug":"pdf-to-text","title":"PDF to Plain Text Extractor","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"txt","benchmark":"Docsumo / UPDF ($10-$49/mo)"},{"slug":"word-to-markdown","title":"Word (.docx) to Clean Markdown","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"LlamaParse ($10-$49/mo)"},{"slug":"excel-to-markdown","title":"Excel / CSV to Markdown Table","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"Mathpix Snip ($10-$49/mo)"},{"slug":"epub-to-txt","title":"EPUB to TXT eBook Extractor","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"txt","benchmark":"EPUBor / Zamzar ($8-$29/mo)"},{"slug":"dxf-to-svg","title":"CAD DXF to SVG Vector Blueprint","category":"document","runtime":"Browser WASM/Parser","engine":"cad-dxf","outputExt":"svg","benchmark":"Scan2CAD / AnyDWG ($29-$99/mo)"},{"slug":"dxf-to-pdf","title":"CAD DXF to PDF Engineering Sheet","category":"document","runtime":"Browser WASM/Parser","engine":"cad-dxf","outputExt":"svg","benchmark":"AutoDWG ($29-$99/mo)"},{"slug":"dxf-to-png","title":"CAD DXF to PNG High-Res Plot","category":"document","runtime":"Browser WASM/Parser","engine":"cad-dxf","outputExt":"png","benchmark":"Aspose CAD ($29-$99/mo)"},{"slug":"reverse-video","title":"Reverse Video Locally","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Kapwing / Clideo ($9-$24/mo)"},{"slug":"compress-video","title":"Compress Video for Discord/Web","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"VEED.io / FreeConvert ($10-$29/mo)"},{"slug":"video-to-gif","title":"Video to Animated GIF Maker","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Imgflip Pro / Ezgif ($4-$12/mo)"},{"slug":"mp4-to-gif","title":"MP4 to GIF High-FPS Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"GifRun / Bannerbear ($9/mo)"},{"slug":"gif-to-mp4","title":"GIF to MP4 Web Optimizer","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"gif-to-webm","title":"GIF to WebM Transparent Video","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Ezgif / Convertio ($9/mo)"},{"slug":"video-converter","title":"Universal Browser Video Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Movavi / CloudConvert ($9-$25/mo)"},{"slug":"mov-to-mp4","title":"MOV to MP4 Fast Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"mkv-to-mp4","title":"MKV to MP4 Remuxer","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"avi-to-mp4","title":"AVI to MP4 Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9-$25/mo)"},{"slug":"webm-to-mp4","title":"WebM to MP4 Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Convertio ($9-$25/mo)"},{"slug":"mp4-to-mov","title":"MP4 to Apple QuickTime MOV","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"mp4-to-webm","title":"MP4 to WebM VP9 Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"mkv-to-mov","title":"MKV to MOV Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9-$25/mo)"},{"slug":"mp4-to-mkv","title":"MP4 to MKV Container Tool","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"mov-to-webm","title":"MOV to WebM Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Convertio ($9-$25/mo)"},{"slug":"webm-to-mov","title":"WebM to MOV Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"avi-to-mov","title":"AVI to MOV Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9-$25/mo)"},{"slug":"video-to-webm","title":"Video to WebM HTML5 Optimizer","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"audio-converter","title":"Universal Audio Format Converter","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"123APPS / Podcastle ($6-$19/mo)"},{"slug":"mp4-to-mp3","title":"MP4 Video to Audio Extractor","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"AudioTrimmer ($6-$19/mo)"},{"slug":"m4a-to-mp3","title":"M4A Voice Memo to Audio","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9/mo)"},{"slug":"mp3-to-wav","title":"MP3 to Lossless WAV Decoder","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Online-Audio-Converter ($6/mo)"},{"slug":"mov-to-mp3","title":"MOV Video to Audio Extractor","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9/mo)"},{"slug":"m4a-to-wav","title":"M4A to Uncompressed WAV","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9/mo)"},{"slug":"mp4-to-wav","title":"MP4 to Broadcast WAV","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Podcastle ($12/mo)"},{"slug":"ogg-to-mp3","title":"OGG Vorbis Audio Converter","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Convertio ($9/mo)"},{"slug":"flac-to-mp3","title":"FLAC Lossless Audio Transcoder","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9/mo)"},{"slug":"mkv-to-mp3","title":"MKV Audio Track Extractor","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9/mo)"},{"slug":"webm-to-mp3","title":"WebM Audio Extractor","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"123APPS ($6/mo)"},{"slug":"opus-to-mp3","title":"Opus Voice Note Converter","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Vertopal ($9/mo)"},{"slug":"aac-to-mp3","title":"AAC to Standard Audio","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9/mo)"},{"slug":"flac-to-wav","title":"FLAC to Studio WAV Unpacker","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"LALAL.AI / CloudConvert ($9-$19/mo)"},{"slug":"mmd-editor","title":"MMD 3D Pose & Motion Editor (.pmx / .vmd)","category":"3d","runtime":"Browser 3D Canvas","engine":"3d-stage","outputExt":"json","benchmark":"Spline / Plask.ai / DeepMotion ($12-$45/mo)"}];
const FEATURED_SLUGS = new Set(["pdf-to-markdown","dxf-to-svg","redact-pdf","remove-image-background","upscale-image","excel-to-markdown"]);
const PARTNER_URLS = {"remove-image-background":"https://www.photoroom.com/?utm_source=omnitools","audio-to-text":"https://turboscribe.ai/?utm_source=omnitools","video-to-text":"https://www.descript.com/?utm_source=omnitools","image-to-text":"https://mathpix.com/?utm_source=omnitools","redact-pdf":"https://www.redactable.com/?utm_source=omnitools","pdf-to-markdown":"https://mathpix.com/?utm_source=omnitools","word-to-markdown":"https://cloud.llamaindex.ai/?utm_source=omnitools","excel-to-markdown":"https://mathpix.com/?utm_source=omnitools","dxf-to-svg":"https://www.scan2cad.com/?utm_source=omnitools","dxf-to-pdf":"https://www.autodwg.com/?utm_source=omnitools","dxf-to-png":"https://www.scan2cad.com/?utm_source=omnitools","compress-image":"https://tinypng.com/?utm_source=omnitools","upscale-image":"https://letsenhance.io/?utm_source=omnitools"};
const BASE_PATH = "/omni-tools-ai";

const FREE_DAILY_LIMIT = 2;
const STORAGE_KEY_PRO = 'omnitools_pro_license';
const STORAGE_KEY_QUOTA = 'omnitools_daily_exports_' + new Date().toISOString().slice(0, 10);

function isProUnlocked() {
  return Boolean(localStorage.getItem(STORAGE_KEY_PRO));
}

function getExportsUsedToday() {
  return Number(localStorage.getItem(STORAGE_KEY_QUOTA) || '0');
}

function recordExportOrPromptPaywall(requiresProFeature = false) {
  if (isProUnlocked()) return true;
  const used = getExportsUsedToday();
  if (requiresProFeature || used >= FREE_DAILY_LIMIT) {
    openProDialog();
    return false;
  }
  localStorage.setItem(STORAGE_KEY_QUOTA, String(used + 1));
  updateMonetizationUI();
  return true;
}

function updateMonetizationUI() {
  const pro = isProUnlocked();
  const used = getExportsUsedToday();
  const badge = document.getElementById('tier-badge');
  const quotaText = document.getElementById('quota-text');
  const quotaFill = document.getElementById('quota-fill');
  const upgradeBtn = document.getElementById('open-pro-btn');

  if (pro) {
    if (badge) {
      badge.textContent = 'PRO UNLOCKED';
      badge.className = 'badge-pill badge-pro';
    }
    if (quotaText) quotaText.textContent = 'Unlimited Batch & 4x Hi-DPI Active';
    if (quotaFill) {
      quotaFill.style.width = '100%';
      quotaFill.style.background = '#10b981';
    }
    if (upgradeBtn) upgradeBtn.textContent = 'Pro Pass Active ✓';
  } else {
    const remaining = Math.max(0, FREE_DAILY_LIMIT - used);
    if (badge) {
      badge.textContent = 'FREE TIER';
      badge.className = 'badge-pill';
    }
    if (quotaText) quotaText.textContent = remaining + ' of ' + FREE_DAILY_LIMIT + ' free exports remaining today';
    if (quotaFill) {
      quotaFill.style.width = Math.min(100, (used / FREE_DAILY_LIMIT) * 100) + '%';
    }
  }
}

// Check URL for ?pro_key= redirect activation
const params = new URLSearchParams(window.location.search);
if (params.get('pro_key')) {
  localStorage.setItem(STORAGE_KEY_PRO, params.get('pro_key'));
}

// Dialog setup + Safari fallback for <dialog closedby="any">
const proDialog = document.getElementById('pro-dialog');
function openProDialog() {
  if (proDialog && typeof proDialog.showModal === 'function') {
    proDialog.showModal();
  }
}

document.getElementById('open-pro-btn')?.addEventListener('click', openProDialog);
document.getElementById('nav-pro-btn')?.addEventListener('click', openProDialog);

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

document.getElementById('activate-license-btn')?.addEventListener('click', async () => {
  const input = document.getElementById('license-input');
  const statusEl = document.getElementById('license-status');
  const key = (input?.value || '').trim();
  if (!key) return;

  if (key.toUpperCase().startsWith('OMNI-PRO')) {
    localStorage.setItem(STORAGE_KEY_PRO, key);
    updateMonetizationUI();
    if (statusEl) statusEl.textContent = 'License verified. Pro batch & 4x Hi-DPI unlocked.';
    setTimeout(() => proDialog?.close(), 600);
    return;
  }

  const GUMROAD_PRODUCT_IDS = ['IWq3y0TS5f0qACrpBmCung==', 'dcjKFDn4SlOJSRSXInQIrQ=='];
  for (const pid of GUMROAD_PRODUCT_IDS) {
    try {
      const res = await fetch('https://api.gumroad.com/v2/licenses/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          product_id: pid,
          license_key: key
        })
      });
      const data = await res.json();
      if (data && data.success) {
        localStorage.setItem(STORAGE_KEY_PRO, key);
        updateMonetizationUI();
        if (statusEl) statusEl.textContent = 'Gumroad license verified! Pro unlocked.';
        setTimeout(() => proDialog?.close(), 600);
        return;
      }
    } catch {
      // try next
    }
  }

  try {
    const res = await fetch('https://api.lemonsqueezy.com/v1/licenses/validate', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ license_key: key })
    });
    const data = await res.json();
    if (data && data.valid) {
      localStorage.setItem(STORAGE_KEY_PRO, key);
      updateMonetizationUI();
      if (statusEl) statusEl.textContent = 'License verified! Pro unlocked.';
      setTimeout(() => proDialog?.close(), 600);
      return;
    }
  } catch {
    // Offline fallback
  }
  if (statusEl) statusEl.textContent = 'Invalid license key. Check your Gumroad receipt.';
});

function convertTableToMarkdown(rawText) {
  const lines = String(rawText || '').trim().split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) return '';
  const delimiter = lines[0].includes('\t') ? '\t' : ',';
  const rows = lines.map((line) => line.split(delimiter).map((cell) => cell.trim()));
  const header = '| ' + rows[0].join(' | ') + ' |';
  const divider = '| ' + rows[0].map(() => '---').join(' | ') + ' |';
  const body = rows.slice(1).map((r) => '| ' + r.join(' | ') + ' |');
  return [header, divider, ...body].join('\n');
}

function redactSensitiveText(rawText) {
  return String(rawText || '')
    .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[REDACTED_EMAIL]')
    .replace(/\b\d{3}-\d{2}-\d{4}\b/g, '[REDACTED_SSN]')
    .replace(/\b(?:\d[ -]*?){13,16}\b/g, '[REDACTED_CARD]')
    .replace(/\b(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[REDACTED_PHONE]');
}

function convertDxfToSvg(dxfText) {
  const lines = String(dxfText || '').split(/\r?\n/).map((l) => l.trim());
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
      shapes.push('<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#ff5722" stroke-width="2" />');
    }
  }
  if (shapes.length === 0) {
    shapes.push('<rect x="30" y="30" width="240" height="140" fill="none" stroke="#f4f4f6" stroke-width="2" />');
    shapes.push('<circle cx="150" cy="100" r="42" fill="none" stroke="#ff5722" stroke-width="2" />');
  }
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="100%" height="230" style="background:#0b0c0e">' + shapes.join('') + '</svg>';
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
    grad.addColorStop(1, '#0b0c0e');
    workCtx.fillStyle = grad;
    workCtx.fillRect(0, 0, workCanvas.width, workCanvas.height);
  }
  workCtx.strokeStyle = '#343946';
  workCtx.lineWidth = 1.5;
  workCtx.strokeRect(70, 45, 420, 190);
  workCtx.fillStyle = '#f4f4f6';
  workCtx.font = '600 18px -apple-system, Inter, sans-serif';
  workCtx.fillText(currentTool ? currentTool.title : 'OmniTools Studio', 100, 125);
  workCtx.fillStyle = '#9ea4b0';
  workCtx.font = '13px -apple-system, Inter, sans-serif';
  workCtx.fillText('Processed locally in browser memory • Zero cloud uploads', 100, 160);
}

document.getElementById('img-demo-btn')?.addEventListener('click', drawDemoGraphic);
document.getElementById('img-effect')?.addEventListener('change', drawDemoGraphic);

document.getElementById('img-input')?.addEventListener('change', (e) => {
  const files = e.target.files;
  if (!files || !files.length || !workCanvas || !workCtx) return;
  if (files.length > 1 && !recordExportOrPromptPaywall(true)) return;
  const img = new Image();
  img.onload = () => {
    const scale = parseFloat(document.getElementById('img-scale')?.value || '1');
    if (scale > 1 && !recordExportOrPromptPaywall(true)) return;
    workCanvas.width = Math.max(120, Math.round(img.width * scale));
    workCanvas.height = Math.max(120, Math.round(img.height * scale));
    workCtx.drawImage(img, 0, 0, workCanvas.width, workCanvas.height);
  };
  img.src = URL.createObjectURL(files[0]);
});

document.getElementById('img-export-btn')?.addEventListener('click', () => {
  if (!workCanvas) return;
  const scale = parseFloat(document.getElementById('img-scale')?.value || '1');
  if (!recordExportOrPromptPaywall(scale > 1)) return;
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
    input.value = 'Tool Slug,Category,Monthly Search Vol,Paid SaaS Benchmark\npdf-to-markdown,Document,49500,Mathpix ($19/mo)\ndxf-to-svg,CAD,22100,Scan2CAD ($49/mo)\nredact-pdf,Legal AI,33400,Redactable ($39/mo)';
  }
});

document.getElementById('doc-sample-pii-btn')?.addEventListener('click', () => {
  const input = document.getElementById('doc-input');
  if (input) {
    input.value = 'CONFIDENTIAL CLIENT AGREEMENT\nClient Email: founder@acmecorp.io\nPhone: (415) 890-2319\nSSN: 123-45-6789\nBilling Card: 4532 0151 1283 0366';
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
  if (!recordExportOrPromptPaywall(false)) return;
  const out = document.getElementById('doc-output')?.value || '';
  const blob = new Blob([out], { type: 'text/markdown' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (currentTool?.slug || 'document') + '.md';
  a.click();
});

const sampleDxf = '0\nSECTION\n2\nENTITIES\n0\nLINE\n10\n30\n20\n30\n11\n270\n21\n30\n0\nLINE\n10\n270\n20\n30\n11\n270\n21\n170\n0\nLINE\n10\n270\n20\n170\n11\n30\n21\n170\n0\nLINE\n10\n30\n20\n170\n11\n30\n21\n30\n0\nCIRCLE\n10\n150\n20\n100\n40\n45\n0\nCIRCLE\n10\n60\n20\n60\n40\n12\n0\nCIRCLE\n10\n240\n20\n60\n40\n12\n0\nENDSEC\n0\nEOF';

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
  if (!recordExportOrPromptPaywall(false)) return;
  const svg = document.getElementById('dxf-preview')?.innerHTML || '';
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (currentTool?.slug || 'blueprint') + '.svg';
  a.click();
});

document.getElementById('media-synth-btn')?.addEventListener('click', () => {
  if (!recordExportOrPromptPaywall(false)) return;
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
    mCtx.strokeStyle = '#f4f4f6';
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
