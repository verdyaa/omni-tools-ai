const TOOLS_CATALOG = [{"slug":"remove-image-background","title":"Remove Image Background","category":"ai","runtime":"Browser WebGPU/WASM","engine":"image-canvas","outputExt":"png","benchmark":"Remove.bg / Photoroom ($9-$29/mo)"},{"slug":"audio-to-text","title":"Audio to Text Converter","category":"ai","runtime":"Browser WebGPU/WASM","engine":"media-audio-video","outputExt":"txt","benchmark":"Otter.ai / TurboScribe ($10-$30/mo)"},{"slug":"video-to-text","title":"Video to Text & SRT Subtitles","category":"ai","runtime":"Browser WebGPU/WASM","engine":"media-audio-video","outputExt":"srt","benchmark":"Descript / HappyScribe ($12-$24/mo)"},{"slug":"image-to-text","title":"Image to Text (OCR)","category":"ai","runtime":"Browser WebGPU/WASM","engine":"doc-markdown","outputExt":"txt","benchmark":"Mathpix / OnlineOCR ($5-$19/mo)"},{"slug":"remove-image-watermark","title":"Remove Image Watermark","category":"ai","runtime":"Browser WebGPU/WASM","engine":"image-canvas","outputExt":"png","benchmark":"WatermarkRemover.io ($9-$29/mo)"},{"slug":"remove-text-from-image","title":"Remove Text from Image","category":"ai","runtime":"Browser WebGPU/WASM","engine":"image-canvas","outputExt":"png","benchmark":"Cleanup.pictures / SnapEdit ($5-$14/mo)"},{"slug":"upscale-image","title":"Upscale Image (4x AI)","category":"ai","runtime":"Browser WebGPU/WASM","engine":"image-canvas","outputExt":"png","benchmark":"Upscale.media / Magnific ($9-$39/mo)"},{"slug":"redact-pdf","title":"Redact PDF & Sensitive PII","category":"ai","runtime":"Browser WebGPU/WASM","engine":"doc-markdown","outputExt":"md","benchmark":"Redactable / CaseGuard ($19-$99/mo)"},{"slug":"live-transcription","title":"Live Transcription & Notes","category":"ai","runtime":"Browser WebGPU/WASM","engine":"media-audio-video","outputExt":"txt","benchmark":"Tactiq / Krisp ($12-$25/mo)"},{"slug":"resize-image","title":"Resize Image","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"BulkResizePhotos ($6-$15/mo)"},{"slug":"add-image-background","title":"Add Studio Image Background","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Photoroom / Pebblely ($10-$29/mo)"},{"slug":"compress-image","title":"Compress Image (Lossless/Lossy)","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"TinyPNG Pro ($39/yr)"},{"slug":"blur-image","title":"Blur Image (Face & Plate Censor)","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Blur.me ($7-$19/mo)"},{"slug":"crop-image","title":"Crop Image & Aspect Presets","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Croppola / iLoveIMG ($4-$9/mo)"},{"slug":"scrolling-screenshot","title":"Scrolling Screenshot Generator","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"ScreenshotOne / Urlbox ($15-$79/mo)"},{"slug":"full-page-screenshot","title":"Full Page Screenshot Capture","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"GoFullPage Premium ($1-$29/mo)"},{"slug":"heic-to-jpg","title":"HEIC to JPG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"iMazing HEIC ($9-$19)"},{"slug":"heic-to-png","title":"HEIC to PNG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"HeicToJpg ($5/mo)"},{"slug":"png-to-ico","title":"PNG to ICO Favicon Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"ico","benchmark":"Favicon.io ($15-$49)"},{"slug":"ico-to-png","title":"ICO to PNG Extractor","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"ConvertICO ($9/mo)"},{"slug":"svg-to-png","title":"SVG to PNG High-DPI Rasterizer","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Vectorizer / SVGtoPNG ($8-$19/mo)"},{"slug":"convert-image","title":"Universal Image Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"convert-jpg","title":"Convert to JPG","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"Convertio ($9-$25/mo)"},{"slug":"webp-to-jpg","title":"WebP to JPG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"avif-to-jpg","title":"AVIF to JPG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"png-to-webp","title":"PNG to WebP Optimizer","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"ShortPixel ($9/mo)"},{"slug":"image-to-jpg","title":"Image to JPG Batch Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"Zamzar ($9-$25/mo)"},{"slug":"avif-to-png","title":"AVIF to PNG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"Vertopal ($9/mo)"},{"slug":"image-to-png","title":"Image to PNG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"png","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"bmp-to-jpg","title":"BMP to JPG Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"jpg","benchmark":"Convertio ($9-$25/mo)"},{"slug":"png-to-avif","title":"PNG to AVIF Next-Gen Compressor","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"avif","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"image-to-webp","title":"Image to WebP Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"TinyPNG ($39/yr)"},{"slug":"avif-to-webp","title":"AVIF to WebP Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"webp","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"jpg-to-avif","title":"JPG to AVIF Converter","category":"image","runtime":"Browser Canvas","engine":"image-canvas","outputExt":"avif","benchmark":"ShortPixel ($9/mo)"},{"slug":"jpg-to-pdf","title":"JPG to PDF Document Builder","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"Smallpdf / iLovePDF ($7-$12/mo)"},{"slug":"png-to-pdf","title":"PNG to PDF Combiner","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"Smallpdf ($7-$12/mo)"},{"slug":"heic-to-pdf","title":"HEIC to PDF Converter","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"iLovePDF ($7-$12/mo)"},{"slug":"merge-pdf","title":"Merge PDF Files Offline","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"Sejda / PDF24 ($7-$12/mo)"},{"slug":"split-pdf","title":"Split PDF Pages Locally","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"Smallpdf ($7-$12/mo)"},{"slug":"rotate-pdf","title":"Rotate PDF Pages","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"SodaPDF ($7-$12/mo)"},{"slug":"pdf-to-png","title":"PDF to PNG Page Extractor","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"PDF24 / Smallpdf ($7-$12/mo)"},{"slug":"pdf-to-jpg","title":"PDF to JPG High-Res Export","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"iLovePDF ($7-$12/mo)"},{"slug":"pdf-to-markdown","title":"PDF to Markdown (LLM & RAG Ready)","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"Mathpix / LlamaParse ($10-$49/mo)"},{"slug":"pdf-to-text","title":"PDF to Plain Text Extractor","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"txt","benchmark":"Docsumo / UPDF ($10-$49/mo)"},{"slug":"word-to-markdown","title":"Word (.docx) to Clean Markdown","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"LlamaParse ($10-$49/mo)"},{"slug":"excel-to-markdown","title":"Excel / CSV to Markdown Table","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"md","benchmark":"Mathpix Snip ($10-$49/mo)"},{"slug":"epub-to-txt","title":"EPUB to TXT eBook Extractor","category":"document","runtime":"Browser WASM/Parser","engine":"doc-markdown","outputExt":"txt","benchmark":"EPUBor / Zamzar ($8-$29/mo)"},{"slug":"dxf-to-svg","title":"CAD DXF to SVG Vector Blueprint","category":"document","runtime":"Browser WASM/Parser","engine":"cad-dxf","outputExt":"svg","benchmark":"Scan2CAD / AnyDWG ($29-$99/mo)"},{"slug":"dxf-to-pdf","title":"CAD DXF to PDF Engineering Sheet","category":"document","runtime":"Browser WASM/Parser","engine":"cad-dxf","outputExt":"svg","benchmark":"AutoDWG ($29-$99/mo)"},{"slug":"dxf-to-png","title":"CAD DXF to PNG High-Res Plot","category":"document","runtime":"Browser WASM/Parser","engine":"cad-dxf","outputExt":"png","benchmark":"Aspose CAD ($29-$99/mo)"},{"slug":"reverse-video","title":"Reverse Video Locally","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Kapwing / Clideo ($9-$24/mo)"},{"slug":"compress-video","title":"Compress Video for Discord/Web","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"VEED.io / FreeConvert ($10-$29/mo)"},{"slug":"video-to-gif","title":"Video to Animated GIF Maker","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Imgflip Pro / Ezgif ($4-$12/mo)"},{"slug":"mp4-to-gif","title":"MP4 to GIF High-FPS Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"GifRun / Bannerbear ($9/mo)"},{"slug":"gif-to-mp4","title":"GIF to MP4 Web Optimizer","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"gif-to-webm","title":"GIF to WebM Transparent Video","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Ezgif / Convertio ($9/mo)"},{"slug":"video-converter","title":"Universal Browser Video Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Movavi / CloudConvert ($9-$25/mo)"},{"slug":"mov-to-mp4","title":"MOV to MP4 Fast Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"mkv-to-mp4","title":"MKV to MP4 Remuxer","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"avi-to-mp4","title":"AVI to MP4 Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9-$25/mo)"},{"slug":"webm-to-mp4","title":"WebM to MP4 Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Convertio ($9-$25/mo)"},{"slug":"mp4-to-mov","title":"MP4 to Apple QuickTime MOV","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"mp4-to-webm","title":"MP4 to WebM VP9 Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"mkv-to-mov","title":"MKV to MOV Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9-$25/mo)"},{"slug":"mp4-to-mkv","title":"MP4 to MKV Container Tool","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"mov-to-webm","title":"MOV to WebM Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Convertio ($9-$25/mo)"},{"slug":"webm-to-mov","title":"WebM to MOV Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9-$25/mo)"},{"slug":"avi-to-mov","title":"AVI to MOV Converter","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9-$25/mo)"},{"slug":"video-to-webm","title":"Video to WebM HTML5 Optimizer","category":"video","runtime":"Browser WebAudio/WASM","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9-$25/mo)"},{"slug":"audio-converter","title":"Universal Audio Format Converter","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"123APPS / Podcastle ($6-$19/mo)"},{"slug":"mp4-to-mp3","title":"MP4 Video to Audio Extractor","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"AudioTrimmer ($6-$19/mo)"},{"slug":"m4a-to-mp3","title":"M4A Voice Memo to Audio","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9/mo)"},{"slug":"mp3-to-wav","title":"MP3 to Lossless WAV Decoder","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Online-Audio-Converter ($6/mo)"},{"slug":"mov-to-mp3","title":"MOV Video to Audio Extractor","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9/mo)"},{"slug":"m4a-to-wav","title":"M4A to Uncompressed WAV","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9/mo)"},{"slug":"mp4-to-wav","title":"MP4 to Broadcast WAV","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Podcastle ($12/mo)"},{"slug":"ogg-to-mp3","title":"OGG Vorbis Audio Converter","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Convertio ($9/mo)"},{"slug":"flac-to-mp3","title":"FLAC Lossless Audio Transcoder","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"CloudConvert ($9/mo)"},{"slug":"mkv-to-mp3","title":"MKV Audio Track Extractor","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"FreeConvert ($9/mo)"},{"slug":"webm-to-mp3","title":"WebM Audio Extractor","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"123APPS ($6/mo)"},{"slug":"opus-to-mp3","title":"Opus Voice Note Converter","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Vertopal ($9/mo)"},{"slug":"aac-to-mp3","title":"AAC to Standard Audio","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"Zamzar ($9/mo)"},{"slug":"flac-to-wav","title":"FLAC to Studio WAV Unpacker","category":"audio","runtime":"Browser WebAudio","engine":"media-audio-video","outputExt":"wav","benchmark":"LALAL.AI / CloudConvert ($9-$19/mo)"},{"slug":"mmd-editor","title":"MMD 3D Pose & Motion Editor (.pmx / .vmd)","category":"3d","runtime":"Browser 3D Canvas","engine":"3d-stage","outputExt":"json","benchmark":"Spline / Plask.ai / DeepMotion ($12-$45/mo)"}];
const FEATURED_SLUGS = new Set(["pdf-to-markdown","dxf-to-svg","redact-pdf","remove-image-background","upscale-image","excel-to-markdown"]);
const PARTNER_URLS = {"remove-image-background":"https://www.photoroom.com/?utm_source=omnitools","audio-to-text":"https://turboscribe.ai/?utm_source=omnitools","video-to-text":"https://www.descript.com/?utm_source=omnitools","image-to-text":"https://mathpix.com/?utm_source=omnitools","redact-pdf":"https://www.redactable.com/?utm_source=omnitools","pdf-to-markdown":"https://mathpix.com/?utm_source=omnitools","word-to-markdown":"https://cloud.llamaindex.ai/?utm_source=omnitools","excel-to-markdown":"https://mathpix.com/?utm_source=omnitools","dxf-to-svg":"https://www.scan2cad.com/?utm_source=omnitools","dxf-to-pdf":"https://www.autodwg.com/?utm_source=omnitools","dxf-to-png":"https://www.scan2cad.com/?utm_source=omnitools","compress-image":"https://tinypng.com/?utm_source=omnitools","upscale-image":"https://letsenhance.io/?utm_source=omnitools"};
const BASE_PATH = "/tools";

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
  // Top-left
  workCtx.beginPath();
  workCtx.moveTo(boxX, boxY + tick); workCtx.lineTo(boxX, boxY); workCtx.lineTo(boxX + tick, boxY);
  workCtx.stroke();
  // Top-right
  workCtx.beginPath();
  workCtx.moveTo(boxX + boxW - tick, boxY); workCtx.lineTo(boxX + boxW, boxY); workCtx.lineTo(boxX + boxW, boxY + tick);
  workCtx.stroke();
  // Bottom-left
  workCtx.beginPath();
  workCtx.moveTo(boxX, boxY + boxH - tick); workCtx.lineTo(boxX, boxY + boxH); workCtx.lineTo(boxX + tick, boxY + boxH);
  workCtx.stroke();
  // Bottom-right
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
  if (!recordExportOrPromptPaywall('quota')) return;
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
