// 将 src/assets 下的位图(jpg/jpeg/png)转为 WebP —— 仅当 WebP 更小时才替换并删原图,
// 否则保留原图。随后把 src 下 .ts/.tsx/.scss 中对"已转换图片"的引用扩展名改为 .webp。
// SVG / PDF / iconfont 不动。用法: node scripts/to-webp.mjs
import { readdir, stat, readFile, writeFile, unlink } from 'node:fs/promises';
import { join, extname, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const SRC = join(dirname(fileURLToPath(import.meta.url)), '..', 'src');
const ASSETS = join(SRC, 'assets');
const RASTER = ['.jpg', '.jpeg', '.png'];
const Q = 82;

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

// 1) 转换图片(仅在更小时)
let before = 0, after = 0, converted = 0, kept = 0;
const renames = []; // { from: 'home-png1.png', to: 'home-png1.webp' }
for (const file of await walk(ASSETS)) {
  if (!RASTER.includes(extname(file).toLowerCase())) continue;
  const orig = (await stat(file)).size;
  before += orig;
  const buf = await sharp(file, { failOn: 'none' }).webp({ quality: Q }).toBuffer();
  if (buf.length < orig) {
    const webpPath = file.replace(/\.(jpe?g|png)$/i, '.webp');
    await writeFile(webpPath, buf);
    await unlink(file);
    renames.push({ from: basename(file), to: basename(webpPath) });
    after += buf.length; converted++;
    console.log(`✓ ${basename(file).padEnd(28)} ${fmt(orig)} → ${fmt(buf.length)} (-${Math.round((1 - buf.length / orig) * 100)}%)`);
  } else {
    after += orig; kept++;
    console.log(`· ${basename(file).padEnd(28)} ${fmt(orig)} 保留原图(webp 更大)`);
  }
}
console.log(`\n转换 ${converted} 张 / 保留 ${kept} 张  ${(before / 1024 / 1024).toFixed(1)}MB → ${(after / 1024 / 1024).toFixed(1)}MB (-${Math.round((1 - after / before) * 100)}%)`);

// 2) 仅更新"已转换图片"的引用
let edited = 0;
for (const file of await walk(SRC)) {
  if (!['.ts', '.tsx', '.scss'].includes(extname(file))) continue;
  let text = await readFile(file, 'utf8');
  const orig = text;
  for (const { from, to } of renames) {
    text = text.split(from).join(to);
  }
  if (text !== orig) {
    await writeFile(file, text);
    edited++;
    console.log(`  ↳ 引用已更新: ${file.replace(SRC, 'src')}`);
  }
}
console.log(`\n更新引用文件: ${edited} 个`);
