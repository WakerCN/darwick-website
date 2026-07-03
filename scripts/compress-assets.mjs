// 一次性图片压缩脚本:限宽 1920px + JPEG q82(mozjpeg)+ PNG 量化,原地覆盖。
// 用法: node scripts/compress-assets.mjs
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, extname, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets');
const MAX_W = 1920;
const JPEG_Q = 82;

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const fmt = (n) => (n / 1024).toFixed(0) + 'KB';
let before = 0, after = 0;

for (const file of await walk(ROOT)) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

  const orig = (await stat(file)).size;
  const img = sharp(file, { failOn: 'none' });
  const meta = await img.metadata();
  if (meta.width > MAX_W) img.resize({ width: MAX_W, withoutEnlargement: true });

  if (ext === '.png') {
    img.png({ quality: 80, compressionLevel: 9, palette: true });
  } else {
    img.jpeg({ quality: JPEG_Q, mozjpeg: true });
  }

  const tmp = join(dirname(file), '.tmp-' + basename(file));
  await img.toFile(tmp);
  const newSize = (await stat(tmp)).size;

  // 只有变小才覆盖,否则保留原图
  if (newSize < orig) {
    await rename(tmp, file);
    console.log(`✓ ${basename(file)}  ${fmt(orig)} → ${fmt(newSize)}  (-${Math.round((1 - newSize / orig) * 100)}%)`);
    after += newSize;
  } else {
    await unlink(tmp);
    console.log(`· ${basename(file)}  ${fmt(orig)} 保持原样`);
    after += orig;
  }
  before += orig;
}

console.log(`\n总计: ${(before / 1024 / 1024).toFixed(1)}MB → ${(after / 1024 / 1024).toFixed(1)}MB  (-${Math.round((1 - after / before) * 100)}%)`);
