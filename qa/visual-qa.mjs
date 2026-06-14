// Visual QA: render a route in Chrome (via Playwright) and pixel-diff it
// against a reference screenshot from the design handoff.
//
// Usage: node qa/visual-qa.mjs <url> <referencePng> <outBasename> [width] [height]
import { chromium } from "playwright";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import fs from "node:fs";

const [, , url, refPath, outBase, wArg, hArg] = process.argv;
const width = Number(wArg || 1440);
const height = Number(hArg || 1024);
const outDir = "/tmp/qa";

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({
  viewport: { width, height },
  deviceScaleFactor: 1,
});
await page.goto(url, { waitUntil: "networkidle" });
// give fonts + the puzzle watermark a beat to settle
await page.evaluate(() => document.fonts && document.fonts.ready);
await page.waitForTimeout(1200);

const shotPath = `${outDir}/${outBase}-impl.png`;
await page.screenshot({ path: shotPath, clip: { x: 0, y: 0, width, height } });
await browser.close();

// ---- pixel diff ----
const impl = PNG.sync.read(fs.readFileSync(shotPath));
const ref = PNG.sync.read(fs.readFileSync(refPath));
const w = Math.min(impl.width, ref.width);
const h = Math.min(impl.height, ref.height);
const diff = new PNG({ width: w, height: h });

// crop both to common size if needed
function crop(src, w, h) {
  if (src.width === w && src.height === h) return src;
  const out = new PNG({ width: w, height: h });
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const si = (src.width * y + x) << 2;
      const di = (w * y + x) << 2;
      out.data[di] = src.data[si];
      out.data[di + 1] = src.data[si + 1];
      out.data[di + 2] = src.data[si + 2];
      out.data[di + 3] = src.data[si + 3];
    }
  return out;
}
const a = crop(impl, w, h);
const b = crop(ref, w, h);
const mismatched = pixelmatch(a.data, b.data, diff.data, w, h, {
  threshold: 0.12,
  includeAA: false,
});
fs.writeFileSync(`${outDir}/${outBase}-diff.png`, PNG.sync.write(diff));

const total = w * h;
const pct = ((mismatched / total) * 100).toFixed(2);
console.log(
  JSON.stringify(
    { url, size: `${w}x${h}`, mismatchedPixels: mismatched, totalPixels: total, mismatchPct: pct },
    null,
    2
  )
);
