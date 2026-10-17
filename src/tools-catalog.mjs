// Complete 84-Tool PixPunk Programmatic SEO Catalog across 6 Categories
// Categories: ai (9), image (25), document (16), video (19), audio (14), 3d (1) => Total = 84

const AI_TOOLS = [
  ['remove-image-background', 'Remove Image Background', 'image-canvas', 'png', 'Remove.bg / Photoroom ($9-$29/mo)'],
  ['audio-to-text', 'Audio to Text Converter', 'media-audio-video', 'txt', 'Otter.ai / TurboScribe ($10-$30/mo)'],
  ['video-to-text', 'Video to Text & SRT Subtitles', 'media-audio-video', 'srt', 'Descript / HappyScribe ($12-$24/mo)'],
  ['image-to-text', 'Image to Text (OCR)', 'doc-markdown', 'txt', 'Mathpix / OnlineOCR ($5-$19/mo)'],
  ['remove-image-watermark', 'Remove Image Watermark', 'image-canvas', 'png', 'WatermarkRemover.io ($9-$29/mo)'],
  ['remove-text-from-image', 'Remove Text from Image', 'image-canvas', 'png', 'Cleanup.pictures / SnapEdit ($5-$14/mo)'],
  ['upscale-image', 'Upscale Image (4x AI)', 'image-canvas', 'png', 'Upscale.media / Magnific ($9-$39/mo)'],
  ['redact-pdf', 'Redact PDF & Sensitive PII', 'doc-markdown', 'md', 'Redactable / CaseGuard ($19-$99/mo)'],
  ['live-transcription', 'Live Transcription & Notes', 'media-audio-video', 'txt', 'Tactiq / Krisp ($12-$25/mo)']
].map(([slug, title, engine, outputExt, benchmark]) =>
  Object.freeze({ slug, title, category: 'ai', runtime: 'Browser WebGPU/WASM', engine, outputExt, benchmark })
);

const IMAGE_TOOLS = [
  ['resize-image', 'Resize Image', 'png', 'BulkResizePhotos ($6-$15/mo)'],
  ['add-image-background', 'Add Studio Image Background', 'png', 'Photoroom / Pebblely ($10-$29/mo)'],
  ['compress-image', 'Compress Image (Lossless/Lossy)', 'webp', 'TinyPNG Pro ($39/yr)'],
  ['blur-image', 'Blur Image (Face & Plate Censor)', 'png', 'Blur.me ($7-$19/mo)'],
  ['crop-image', 'Crop Image & Aspect Presets', 'png', 'Croppola / iLoveIMG ($4-$9/mo)'],
  ['scrolling-screenshot', 'Scrolling Screenshot Generator', 'png', 'ScreenshotOne / Urlbox ($15-$79/mo)'],
  ['full-page-screenshot', 'Full Page Screenshot Capture', 'png', 'GoFullPage Premium ($1-$29/mo)'],
  ['heic-to-jpg', 'HEIC to JPG Converter', 'jpg', 'iMazing HEIC ($9-$19)'],
  ['heic-to-png', 'HEIC to PNG Converter', 'png', 'HeicToJpg ($5/mo)'],
  ['png-to-ico', 'PNG to ICO Favicon Converter', 'ico', 'Favicon.io ($15-$49)'],
  ['ico-to-png', 'ICO to PNG Extractor', 'png', 'ConvertICO ($9/mo)'],
  ['svg-to-png', 'SVG to PNG High-DPI Rasterizer', 'png', 'Vectorizer / SVGtoPNG ($8-$19/mo)'],
  ['convert-image', 'Universal Image Converter', 'webp', 'CloudConvert ($9-$25/mo)'],
  ['convert-jpg', 'Convert to JPG', 'jpg', 'Convertio ($9-$25/mo)'],
  ['webp-to-jpg', 'WebP to JPG Converter', 'jpg', 'FreeConvert ($9-$25/mo)'],
  ['avif-to-jpg', 'AVIF to JPG Converter', 'jpg', 'CloudConvert ($9-$25/mo)'],
  ['png-to-webp', 'PNG to WebP Optimizer', 'webp', 'ShortPixel ($9/mo)'],
  ['image-to-jpg', 'Image to JPG Batch Converter', 'jpg', 'Zamzar ($9-$25/mo)'],
  ['avif-to-png', 'AVIF to PNG Converter', 'png', 'Vertopal ($9/mo)'],
  ['image-to-png', 'Image to PNG Converter', 'png', 'CloudConvert ($9-$25/mo)'],
  ['bmp-to-jpg', 'BMP to JPG Converter', 'jpg', 'Convertio ($9-$25/mo)'],
  ['png-to-avif', 'PNG to AVIF Next-Gen Compressor', 'avif', 'FreeConvert ($9-$25/mo)'],
  ['image-to-webp', 'Image to WebP Converter', 'webp', 'TinyPNG ($39/yr)'],
  ['avif-to-webp', 'AVIF to WebP Converter', 'webp', 'CloudConvert ($9-$25/mo)'],
  ['jpg-to-avif', 'JPG to AVIF Converter', 'avif', 'ShortPixel ($9/mo)']
].map(([slug, title, outputExt, benchmark]) =>
  Object.freeze({ slug, title, category: 'image', runtime: 'Browser Canvas', engine: 'image-canvas', outputExt, benchmark })
);

const DOCUMENT_TOOLS = [
  ['jpg-to-pdf', 'JPG to PDF Document Builder', 'image-canvas', 'pdf', 'Smallpdf / iLovePDF ($7-$12/mo)'],
  ['png-to-pdf', 'PNG to PDF Combiner', 'image-canvas', 'pdf', 'Smallpdf ($7-$12/mo)'],
  ['heic-to-pdf', 'HEIC to PDF Converter', 'image-canvas', 'pdf', 'iLovePDF ($7-$12/mo)'],
  ['merge-pdf', 'Merge PDF Files Offline', 'doc-markdown', 'pdf', 'Sejda / PDF24 ($7-$12/mo)'],
  ['split-pdf', 'Split PDF Pages Locally', 'doc-markdown', 'pdf', 'Smallpdf ($7-$12/mo)'],
  ['rotate-pdf', 'Rotate PDF Pages', 'doc-markdown', 'pdf', 'SodaPDF ($7-$12/mo)'],
  ['pdf-to-png', 'PDF to PNG Page Extractor', 'doc-markdown', 'png', 'PDF24 / Smallpdf ($7-$12/mo)'],
  ['pdf-to-jpg', 'PDF to JPG High-Res Export', 'doc-markdown', 'jpg', 'iLovePDF ($7-$12/mo)'],
  ['pdf-to-markdown', 'PDF to Markdown (LLM & RAG Ready)', 'doc-markdown', 'md', 'Mathpix / LlamaParse ($10-$49/mo)'],
  ['pdf-to-text', 'PDF to Plain Text Extractor', 'doc-markdown', 'txt', 'Docsumo / UPDF ($10-$49/mo)'],
  ['word-to-markdown', 'Word (.docx) to Clean Markdown', 'doc-markdown', 'md', 'LlamaParse ($10-$49/mo)'],
  ['excel-to-markdown', 'Excel / CSV to Markdown Table', 'doc-markdown', 'md', 'Mathpix Snip ($10-$49/mo)'],
  ['epub-to-txt', 'EPUB to TXT eBook Extractor', 'doc-markdown', 'txt', 'EPUBor / Zamzar ($8-$29/mo)'],
  ['dxf-to-svg', 'CAD DXF to SVG Vector Blueprint', 'cad-dxf', 'svg', 'Scan2CAD / AnyDWG ($29-$99/mo)'],
  ['dxf-to-pdf', 'CAD DXF to PDF Engineering Sheet', 'cad-dxf', 'pdf', 'AutoDWG ($29-$99/mo)'],
  ['dxf-to-png', 'CAD DXF to PNG High-Res Plot', 'cad-dxf', 'png', 'Aspose CAD ($29-$99/mo)']
].map(([slug, title, engine, outputExt, benchmark]) =>
  Object.freeze({ slug, title, category: 'document', runtime: 'Browser WASM/Parser', engine, outputExt, benchmark })
);

const VIDEO_TOOLS = [
  ['reverse-video', 'Reverse Video Locally', 'wav', 'Kapwing / Clideo ($9-$24/mo)'],
  ['compress-video', 'Compress Video for Discord/Web', 'wav', 'VEED.io / FreeConvert ($10-$29/mo)'],
  ['video-to-gif', 'Video to Animated GIF Maker', 'wav', 'Imgflip Pro / Ezgif ($4-$12/mo)'],
  ['mp4-to-gif', 'MP4 to GIF High-FPS Converter', 'wav', 'GifRun / Bannerbear ($9/mo)'],
  ['gif-to-mp4', 'GIF to MP4 Web Optimizer', 'wav', 'CloudConvert ($9-$25/mo)'],
  ['gif-to-webm', 'GIF to WebM Transparent Video', 'wav', 'Ezgif / Convertio ($9/mo)'],
  ['video-converter', 'Universal Browser Video Converter', 'wav', 'Movavi / CloudConvert ($9-$25/mo)'],
  ['mov-to-mp4', 'MOV to MP4 Fast Converter', 'wav', 'CloudConvert ($9-$25/mo)'],
  ['mkv-to-mp4', 'MKV to MP4 Remuxer', 'wav', 'FreeConvert ($9-$25/mo)'],
  ['avi-to-mp4', 'AVI to MP4 Converter', 'wav', 'Zamzar ($9-$25/mo)'],
  ['webm-to-mp4', 'WebM to MP4 Converter', 'wav', 'Convertio ($9-$25/mo)'],
  ['mp4-to-mov', 'MP4 to Apple QuickTime MOV', 'wav', 'CloudConvert ($9-$25/mo)'],
  ['mp4-to-webm', 'MP4 to WebM VP9 Converter', 'wav', 'FreeConvert ($9-$25/mo)'],
  ['mkv-to-mov', 'MKV to MOV Converter', 'wav', 'Zamzar ($9-$25/mo)'],
  ['mp4-to-mkv', 'MP4 to MKV Container Tool', 'wav', 'CloudConvert ($9-$25/mo)'],
  ['mov-to-webm', 'MOV to WebM Converter', 'wav', 'Convertio ($9-$25/mo)'],
  ['webm-to-mov', 'WebM to MOV Converter', 'wav', 'FreeConvert ($9-$25/mo)'],
  ['avi-to-mov', 'AVI to MOV Converter', 'wav', 'Zamzar ($9-$25/mo)'],
  ['video-to-webm', 'Video to WebM HTML5 Optimizer', 'wav', 'CloudConvert ($9-$25/mo)']
].map(([slug, title, outputExt, benchmark]) =>
  Object.freeze({ slug, title, category: 'video', runtime: 'Browser WebAudio/WASM', engine: 'media-audio-video', outputExt, benchmark })
);

const AUDIO_TOOLS = [
  ['audio-converter', 'Universal Audio Format Converter', 'wav', '123APPS / Podcastle ($6-$19/mo)'],
  ['mp4-to-mp3', 'MP4 Video to Audio Extractor', 'wav', 'AudioTrimmer ($6-$19/mo)'],
  ['m4a-to-mp3', 'M4A Voice Memo to Audio', 'wav', 'CloudConvert ($9/mo)'],
  ['mp3-to-wav', 'MP3 to Lossless WAV Decoder', 'wav', 'Online-Audio-Converter ($6/mo)'],
  ['mov-to-mp3', 'MOV Video to Audio Extractor', 'wav', 'FreeConvert ($9/mo)'],
  ['m4a-to-wav', 'M4A to Uncompressed WAV', 'wav', 'Zamzar ($9/mo)'],
  ['mp4-to-wav', 'MP4 to Broadcast WAV', 'wav', 'Podcastle ($12/mo)'],
  ['ogg-to-mp3', 'OGG Vorbis Audio Converter', 'wav', 'Convertio ($9/mo)'],
  ['flac-to-mp3', 'FLAC Lossless Audio Transcoder', 'wav', 'CloudConvert ($9/mo)'],
  ['mkv-to-mp3', 'MKV Audio Track Extractor', 'wav', 'FreeConvert ($9/mo)'],
  ['webm-to-mp3', 'WebM Audio Extractor', 'wav', '123APPS ($6/mo)'],
  ['opus-to-mp3', 'Opus Voice Note Converter', 'wav', 'Vertopal ($9/mo)'],
  ['aac-to-mp3', 'AAC to Standard Audio', 'wav', 'Zamzar ($9/mo)'],
  ['flac-to-wav', 'FLAC to Studio WAV Unpacker', 'wav', 'LALAL.AI / CloudConvert ($9-$19/mo)']
].map(([slug, title, outputExt, benchmark]) =>
  Object.freeze({ slug, title, category: 'audio', runtime: 'Browser WebAudio', engine: 'media-audio-video', outputExt, benchmark })
);

const THREE_D_TOOLS = [
  Object.freeze({
    slug: 'mmd-editor',
    title: 'MMD 3D Pose & Motion Editor (.pmx / .vmd)',
    category: '3d',
    runtime: 'Browser 3D Canvas',
    engine: '3d-stage',
    outputExt: 'json',
    benchmark: 'Spline / Plask.ai / DeepMotion ($12-$45/mo)'
  })
];

export const TOOLS_CATALOG = Object.freeze([
  ...AI_TOOLS,
  ...IMAGE_TOOLS,
  ...DOCUMENT_TOOLS,
  ...VIDEO_TOOLS,
  ...AUDIO_TOOLS,
  ...THREE_D_TOOLS
]);

export function getToolBySlug(slug) {
  return TOOLS_CATALOG.find((t) => t.slug === slug) || null;
}

export function generateSitemapXml(baseUrl = 'https://pixpunk-starter.local') {
  const urls = [
    `${baseUrl}/`,
    `${baseUrl}/tools`,
    ...TOOLS_CATALOG.map((t) => `${baseUrl}/tools/${t.slug}`)
  ];
  const items = urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`;
}

export function convertTableToMarkdown(rawText) {
  const lines = String(rawText || '')
    .trim()
    .split(/\r?\n/)
    .filter(Boolean);
  if (lines.length === 0) return '';
  const delimiter = lines[0].includes('\t') ? '\t' : ',';
  const rows = lines.map((line) => line.split(delimiter).map((cell) => cell.trim()));
  const header = `| ${rows[0].join(' | ')} |`;
  const divider = `| ${rows[0].map(() => '---').join(' | ')} |`;
  const body = rows.slice(1).map((r) => `| ${r.join(' | ')} |`);
  return [header, divider, ...body].join('\n');
}

export function redactSensitiveText(rawText) {
  return String(rawText || '')
    .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[REDACTED_EMAIL]')
    .replace(/\b\d{3}-\d{2}-\d{4}\b/g, '[REDACTED_SSN]')
    .replace(/\b(?:\d[ -]*?){13,16}\b/g, '[REDACTED_CARD]')
    .replace(/\b(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, '[REDACTED_PHONE]');
}

export function convertDxfToSvg(dxfText) {
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
      shapes.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#38bdf8" stroke-width="2" />`);
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
      shapes.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#34d399" stroke-width="2" />`);
    }
  }
  if (shapes.length === 0) {
    shapes.push(`<rect x="30" y="30" width="240" height="140" fill="none" stroke="#38bdf8" stroke-width="2" />`);
    shapes.push(`<circle cx="150" cy="100" r="42" fill="none" stroke="#34d399" stroke-width="2" />`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="600" height="400" style="background:#041022">\n  ${shapes.join('\n  ')}\n</svg>`;
}
