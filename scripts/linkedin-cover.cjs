/**
 * Generate public/linkedin-cover.png from public/linkedin-cover.svg.
 * Requires: npm install sharp (devDependency).
 * Run: node scripts/linkedin-cover.cjs
 */
const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch (_) {
  console.error('sharp is required. Run: npm install --save-dev sharp');
  process.exit(1);
}

const projectRoot = path.join(__dirname, '..');
const svgPath = path.join(projectRoot, 'public', 'linkedin-cover.svg');
const outPath = path.join(projectRoot, 'public', 'linkedin-cover.png');

const svg = fs.readFileSync(svgPath);

sharp(svg)
  .png()
  .toFile(outPath)
  .then(() => console.log('Wrote public/linkedin-cover.png'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
