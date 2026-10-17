# OmniTools AI — 84 Local-First Browser Utilities

**Live Workstation:** [**https://verdyaa.github.io/omni-tools-ai/**](https://verdyaa.github.io/omni-tools-ai/)  
**Pro Passes:** [**Lifetime Pass ($29 once)**](https://wedworks.gumroad.com/l/xlqmp) · [**Monthly Pass ($9/mo)**](https://wedworks.gumroad.com/l/etvreq)

OmniTools is an industrial Bento-styled browser workstation housing **84 client-side utilities** across 5 local engines (`Image Canvas`, `PDF/Markdown & Optical OCR`, `CAD DXF Vector Plotter`, `Audio/Video PCM & SRT Studio`, and `3D Humanoid Rig Stage`).

Every file you select, drag-and-drop, or paste (`Ctrl+V` / `Cmd+V`) is processed **100% locally in your browser RAM** with zero cloud uploads.

---

## Featured Local Tools

| Tool | Live URL | Local Engine | Paid SaaS Replaced |
| :--- | :--- | :--- | :--- |
| **PDF to Markdown (LLM/RAG)** | [Launch Tool →](https://verdyaa.github.io/omni-tools-ai/pdf-to-markdown/) | Browser WASM/Parser | Mathpix / LlamaParse ($19–$49/mo) |
| **Image to Text (Optical OCR)** | [Launch Tool →](https://verdyaa.github.io/omni-tools-ai/image-to-text/) | Browser Optical OCR | Mathpix / TextSniper ($10–$19/mo) |
| **Redact PDF & Contracts (PII)** | [Launch Tool →](https://verdyaa.github.io/omni-tools-ai/redact-pdf/) | Local Regex + PDF Builder | Redactable ($39/mo) |
| **AutoCAD DXF to SVG / PDF / PNG** | [Launch Tool →](https://verdyaa.github.io/omni-tools-ai/dxf-to-svg/) | Vector Entity Plotter | Scan2CAD / AutoDWG ($49/mo) |
| **Remove Image Background** | [Launch Tool →](https://verdyaa.github.io/omni-tools-ai/remove-image-background/) | WebGPU / Canvas Alpha | PhotoRoom ($12/mo) |
| **Audio / Video to WAV & SRT** | [Launch Tool →](https://verdyaa.github.io/omni-tools-ai/audio-to-text/) | Web AudioContext PCM | Descript / TurboScribe ($15–$24/mo) |
| **Upscale Image (2x / 4x Hi-DPI)** | [Launch Tool →](https://verdyaa.github.io/omni-tools-ai/upscale-image/) | Bicubic / Hi-DPI Canvas | Let's Enhance ($9–$24/mo) |
| **Excel / CSV to Markdown Table** | [Launch Tool →](https://verdyaa.github.io/omni-tools-ai/excel-to-markdown/) | Local Table Parser | TableConvert Pro |

---

## Free Tier vs. OmniTools Pro

- **Free Tier:** 2 local exports per day, 1x standard resolution, single-file drag/drop/paste up to 15MB.
- **OmniTools Pro ([Lifetime $29](https://wedworks.gumroad.com/l/xlqmp) / [Monthly $9/mo](https://wedworks.gumroad.com/l/etvreq)):**
  - Unlimited daily conversions & exports across all 84 tools
  - Multi-file batch queues
  - 2x & 4x Hi-DPI Super-Resolution canvas exports
  - Local RAM allocation for large files up to 1GB
  - Instant license verification via Gumroad (`Verify & Unlock` in the app)

---

## Development & Static Build

```bash
npm test          # Run 10-suite verification tests
npm run build     # Build 85 static SEO pages + sitemap.xml into dist/
npm run deploy    # Deploy dist/ to GitHub Pages (gh-pages branch)
```
