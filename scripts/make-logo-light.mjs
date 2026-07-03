// 生成暗色背景适用的 logo:保留蓝色涡轮图标,把黑色 DARWICK 文字变白、
// 白色背景转透明。算法:蓝色像素(b 明显大于 r/g)保留原样;其余区域统一为
// 白色,透明度 = 255 - 亮度(黑→不透明白字,白→透明背景,灰边→平滑过渡)。
import sharp from 'sharp';

const SRC = 'src/assets/company-logo.webp';
const OUT = process.argv[2] || 'src/assets/company-logo-light.webp';

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const out = Buffer.from(data);

for (let i = 0; i < data.length; i += channels) {
  const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
  if (a === 0) continue;
  const isBlue = b - Math.max(r, g) > 25; // 蓝色图标区
  if (isBlue) continue; // 保留原色
  const lum = 0.3 * r + 0.59 * g + 0.11 * b;
  out[i] = 255;
  out[i + 1] = 255;
  out[i + 2] = 255;
  out[i + 3] = Math.round((255 - lum) * (a / 255)); // 黑→不透明白, 白→透明
}

await sharp(out, { raw: { width, height, channels } })
  .webp({ quality: 90, alphaQuality: 100 })
  .toFile(OUT);
console.log(`已生成 ${OUT}  (${width}x${height})`);
