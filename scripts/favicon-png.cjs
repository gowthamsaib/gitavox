/**
 * Generate public/favicon.png (512x512 blue square with white voice bars)
 * using only Node built-ins. Matches the public/favicon.svg design.
 */
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const SIZE = 512;
const BLUE = { r: 37, g: 99, b: 235 }; // #2563eb
const RADIUS = 96; // ~12/64 * 512

function crc32(data) {
  let crc = 0xffffffff;
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    table[n] = c >>> 0;
  }
  for (let i = 0; i < data.length; i++) {
    crc = table[(crc ^ data[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function writeChunk(out, type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  out.push(len);
  out.push(Buffer.from(type, 'ascii'));
  out.push(data);
  const combined = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(combined), 0);
  out.push(crc);
}

function inCircle(x, y, cx, cy, r) {
  return (x - cx) * (x - cx) + (y - cy) * (y - cy) <= r * r;
}

function inRoundedRect(x, y) {
  if (x < RADIUS && y < RADIUS) return inCircle(x, y, RADIUS, RADIUS, RADIUS);
  if (x >= SIZE - RADIUS && y < RADIUS) return inCircle(x, y, SIZE - RADIUS, RADIUS, RADIUS);
  if (x < RADIUS && y >= SIZE - RADIUS) return inCircle(x, y, RADIUS, SIZE - RADIUS, RADIUS);
  if (x >= SIZE - RADIUS && y >= SIZE - RADIUS) return inCircle(x, y, SIZE - RADIUS, SIZE - RADIUS, RADIUS);
  return true;
}

// Bar positions (scaled from 64 to 512): 22,30,38 -> 176,240,304; heights 24-40, 16-40, 24-40
function inBar(x, y) {
  const barW = 24;
  const bars = [
    [176, 192, 320],   // left bar y 192-320
    [240, 128, 320],   // middle bar y 128-320
    [304, 192, 320],   // right bar y 192-320
  ];
  for (const [cx, y1, y2] of bars) {
    if (x >= cx - barW / 2 && x <= cx + barW / 2 && y >= y1 && y <= y2) return true;
  }
  return false;
}

const out = [];
out.push(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(SIZE, 0);
ihdr.writeUInt32BE(SIZE, 4);
ihdr.writeUInt8(8, 8);   // bit depth
ihdr.writeUInt8(6, 9);   // color type RGBA
ihdr.writeUInt8(0, 10);  // compression
ihdr.writeUInt8(0, 11);  // filter
ihdr.writeUInt8(0, 12);  // interlace
writeChunk(out, 'IHDR', ihdr);

const raw = [];
for (let y = 0; y < SIZE; y++) {
  raw.push(0); // filter byte
  for (let x = 0; x < SIZE; x++) {
    const inRect = inRoundedRect(x, y);
    const isBar = inBar(x, y);
    if (inRect && isBar) {
      raw.push(255, 255, 255, 255); // white bars, opaque
    } else if (inRect) {
      raw.push(BLUE.r, BLUE.g, BLUE.b, 255); // blue background, opaque
    } else {
      raw.push(0, 0, 0, 0); // transparent corners
    }
  }
}
const rawBuf = Buffer.from(raw);
const compressed = zlib.deflateSync(rawBuf, { level: 9 });
writeChunk(out, 'IDAT', compressed);
writeChunk(out, 'IEND', Buffer.alloc(0));

const png = Buffer.concat(out);
const publicDir = path.join(__dirname, '..', 'public');
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'favicon.png'), png);
console.log('Wrote public/favicon.png');
