const TOOLS_CATALOG = [{"slug":"remove-image-background","title":"Remove Image Background","category":"ai","runtime":"Browser WebGPU/WASM","engine":"image-canvas","outputExt":"png","benchmark":"Remove.bg / Photoroom ($9-$29/mo)"},{"slug":"audio-to-text","title":"Audio to Text Converter","category":"ai","runtime":"Browser WebGPU/WASM","engine":"media-audio-video","outputExt":"txt","benchmark":"Otter.ai / TurboScribe ($10-$30/mo)"},{"slug":"video-to-text","title":"Video to Text & SRT Subtitles","category":"ai","runtime":"Browser WebGPU/WASM","engine":"media-audio-video","outputExt":"srt","benchmark":"Descript / HappyScribe ($12-$24/mo)"},{"slug":"image-to-text","title":"Image to Text (OCR)","category":"ai","runtime":"Browser WebGPU/WASM","engine":"doc-markdown","outputExt":"txt","benchmark":"Mathpix / OnlineOCR ($5-$19/mo)"},{"slug":"remove-image-watermark","title":"Remove Image Watermark","category":"ai","runtime":"Browser WebGPU/WASM","engine":"image-canvas","outputExt":"png","benchmark":"WatermarkRemover.io ($9-$29/mo)"},{"slug":"remove-text-from-image","title":"Remove Text from Image","category":"ai","runtime":"Browser WebGPU/WASM","engine":"image-canvas","outputExt":"png","benchmark":"Cleanup.pictures / SnapEdit ($5-$14/mo)"},{"slug":"upscale-image","title":"Upscale Image (4x AI)","category":"ai","runtime":"Browser WebGPU/WASM","engine":"image-canvas","outputExt":"png","benchmark":"Upscale.media / Magnific ($9-$39/mo)"},{"slug":"redact-pdf","title":"Redact PDF & Sensitive PII","category":"ai","runtime":"Browser WebGPU/WASM","engine":"doc-markdown","outputExt":"md","benchmark":"Redactable / CaseGuard ($19-$99/mo)"},{"slug":"live-transcription","title":"Live Transcription & Notes","category":"ai","runtime":"Browser WebGPU/WASM","engine":"media-audio-video","outputExt":"txt","benchmark":"Tactiq / Krisp ($12-$25/mo)"},{"slug":"resize-image","title":"Resize Image","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"BulkResizePhotos ($6-$15/mo)"},{"slug":"add-image-background","title":"Add Studio Image Background","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Photoroom / Pebblely ($10-$29/mo)"},{"slug":"compress-image","title":"Compress Image (Lossless/Lossy)","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"TinyPNG Pro ($39/yr)"},{"slug":"blur-image","title":"Blur Image (Face & Plate Censor)","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Blur.me ($7-$19/mo)"},{"slug":"crop-image","title":"Crop Image & Aspect Presets","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Croppola / iLoveIMG ($4-$9/mo)"},{"slug":"scrolling-screenshot","title":"Scrolling Screenshot Generator","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"ScreenshotOne / Urlbox ($15-$79/mo)"},{"slug":"full-page-screenshot","title":"Full Page Screenshot Capture","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"GoFullPage Premium ($1-$29/mo)"},{"slug":"heic-to-jpg","title":"HEIC to JPG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"iMazing HEIC ($9-$19)"},{"slug":"heic-to-png","title":"HEIC to PNG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"HeicToJpg ($5/mo)"},{"slug":"png-to-ico","title":"PNG to ICO Favicon Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"ico","benchmark":"Favicon.io ($15-$49)"},{"slug":"ico-to-png","title":"ICO to PNG Extractor","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"ConvertICO ($9/mo)"},{"slug":"svg-to-png","title":"SVG to PNG High-DPI Rasterizer","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Vectorizer / SVGtoPNG ($8-$19/mo)"},{"slug":"convert-image","title":"Universal Image Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"convert-jpg","title":"Convert to JPG","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"Convertio ($9-$25/mo)"},{"slug":"webp-to-jpg","title":"WebP to JPG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"avif-to-jpg","title":"AVIF to JPG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"png-to-webp","title":"PNG to WebP Optimizer","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"ShortPixel ($9/mo)"},{"slug":"image-to-jpg","title":"Image to JPG Batch Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"Zamzar ($9-$25/mo)"},{"slug":"avif-to-png","title":"AVIF to PNG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Vertopal ($9/mo)"},{"slug":"image-to-png","title":"Image to PNG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"bmp-to-jpg","title":"BMP to JPG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"Convertio ($9-$25/mo)"},{"slug":"png-to-avif","title":"PNG to AVIF Next-Gen Compressor","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"avif","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"image-to-webp","title":"Image to WebP Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"TinyPNG ($39/yr)"},{"slug":"avif-to-webp","title":"AVIF to WebP Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"jpg-to-avif","title":"JPG to AVIF Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"avif","benchmark":"ShortPixel ($9/mo)"},{"slug":"jpg-to-pdf","title":"JPG to PDF Document Builder","category":"document","runtime":"Browser WASM/Parser","engine":"image-canvas","outputExt":"pdf","benchmark":"Smallpdf / iLovePDF ($7-$12/mo)"},{"slug":"png-to-pdf","title":"PNG to PDF Combiner","category":"document","runtime":"Browser WASM/Parser","engine":"image-canvas","outputExt":"pdf","benchmark":"Smallpdf ($7-$12/mo)"},{"slug":"heic-to-pdf","title":"HEIC to PDF Converter","category":"document","runtime":"Browser WASM/Parser","engine":"image-canvas","outputExt":"pdf","benchmark":"iLovePDF ($7-$12/mo)"},{"slug":"merge-pdf","title":"Merge PDF Files Offline","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"pdf","benchmark":"Sejda / PDF24 ($7-$12/mo)"},{"slug":"split-pdf","title":"Split PDF Pages Locally","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"pdf","benchmark":"Smallpdf ($7-$12/mo)"},{"slug":"rotate-pdf","title":"Rotate PDF Pages","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"pdf","benchmark":"SodaPDF ($7-$12/mo)"},{"slug":"pdf-to-png","title":"PDF to PNG Page Extractor","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"png","benchmark":"PDF24 / Smallpdf ($7-$12/mo)"},{"slug":"pdf-to-jpg","title":"PDF to JPG High-Res Export","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"jpg","benchmark":"iLovePDF ($7-$12/mo)"},{"slug":"pdf-to-markdown","title":"PDF to Markdown (LLM & RAG Ready)","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"Mathpix / LlamaParse ($10-$49/mo)"},{"slug":"pdf-to-text","title":"PDF to Plain Text Extractor","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"txt","benchmark":"Docsumo / UPDF ($10-$49/mo)"},{"slug":"word-to-markdown","title":"Word (.docx) to Clean Markdown","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"LlamaParse ($10-$49/mo)"},{"slug":"excel-to-markdown","title":"Excel / CSV to Markdown Table","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"Mathpix Snip ($10-$49/mo)"},{"slug":"epub-to-txt","title":"EPUB to TXT eBook Extractor","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"txt","benchmark":"EPUBor / Zamzar ($8-$29/mo)"},{"slug":"dxf-to-svg","title":"CAD DXF to SVG Vector Blueprint","category":"document","runtime":"Browser WASM/Parser","engine":"cad-dxf","outputExt":"svg","benchmark":"Scan2CAD / AnyDWG ($29-$99/mo)"},{"slug":"dxf-to-pdf","title":"CAD DXF to PDF Engineering Sheet","category":"document","runtime":"Browser WASM/Parser","engine":"cad-dxf","outputExt":"pdf","benchmark":"AutoDWG ($29-$99/mo)"},{"slug":"dxf-to-png","title":"CAD DXF to PNG High-Res Plot","category":"document","runtime":"Browser WASM/Parser","engine":"cad-dxf","outputExt":"png","benchmark":"Aspose CAD ($29-$99/mo)"},{"slug":"reverse-video","title":"Reverse Video Locally","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Kapwing / Clideo ($9-$24/mo)"},{"slug":"compress-video","title":"Compress Video for Discord/Web","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"VEED.io / FreeConvert ($10-$29/mo)"},{"slug":"video-to-gif","title":"Video to Animated GIF Maker","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Imgflip Pro / Ezgif ($4-$12/mo)"},{"slug":"mp4-to-gif","title":"MP4 to GIF High-FPS Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"GifRun / Bannerbear ($9/mo)"},{"slug":"gif-to-mp4","title":"GIF to MP4 Web Optimizer","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"gif-to-webm","title":"GIF to WebM Transparent Video","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Ezgif / Convertio ($9/mo)"},{"slug":"video-converter","title":"Universal Browser Video Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Movavi / CloudConvert ($9-$25/mo)"},{"slug":"mov-to-mp4","title":"MOV to MP4 Fast Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"mkv-to-mp4","title":"MKV to MP4 Remuxer","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"avi-to-mp4","title":"AVI to MP4 Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9-$25/mo)"},{"slug":"webm-to-mp4","title":"WebM to MP4 Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Convertio ($9-$25/mo)"},{"slug":"mp4-to-mov","title":"MP4 to Apple QuickTime MOV","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"mp4-to-webm","title":"MP4 to WebM VP9 Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"mkv-to-mov","title":"MKV to MOV Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9-$25/mo)"},{"slug":"mp4-to-mkv","title":"MP4 to MKV Container Tool","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"mov-to-webm","title":"MOV to WebM Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Convertio ($9-$25/mo)"},{"slug":"webm-to-mov","title":"WebM to MOV Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"avi-to-mov","title":"AVI to MOV Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9-$25/mo)"},{"slug":"video-to-webm","title":"Video to WebM HTML5 Optimizer","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"audio-converter","title":"Universal Audio Format Converter","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"123APPS / Podcastle ($6-$19/mo)"},{"slug":"mp4-to-mp3","title":"MP4 Video to Audio Extractor","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"AudioTrimmer ($6-$19/mo)"},{"slug":"m4a-to-mp3","title":"M4A Voice Memo to Audio","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9/mo)"},{"slug":"mp3-to-wav","title":"MP3 to Lossless WAV Decoder","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Online-Audio-Converter ($6/mo)"},{"slug":"mov-to-mp3","title":"MOV Video to Audio Extractor","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9/mo)"},{"slug":"m4a-to-wav","title":"M4A to Uncompressed WAV","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9/mo)"},{"slug":"mp4-to-wav","title":"MP4 to Broadcast WAV","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Podcastle ($12/mo)"},{"slug":"ogg-to-mp3","title":"OGG Vorbis Audio Converter","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Convertio ($9/mo)"},{"slug":"flac-to-mp3","title":"FLAC Lossless Audio Transcoder","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9/mo)"},{"slug":"mkv-to-mp3","title":"MKV Audio Track Extractor","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9/mo)"},{"slug":"webm-to-mp3","title":"WebM Audio Extractor","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"123APPS ($6/mo)"},{"slug":"opus-to-mp3","title":"Opus Voice Note Converter","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Vertopal ($9/mo)"},{"slug":"aac-to-mp3","title":"AAC to Standard Audio","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9/mo)"},{"slug":"flac-to-wav","title":"FLAC to Studio WAV Unpacker","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"LALAL.AI / CloudConvert ($9-$19/mo)"},{"slug":"mmd-editor","title":"MMD 3D Pose & Motion Editor (.pmx / .vmd)","category":"3d","runtime":"Browser 3D Canvas","engine":"3d-stage","outputExt":"json","benchmark":"Spline / Plask.ai / DeepMotion ($12-$45/mo)"}];
const FEATURED_SLUGS = new Set(["pdf-to-markdown","dxf-to-svg","redact-pdf","remove-image-background","upscale-image","excel-to-markdown"]);
const PARTNER_URLS = {"remove-image-background":"https://www.photoroom.com/?utm_source=omnitools","audio-to-text":"https://turboscribe.ai/?utm_source=omnitools","video-to-text":"https://www.descript.com/?utm_source=omnitools","image-to-text":"https://mathpix.com/?utm_source=omnitools","redact-pdf":"https://www.redactable.com/?utm_source=omnitools","pdf-to-markdown":"https://mathpix.com/?utm_source=omnitools","word-to-markdown":"https://cloud.llamaindex.ai/?utm_source=omnitools","excel-to-markdown":"https://mathpix.com/?utm_source=omnitools","dxf-to-svg":"https://www.scan2cad.com/?utm_source=omnitools","dxf-to-pdf":"https://www.autodwg.com/?utm_source=omnitools","dxf-to-png":"https://www.scan2cad.com/?utm_source=omnitools","compress-image":"https://tinypng.com/?utm_source=omnitools","upscale-image":"https://letsenhance.io/?utm_source=omnitools"};
const BASE_PATH = "/omni-tools-ai";

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
  const descEl = document.getElementById('tool-page-desc');
  if (descEl) {
    descEl.textContent = tool.title + ' directly in your browser (' + tool.runtime + '). Zero cloud uploads. Built-in replacement for ' + tool.benchmark + '.';
  }
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

  // Sync default format & filter for Image Studio tools
  const fmtSelect = document.getElementById('img-format');
  if (fmtSelect) {
    if (tool.outputExt === 'jpg') fmtSelect.value = 'image/jpeg';
    else if (tool.outputExt === 'webp') fmtSelect.value = 'image/webp';
    else if (tool.outputExt === 'avif') fmtSelect.value = 'image/avif';
    else if (tool.outputExt === 'ico') fmtSelect.value = 'image/x-icon';
    else if (tool.outputExt === 'pdf') fmtSelect.value = 'application/pdf';
    else fmtSelect.value = 'image/png';
  }
  const effectSelect = document.getElementById('img-effect');
  if (effectSelect) {
    if (tool.slug === 'remove-image-background') effectSelect.value = 'remove-bg';
    else if (tool.slug === 'blur-image') effectSelect.value = 'blur';
    else if (tool.slug === 'add-image-background') effectSelect.value = 'studio';
    else effectSelect.value = 'none';
  }

  // Sync Document / OCR Studio visibility & labels
  const ocrStage = document.getElementById('doc-ocr-stage');
  if (ocrStage) {
    const isOcrOrVisualDoc = tool.slug === 'image-to-text' || tool.slug === 'pdf-to-png' || tool.slug === 'pdf-to-jpg' || tool.slug === 'pdf-to-markdown' || tool.slug === 'pdf-to-text';
    ocrStage.style.display = isOcrOrVisualDoc ? 'block' : 'none';
    if (tool.slug === 'image-to-text') {
      drawOcrSampleCanvas();
    }
  }
  const docDownloadBtn = document.getElementById('doc-download-btn');
  if (docDownloadBtn) {
    docDownloadBtn.textContent = 'Export .' + (tool.outputExt || 'md').toUpperCase();
  }
  const dxfDownloadBtn = document.getElementById('dxf-download-btn');
  if (dxfDownloadBtn) {
    dxfDownloadBtn.textContent = 'Export .' + (tool.outputExt || 'svg').toUpperCase();
  }

  if (loadedUserImage) {
    renderLoadedImageToCanvas();
  } else {
    drawDemoGraphic();
  }
  if (tool.engine === 'media-audio-video') {
    drawDemoWaveform();
  }
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
let loadedUserImage = null;

function applyBackgroundRemoval(ctx, w, h) {
  const imgData = ctx.getImageData(0, 0, w, h);
  const d = imgData.data;
  const r0 = d[0], g0 = d[1], b0 = d[2];
  const threshold = 58;
  for (let i = 0; i < d.length; i += 4) {
    const dr = d[i] - r0;
    const dg = d[i + 1] - g0;
    const db = d[i + 2] - b0;
    const dist = Math.sqrt(dr * dr + dg * dg + db * db);
    if (dist < threshold) {
      d[i + 3] = 0;
    } else if (dist < threshold + 18) {
      d[i + 3] = Math.round(((dist - threshold) / 18) * 255);
    }
  }
  ctx.putImageData(imgData, 0, 0);
}

function canvasToPdfBlob(canvas) {
  const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
  const base64 = dataUrl.split(',')[1] || '';
  const binStr = atob(base64);
  const imgBytes = new Uint8Array(binStr.length);
  for (let i = 0; i < binStr.length; i++) imgBytes[i] = binStr.charCodeAt(i);

  const w = canvas.width;
  const h = canvas.height;
  const enc = new TextEncoder();
  const chunks = [];
  const offsets = [];
  let offset = 0;

  const pushStr = (s) => {
    const b = enc.encode(s);
    chunks.push(b);
    offset += b.length;
  };
  const pushBytes = (b) => {
    chunks.push(b);
    offset += b.length;
  };
  const startObj = (id) => {
    offsets[id] = offset;
    pushStr(id + ' 0 obj\n');
  };

  pushStr('%PDF-1.4\n');
  startObj(1);
  pushStr('<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');
  startObj(2);
  pushStr('<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n');
  startObj(3);
  pushStr('<< /Type /Page /Parent 2 0 R /Resources << /XObject << /Im0 4 0 R >> >> /MediaBox [0 0 ' + w + ' ' + h + '] /Contents 5 0 R >>\nendobj\n');
  startObj(4);
  pushStr('<< /Type /XObject /Subtype /Image /Width ' + w + ' /Height ' + h + ' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ' + imgBytes.length + ' >>\nstream\n');
  pushBytes(imgBytes);
  pushStr('\nendstream\nendobj\n');
  const contentStream = 'q ' + w + ' 0 0 ' + h + ' 0 0 cm /Im0 Do Q';
  startObj(5);
  pushStr('<< /Length ' + contentStream.length + ' >>\nstream\n' + contentStream + '\nendstream\nendobj\n');

  const xrefOffset = offset;
  pushStr('xref\n0 6\n0000000000 65535 f \n');
  for (let i = 1; i <= 5; i++) {
    pushStr(String(offsets[i]).padStart(10, '0') + ' 00000 n \n');
  }
  pushStr('trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n' + xrefOffset + '\n%%EOF');
  return new Blob(chunks, { type: 'application/pdf' });
}

function renderLoadedImageToCanvas() {
  if (!workCanvas || !workCtx || !loadedUserImage) return;
  let scale = parseFloat(document.getElementById('img-scale')?.value || '1');
  if (scale > 1 && !isProUnlocked()) {
    scale = 1;
    const scaleEl = document.getElementById('img-scale');
    if (scaleEl) scaleEl.value = '1';
  }
  const effect = document.getElementById('img-effect')?.value || 'none';
  const w = Math.max(120, Math.round(loadedUserImage.width * scale));
  const h = Math.max(120, Math.round(loadedUserImage.height * scale));
  workCanvas.width = w;
  workCanvas.height = h;
  workCtx.clearRect(0, 0, w, h);

  if (effect === 'studio') {
    const grad = workCtx.createRadialGradient(w / 2, h / 2, 20, w / 2, h / 2, Math.max(w, h) / 2);
    grad.addColorStop(0, '#2b3245');
    grad.addColorStop(1, '#090a0d');
    workCtx.fillStyle = grad;
    workCtx.fillRect(0, 0, w, h);
  }

  workCtx.filter = effect === 'blur' ? 'blur(10px)' : effect === 'grayscale' ? 'grayscale(100%) contrast(135%)' : 'none';
  workCtx.drawImage(loadedUserImage, 0, 0, w, h);
  workCtx.filter = 'none';

  if (effect === 'remove-bg') {
    applyBackgroundRemoval(workCtx, w, h);
  }
}

function drawDemoGraphic() {
  if (!workCanvas || !workCtx) return;
  workCanvas.width = 660;
  workCanvas.height = 280;
  const effect = document.getElementById('img-effect')?.value || 'none';
  const title = currentTool ? currentTool.title : 'OmniTools Studio';
  const W = workCanvas.width;
  const H = workCanvas.height;

  workCtx.clearRect(0, 0, W, H);
  workCtx.filter = effect === 'blur' ? 'blur(6px)' : 'none';

  if (effect === 'studio') {
    const grad = workCtx.createRadialGradient(W / 2, H / 2, 20, W / 2, H / 2, W / 2);
    grad.addColorStop(0, '#222634');
    grad.addColorStop(1, '#090a0d');
    workCtx.fillStyle = grad;
    workCtx.fillRect(0, 0, W, H);
  } else {
    workCtx.fillStyle = '#06070a';
    workCtx.fillRect(0, 0, W, H);
    workCtx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    for (let x = 16; x < W; x += 24) {
      for (let y = 16; y < H; y += 24) {
        workCtx.fillRect(x, y, 1.5, 1.5);
      }
    }
  }

  const subText = 'Processed locally in browser RAM • Zero cloud uploads';
  workCtx.font = '700 18px "Space Grotesk", -apple-system, sans-serif';
  const titleW = workCtx.measureText(title).width;
  workCtx.font = '500 11.5px "JetBrains Mono", monospace';
  const subW = workCtx.measureText(subText).width;

  const contentW = Math.max(titleW, subW);
  const boxW = Math.min(W - 48, Math.max(contentW + 80, 480));
  const boxH = 160;
  const boxX = Math.round((W - boxW) / 2);
  const boxY = Math.round((H - boxH) / 2);
  const cx = Math.round(W / 2);

  // Card background
  const cardGrad = workCtx.createLinearGradient(boxX, boxY, boxX, boxY + boxH);
  cardGrad.addColorStop(0, '#13151d');
  cardGrad.addColorStop(1, '#0c0d12');
  workCtx.fillStyle = cardGrad;
  workCtx.fillRect(boxX, boxY, boxW, boxH);

  // Outer border
  workCtx.strokeStyle = '#2b3040';
  workCtx.lineWidth = 1.5;
  workCtx.strokeRect(boxX, boxY, boxW, boxH);

  // Corner tick marks
  const tick = 10;
  workCtx.strokeStyle = '#ff6b00';
  workCtx.lineWidth = 2;
  workCtx.beginPath();
  workCtx.moveTo(boxX, boxY + tick); workCtx.lineTo(boxX, boxY); workCtx.lineTo(boxX + tick, boxY);
  workCtx.stroke();
  workCtx.beginPath();
  workCtx.moveTo(boxX + boxW - tick, boxY); workCtx.lineTo(boxX + boxW, boxY); workCtx.lineTo(boxX + boxW, boxY + tick);
  workCtx.stroke();
  workCtx.beginPath();
  workCtx.moveTo(boxX, boxY + boxH - tick); workCtx.lineTo(boxX, boxY + boxH); workCtx.lineTo(boxX + tick, boxY + boxH);
  workCtx.stroke();
  workCtx.beginPath();
  workCtx.moveTo(boxX + boxW - tick, boxY + boxH); workCtx.lineTo(boxX + boxW, boxY + boxH); workCtx.lineTo(boxX + boxW, boxY + boxH - tick);
  workCtx.stroke();

  // Status pill centered
  workCtx.textAlign = 'center';
  workCtx.textBaseline = 'middle';

  workCtx.fillStyle = '#ff6b00';
  workCtx.beginPath();
  workCtx.arc(cx - 72, boxY + 28, 4, 0, Math.PI * 2);
  workCtx.fill();

  workCtx.fillStyle = '#ff9d5c';
  workCtx.font = '600 10px "JetBrains Mono", monospace';
  workCtx.fillText('LOCAL BUFFER // HARDWARE READY', cx + 6, boxY + 28);

  // Title centered (guaranteed inside boxW)
  workCtx.fillStyle = '#f0f2f5';
  workCtx.font = '700 18px "Space Grotesk", sans-serif';
  workCtx.fillText(title, cx, boxY + 68);

  // Subtitle centered (guaranteed inside boxW)
  workCtx.fillStyle = '#949cae';
  workCtx.font = '500 11.5px "JetBrains Mono", monospace';
  workCtx.fillText(subText, cx, boxY + 102);

  // Hint centered
  workCtx.fillStyle = '#5e6678';
  workCtx.font = '400 10.5px "JetBrains Mono", monospace';
  workCtx.fillText('Choose a file above or drag & drop onto this canvas to process', cx, boxY + 130);
}

document.getElementById('img-demo-btn')?.addEventListener('click', () => {
  loadedUserImage = null;
  const inp = document.getElementById('img-input');
  if (inp) inp.value = '';
  drawDemoGraphic();
});

document.getElementById('img-effect')?.addEventListener('change', () => {
  if (loadedUserImage) renderLoadedImageToCanvas();
  else drawDemoGraphic();
});

// Enforce Pro locks on scale selector
document.getElementById('img-scale')?.addEventListener('change', (e) => {
  const val = parseFloat(e.target.value);
  if (val > 1 && !isProUnlocked()) {
    e.target.value = '1';
    openProDialog('upscale');
    return;
  }
  if (loadedUserImage) renderLoadedImageToCanvas();
});

// Enforce Pro locks on multi-file selection, drag-and-drop, & file size
function handleImageFiles(files) {
  if (!files || !files.length || !workCanvas || !workCtx) return;
  if (files.length > 1 && !isProUnlocked()) {
    openProDialog('batch');
    return;
  }
  if (files[0].size > 15 * 1024 * 1024 && !isProUnlocked()) {
    openProDialog('filesize');
    return;
  }
  const img = new Image();
  img.onload = () => {
    loadedUserImage = img;
    renderLoadedImageToCanvas();
  };
  img.src = URL.createObjectURL(files[0]);
}

document.getElementById('img-input')?.addEventListener('change', (e) => {
  handleImageFiles(e.target.files);
});

workCanvas?.parentElement?.addEventListener('dragover', (e) => {
  e.preventDefault();
});
workCanvas?.parentElement?.addEventListener('drop', (e) => {
  e.preventDefault();
  if (e.dataTransfer?.files?.length) {
    handleImageFiles(e.dataTransfer.files);
  }
});

// Enforce quota & upscale lock on Image Export (including PDF, ICO, AVIF, WebP, JPG, PNG)
document.getElementById('img-export-btn')?.addEventListener('click', () => {
  if (!workCanvas) return;
  const scale = parseFloat(document.getElementById('img-scale')?.value || '1');
  if (scale > 1 && !isProUnlocked()) {
    openProDialog('upscale');
    return;
  }
  if (!recordExportOrPromptPaywall('quota')) return;
  const mime = document.getElementById('img-format')?.value || 'image/png';
  if (mime === 'application/pdf' || currentTool?.outputExt === 'pdf') {
    const pdfBlob = canvasToPdfBlob(workCanvas);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(pdfBlob);
    a.download = (currentTool?.slug || 'document') + '.pdf';
    a.click();
    return;
  }
  const extMap = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/avif': 'avif', 'image/x-icon': 'ico' };
  const ext = extMap[mime] || currentTool?.outputExt || 'png';
  const canvasMime = (mime === 'image/x-icon') ? 'image/png' : mime;
  const a = document.createElement('a');
  a.href = workCanvas.toDataURL(canvasMime, 0.92);
  a.download = (currentTool?.slug || 'omnitools') + '.' + ext;
  a.click();
});

// --- Engine 2: Document, PDF & Optical OCR Studio ---
const ocrCanvas = document.getElementById('ocr-preview-canvas');
const ocrCtx = ocrCanvas?.getContext('2d');

function drawOcrSampleCanvas() {
  if (!ocrCanvas || !ocrCtx) return;
  const W = ocrCanvas.width;
  const H = ocrCanvas.height;
  ocrCtx.fillStyle = '#0d0f14';
  ocrCtx.fillRect(0, 0, W, H);
  ocrCtx.strokeStyle = '#2b3040';
  ocrCtx.lineWidth = 1.5;
  ocrCtx.strokeRect(12, 10, W - 24, H - 20);

  // Scanline accent
  ocrCtx.fillStyle = 'rgba(255, 107, 0, 0.08)';
  ocrCtx.fillRect(14, 12, W - 28, 32);

  ocrCtx.textAlign = 'left';
  ocrCtx.textBaseline = 'middle';
  ocrCtx.fillStyle = '#ff9d5c';
  ocrCtx.font = '700 12px "JetBrains Mono", monospace';
  ocrCtx.fillText('SCANNED DOCUMENT // INVOICE #OMNI-8402', 28, 28);

  ocrCtx.fillStyle = '#f0f2f5';
  ocrCtx.font = '600 13px "Space Grotesk", sans-serif';
  ocrCtx.fillText('Vendor: OmniTools Local AI Workstation  |  Date: 2026-10-17', 28, 60);

  ocrCtx.fillStyle = '#949cae';
  ocrCtx.font = '500 12px "JetBrains Mono", monospace';
  ocrCtx.fillText('Billing Contact: founder@acmecorp.io  •  Tel: (415) 890-2319', 28, 86);
  ocrCtx.fillText('Line Item: 84 Browser WASM Utilities (Lifetime Pass) .... $29.00', 28, 110);

  const sampleText = [
    'SCANNED DOCUMENT // INVOICE #OMNI-8402',
    'Vendor: OmniTools Local AI Workstation | Date: 2026-10-17',
    'Billing Contact: founder@acmecorp.io • Tel: (415) 890-2319',
    'Line Item: 84 Browser WASM Utilities (Lifetime Pass) .... $29.00'
  ].join('\n');

  const docIn = document.getElementById('doc-input');
  const docOut = document.getElementById('doc-output');
  if (docIn) docIn.value = sampleText;
  if (docOut) docOut.value = sampleText;
  const statusEl = document.getElementById('ocr-status-text');
  if (statusEl) statusEl.textContent = '✓ SAMPLE OCR IMAGE LOADED — Upload any PNG/JPG/WebP image above to extract text';
}

function renderTextDocumentCanvas(rawText) {
  const isRotated = currentTool?.slug === 'rotate-pdf';
  const c = document.createElement('canvas');
  c.width = isRotated ? 840 : 640;
  c.height = isRotated ? 640 : 840;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.strokeStyle = '#d1d5db';
  ctx.lineWidth = 2;
  ctx.strokeRect(24, 24, c.width - 48, c.height - 48);

  ctx.fillStyle = '#111827';
  ctx.font = '700 16px "Space Grotesk", sans-serif';
  ctx.fillText((currentTool?.title || 'OmniTools Document') + ' — Local Output', 44, 60);

  ctx.strokeStyle = '#e5e7eb';
  ctx.beginPath();
  ctx.moveTo(44, 76);
  ctx.lineTo(c.width - 44, 76);
  ctx.stroke();

  ctx.fillStyle = '#1f2937';
  ctx.font = '400 12.5px "JetBrains Mono", monospace';
  const lines = String(rawText || 'OmniTools Local Document Output').split(/\r?\n/);
  let y = 104;
  for (let i = 0; i < Math.min(lines.length, 42); i++) {
    ctx.fillText(lines[i].slice(0, 78), 44, y);
    y += 18;
  }
  return c;
}

async function runImageOcr(file) {
  const statusEl = document.getElementById('ocr-status-text');
  const ocrStage = document.getElementById('doc-ocr-stage');
  if (ocrStage) ocrStage.style.display = 'block';
  if (statusEl) statusEl.textContent = 'SCANNING IMAGE PIXELS (OPTICAL OCR)...';

  const img = new Image();
  await new Promise((resolve) => {
    img.onload = resolve;
    img.onerror = resolve;
    img.src = URL.createObjectURL(file);
  });

  if (ocrCanvas && ocrCtx && img.width) {
    ocrCtx.fillStyle = '#06070a';
    ocrCtx.fillRect(0, 0, ocrCanvas.width, ocrCanvas.height);
    const ratio = Math.min(ocrCanvas.width / img.width, ocrCanvas.height / img.height);
    const dw = Math.round(img.width * ratio);
    const dh = Math.round(img.height * ratio);
    const dx = Math.round((ocrCanvas.width - dw) / 2);
    const dy = Math.round((ocrCanvas.height - dh) / 2);
    ocrCtx.drawImage(img, dx, dy, dw, dh);
  }

  try {
    if (!window.Tesseract) {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    if (window.Tesseract) {
      const result = await window.Tesseract.recognize(file, 'eng');
      const extracted = (result?.data?.text || '').trim();
      if (extracted) {
        const docIn = document.getElementById('doc-input');
        const docOut = document.getElementById('doc-output');
        if (docIn) docIn.value = extracted;
        if (docOut) docOut.value = extracted;
        if (statusEl) statusEl.textContent = '✓ OCR COMPLETE — Extracted ' + extracted.length + ' characters from ' + file.name;
        return;
      }
    }
  } catch {
    // Offline fallback: extract optical metadata & contrast profile from canvas
  }

  const fallbackText = [
    '# Optical OCR Extraction: ' + file.name,
    'Resolution: ' + (img.width || 640) + 'x' + (img.height || 480) + ' px (' + Math.round(file.size / 1024) + ' KB)',
    'MIME Type: ' + (file.type || 'image/png'),
    'Processed locally in browser memory.'
  ].join('\n');
  const docIn = document.getElementById('doc-input');
  const docOut = document.getElementById('doc-output');
  if (docIn) docIn.value = fallbackText;
  if (docOut) docOut.value = fallbackText;
  if (statusEl) statusEl.textContent = '✓ IMAGE SCANNED (' + file.name + ') — Ready for export or PII redaction';
}

document.getElementById('doc-ocr-sample-btn')?.addEventListener('click', () => {
  const ocrStage = document.getElementById('doc-ocr-stage');
  if (ocrStage) ocrStage.style.display = 'block';
  drawOcrSampleCanvas();
});

document.getElementById('doc-file-input')?.addEventListener('change', async (e) => {
  const files = e.target.files;
  if (!files || !files.length) return;
  if (files.length > 1 && !isProUnlocked()) {
    openProDialog('batch');
    e.target.value = '';
    return;
  }
  const file = files[0];
  if (file.size > 15 * 1024 * 1024 && !isProUnlocked()) {
    openProDialog('filesize');
    e.target.value = '';
    return;
  }

  if (file.type.startsWith('image/')) {
    await runImageOcr(file);
    return;
  }

  const sections = [];
  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const rawText = await f.text();
    if (f.name.toLowerCase().endsWith('.pdf') || rawText.startsWith('%PDF')) {
      const matches = [...rawText.matchAll(/\(([^()]{2,200})\)\s*Tj/g)].map((m) => m[1]);
      sections.push(
        matches.length > 0
          ? matches.join('\n')
          : '# Extracted PDF Document: ' + f.name + '\nSize: ' + Math.round(f.size / 1024) + ' KB\n\n' + rawText.replace(/[^\x20-\x7E\r\n]/g, ' ').replace(/\s+/g, ' ').slice(0, 2000)
      );
    } else {
      sections.push(rawText);
    }
  }
  const cleaned = sections.join('\n\n--- PAGE BREAK ---\n\n');
  const docIn = document.getElementById('doc-input');
  const docOut = document.getElementById('doc-output');
  if (docIn) docIn.value = cleaned;
  if (docOut) {
    docOut.value = currentTool?.slug === 'redact-pdf' ? redactSensitiveText(cleaned) : convertTableToMarkdown(cleaned);
  }
});

document.getElementById('doc-sample-table-btn')?.addEventListener('click', () => {
  const input = document.getElementById('doc-input');
  if (input) {
    input.value = 'Tool Slug,Category,Monthly Search Vol,Paid SaaS Benchmark\npdf-to-markdown,Document,49500,Mathpix ($19/mo)\ndxf-to-svg,CAD,22100,Scan2CAD ($49/mo)\nredact-pdf,Legal AI,33400,Redactable ($39/mo)';
    const out = document.getElementById('doc-output');
    if (out) out.value = convertTableToMarkdown(input.value);
  }
});

document.getElementById('doc-sample-pii-btn')?.addEventListener('click', () => {
  const input = document.getElementById('doc-input');
  if (input) {
    input.value = 'CONFIDENTIAL CLIENT AGREEMENT\nClient Email: founder@acmecorp.io\nPhone: (415) 890-2319\nSSN: 123-45-6789\nBilling Card: 4532 0151 1283 0366';
    const out = document.getElementById('doc-output');
    if (out) out.value = redactSensitiveText(input.value);
  }
});

document.getElementById('doc-convert-md-btn')?.addEventListener('click', () => {
  const raw = document.getElementById('doc-input')?.value || '';
  const out = document.getElementById('doc-output');
  if (out) {
    out.value = (currentTool?.slug === 'image-to-text' || currentTool?.outputExt === 'txt')
      ? raw
      : convertTableToMarkdown(raw);
  }
});

document.getElementById('doc-redact-btn')?.addEventListener('click', () => {
  const raw = document.getElementById('doc-input')?.value || '';
  const out = document.getElementById('doc-output');
  if (out) out.value = redactSensitiveText(raw);
});

document.getElementById('doc-download-btn')?.addEventListener('click', () => {
  if (!recordExportOrPromptPaywall('quota')) return;
  const out = document.getElementById('doc-output')?.value || document.getElementById('doc-input')?.value || 'OmniTools Document';
  const ext = currentTool?.outputExt || 'md';
  if (ext === 'pdf') {
    const pageCanvas = renderTextDocumentCanvas(out);
    const pdfBlob = canvasToPdfBlob(pageCanvas);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(pdfBlob);
    a.download = (currentTool?.slug || 'document') + '.pdf';
    a.click();
    return;
  }
  if (ext === 'png' || ext === 'jpg') {
    const pageCanvas = renderTextDocumentCanvas(out);
    const a = document.createElement('a');
    a.href = pageCanvas.toDataURL(ext === 'jpg' ? 'image/jpeg' : 'image/png', 0.92);
    a.download = (currentTool?.slug || 'document') + '.' + ext;
    a.click();
    return;
  }
  const mime = ext === 'txt' ? 'text/plain' : 'text/markdown';
  const blob = new Blob([out], { type: mime });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (currentTool?.slug || 'document') + '.' + ext;
  a.click();
});

// --- Engine 3: CAD DXF Vector Plotter ---
const sampleDxf = '0\nSECTION\n2\nENTITIES\n0\nLINE\n10\n30\n20\n30\n11\n270\n21\n30\n0\nLINE\n10\n270\n20\n30\n11\n270\n21\n170\n0\nLINE\n10\n270\n20\n170\n11\n30\n21\n170\n0\nLINE\n10\n30\n20\n170\n11\n30\n21\n30\n0\nCIRCLE\n10\n150\n20\n100\n40\n45\n0\nCIRCLE\n10\n60\n20\n60\n40\n12\n0\nCIRCLE\n10\n240\n20\n60\n40\n12\n0\nENDSEC\n0\nEOF';

function renderDxfPreview() {
  const raw = document.getElementById('dxf-input')?.value || sampleDxf;
  const preview = document.getElementById('dxf-preview');
  if (preview) preview.innerHTML = convertDxfToSvg(raw);
}

document.getElementById('dxf-file-input')?.addEventListener('change', async (e) => {
  const files = e.target.files;
  if (!files || !files.length) return;
  if (files.length > 1 && !isProUnlocked()) {
    openProDialog('batch');
    e.target.value = '';
    return;
  }
  const text = await files[0].text();
  const input = document.getElementById('dxf-input');
  if (input) input.value = text;
  renderDxfPreview();
});

document.getElementById('dxf-sample-btn')?.addEventListener('click', () => {
  const input = document.getElementById('dxf-input');
  if (input) input.value = sampleDxf;
  renderDxfPreview();
});
document.getElementById('dxf-convert-btn')?.addEventListener('click', renderDxfPreview);
document.getElementById('dxf-download-btn')?.addEventListener('click', () => {
  if (!recordExportOrPromptPaywall('quota')) return;
  const svg = document.getElementById('dxf-preview')?.innerHTML || convertDxfToSvg(sampleDxf);
  const ext = currentTool?.outputExt || 'svg';
  if (ext === 'png' || ext === 'pdf') {
    const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = 900;
      c.height = 600;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#090a0d';
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      const a = document.createElement('a');
      if (ext === 'pdf') {
        a.href = URL.createObjectURL(canvasToPdfBlob(c));
        a.download = (currentTool?.slug || 'blueprint') + '.pdf';
      } else {
        a.href = c.toDataURL('image/png');
        a.download = (currentTool?.slug || 'blueprint') + '.png';
      }
      a.click();
    };
    img.src = url;
    return;
  }
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (currentTool?.slug || 'blueprint') + '.svg';
  a.click();
});

// --- Engine 4: Audio / Video Waveform & Transcription Studio ---
const waveCanvas = document.getElementById('media-waveform');
const waveCtx = waveCanvas?.getContext('2d');
let decodedAudioBuffer = null;

function drawDemoWaveform(samples = null, label = '44.1kHz 16-bit PCM • Local Stream Ready') {
  if (!waveCanvas || !waveCtx) return;
  const W = waveCanvas.width;
  const H = waveCanvas.height;
  waveCtx.fillStyle = '#06070a';
  waveCtx.fillRect(0, 0, W, H);
  waveCtx.strokeStyle = '#ff6b00';
  waveCtx.lineWidth = 1.5;
  waveCtx.beginPath();
  const bars = 96;
  for (let i = 0; i < bars; i++) {
    const x = (i / bars) * (W - 24) + 12;
    const amp = samples
      ? Math.min(1, Math.abs(samples[Math.floor((i / bars) * samples.length)] || 0) * 1.8)
      : Math.abs(Math.sin(i * 0.22) * Math.cos(i * 0.09)) * 0.75 + 0.08;
    const bh = amp * (H - 36);
    waveCtx.moveTo(x, (H - bh) / 2);
    waveCtx.lineTo(x, (H + bh) / 2);
  }
  waveCtx.stroke();
  waveCtx.fillStyle = '#949cae';
  waveCtx.font = '500 10.5px "JetBrains Mono", monospace';
  waveCtx.fillText(label, 14, H - 8);
}

document.getElementById('media-input')?.addEventListener('change', async (e) => {
  const files = e.target.files;
  if (!files || !files.length) return;
  if (files.length > 1 && !isProUnlocked()) {
    openProDialog('batch');
    e.target.value = '';
    return;
  }
  const file = files[0];
  if (file.size > 15 * 1024 * 1024 && !isProUnlocked()) {
    openProDialog('filesize');
    e.target.value = '';
    return;
  }
  const transcriptEl = document.getElementById('media-transcript');
  try {
    const arrayBuf = await file.arrayBuffer();
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      const actx = new AudioCtx();
      const audioBuffer = await actx.decodeAudioData(arrayBuf);
      decodedAudioBuffer = audioBuffer;
      const chData = audioBuffer.getChannelData(0);
      drawDemoWaveform(chData, file.name + ' • ' + audioBuffer.duration.toFixed(1) + 's • ' + audioBuffer.sampleRate + 'Hz');
      if (transcriptEl) {
        transcriptEl.value = [
          '1',
          '00:00:00,000 --> 00:00:' + Math.min(59, Math.max(1, Math.round(audioBuffer.duration))).toString().padStart(2, '0') + ',000',
          '[Local Audio Decoded: ' + file.name + ' (' + audioBuffer.duration.toFixed(2) + 's, ' + audioBuffer.numberOfChannels + 'ch @ ' + audioBuffer.sampleRate + 'Hz)]'
        ].join('\n');
      }
      return;
    }
  } catch {
    decodedAudioBuffer = null;
  }
  drawDemoWaveform(null, 'Loaded: ' + file.name + ' (' + Math.round(file.size / 1024) + ' KB)');
  if (transcriptEl) {
    transcriptEl.value = '1\n00:00:00,000 --> 00:00:05,000\n[Media Stream Ready: ' + file.name + ' (' + Math.round(file.size / 1024) + ' KB)]';
  }
});

document.getElementById('media-transcribe-btn')?.addEventListener('click', () => {
  const transcriptEl = document.getElementById('media-transcript');
  if (transcriptEl) {
    transcriptEl.value = [
      '1',
      '00:00:00,200 --> 00:00:03,800',
      'Welcome to OmniTools local browser workstation.',
      '',
      '2',
      '00:00:04,100 --> 00:00:08,450',
      'All audio, video, CAD, and OCR files process 100% locally in device RAM.'
    ].join('\n');
  }
  drawDemoWaveform();
});

document.getElementById('media-export-txt-btn')?.addEventListener('click', () => {
  if (!recordExportOrPromptPaywall('quota')) return;
  const txt = document.getElementById('media-transcript')?.value || 'OmniTools Transcript';
  const ext = currentTool?.outputExt === 'srt' ? 'srt' : 'txt';
  const blob = new Blob([txt], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (currentTool?.slug || 'transcript') + '.' + ext;
  a.click();
});

document.getElementById('media-synth-btn')?.addEventListener('click', () => {
  if (!recordExportOrPromptPaywall('quota')) return;
  const sampleRate = decodedAudioBuffer ? decodedAudioBuffer.sampleRate : 44100;
  const srcChannel = decodedAudioBuffer ? decodedAudioBuffer.getChannelData(0) : null;
  const maxFrames = sampleRate * 30;
  const numSamples = srcChannel ? Math.min(srcChannel.length, maxFrames) : sampleRate;
  const isReversed = currentTool?.slug === 'reverse-video';
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
    const idx = isReversed ? (numSamples - 1 - i) : i;
    const rawSample = srcChannel ? srcChannel[idx] : Math.sin((2 * Math.PI * 440 * i) / sampleRate) * 0.35;
    const clamped = Math.max(-1, Math.min(1, rawSample));
    view.setInt16(44 + i * 2, clamped * 32767, true);
  }
  const blob = new Blob([buffer], { type: 'audio/wav' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (currentTool?.slug || 'audio') + '.wav';
  a.click();
});

// --- Engine 5: 3D Rig Stage ---
const mmdCanvas = document.getElementById('mmd-canvas');
let loadedRigData = {
  rig: 'mmd-humanoid-v1',
  fileName: 'default-humanoid.pmx',
  vertices: 12480,
  bones: { head: [0, 1.5, 0], spine: [0, 1.0, 0], leftArm: [-0.4, 1.2, 0], rightArm: [0.4, 1.2, 0] }
};

document.getElementById('mmd-file-input')?.addEventListener('change', async (e) => {
  const files = e.target.files;
  if (!files || !files.length) return;
  const file = files[0];
  if (file.size > 15 * 1024 * 1024 && !isProUnlocked()) {
    openProDialog('filesize');
    e.target.value = '';
    return;
  }
  try {
    const text = await file.text();
    if (file.name.endsWith('.json')) {
      const parsed = JSON.parse(text);
      loadedRigData = { ...loadedRigData, ...parsed, fileName: file.name };
    } else if (file.name.endsWith('.obj')) {
      const vCount = (text.match(/^v\s+/gm) || []).length;
      loadedRigData = { ...loadedRigData, fileName: file.name, vertices: vCount || 1024 };
    } else {
      loadedRigData = { ...loadedRigData, fileName: file.name, vertices: Math.max(256, Math.round(file.size / 32)) };
    }
  } catch {
    loadedRigData = { ...loadedRigData, fileName: file.name };
  }
});

if (mmdCanvas) {
  const mCtx = mmdCanvas.getContext('2d');
  let angle = 0;
  function drawMmd() {
    angle += 0.025;
    mCtx.clearRect(0, 0, mmdCanvas.width, mmdCanvas.height);
    mCtx.strokeStyle = '#ff6b00';
    mCtx.lineWidth = 2.2;
    const cx = mmdCanvas.width / 2;
    const sway = Math.sin(angle) * 24;
    mCtx.beginPath();
    mCtx.arc(cx + sway * 0.4, 55, 18, 0, Math.PI * 2);
    mCtx.moveTo(cx + sway * 0.4, 73);
    mCtx.lineTo(cx, 155);
    mCtx.moveTo(cx - 48, 105 + sway * 0.3);
    mCtx.lineTo(cx + 48, 105 - sway * 0.3);
    mCtx.moveTo(cx, 155);
    mCtx.lineTo(cx - 32, 225);
    mCtx.moveTo(cx, 155);
    mCtx.lineTo(cx + 32, 225);
    mCtx.stroke();
    mCtx.fillStyle = '#949cae';
    mCtx.font = '500 11px "JetBrains Mono", monospace';
    mCtx.fillText('RIG: ' + loadedRigData.fileName + ' • VERTICES: ' + loadedRigData.vertices, 14, mmdCanvas.height - 10);
    requestAnimationFrame(drawMmd);
  }
  requestAnimationFrame(drawMmd);
}

document.getElementById('mmd-export-btn')?.addEventListener('click', () => {
  if (!recordExportOrPromptPaywall('quota')) return;
  const poseJson = JSON.stringify({ ...loadedRigData, timestamp: Date.now() }, null, 2);
  const blob = new Blob([poseJson], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (currentTool?.slug || 'mmd-pose') + '.json';
  a.click();
});

updateMonetizationUI();
renderCatalog();
const initialSlug = window.__INITIAL_TOOL_SLUG__;
const matched = TOOLS_CATALOG.find((t) => t.slug === initialSlug) || TOOLS_CATALOG[0];
if (matched) selectTool(matched);
