import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceRoot = path.join(root, "assets", "source", "kensington-final-visual-pack");

const brandAssets = [
  {
    source: "brand/pk-monogram-transparent.png",
    output: "public/brand/pk-monogram-transparent",
    widths: [128],
  },
  {
    source: "brand/plumber-kensington-horizontal-logo.png",
    output: "public/brand/plumber-kensington-horizontal-logo",
    widths: [480, 1086],
  },
];

const visualNames = [
  "home-enquiry-process",
  "leak-repair-visual",
  "blocked-vs-flush-visual",
  "toilet-cistern-states",
  "ceiling-water-safety",
  "tap-repair-visual",
  "shower-repair-visual",
];

const iconSizes = [512, 192, 180, 64, 32, 16];

async function ensureParent(file) {
  await fs.mkdir(path.dirname(file), { recursive: true });
}

function resized(source, width) {
  return sharp(source, { animated: false }).resize({
    width,
    withoutEnlargement: true,
  });
}

async function writeModernFormats(source, output, widths) {
  for (const width of widths) {
    const suffix = widths.length === 1 ? "" : `-${width}`;
    const avif = `${output}${suffix}.avif`;
    const webp = `${output}${suffix}.webp`;
    await ensureParent(avif);
    await Promise.all([
      resized(source, width)
        .avif({ quality: 62, effort: 6, chromaSubsampling: "4:4:4" })
        .toFile(avif),
      resized(source, width)
        .webp({ quality: 82, smartSubsample: true })
        .toFile(webp),
    ]);
  }
}

function createIco(pngBuffers, sizes) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngBuffers.length, 4);

  const directory = Buffer.alloc(pngBuffers.length * 16);
  let offset = header.length + directory.length;

  pngBuffers.forEach((buffer, index) => {
    const entry = directory.subarray(index * 16, index * 16 + 16);
    const size = sizes[index];
    entry.writeUInt8(size === 256 ? 0 : size, 0);
    entry.writeUInt8(size === 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += buffer.length;
  });

  return Buffer.concat([header, directory, ...pngBuffers]);
}

async function prepareIcons() {
  const source = path.join(sourceRoot, "brand", "pk-app-favicon-icon.png");
  const pngBuffers = [];

  for (const size of iconSizes) {
    const output = path.join(root, "public", "icons", `pk-app-icon-${size}.png`);
    await ensureParent(output);
    const buffer = await sharp(source).resize(size, size).png({ compressionLevel: 9 }).toBuffer();
    await fs.writeFile(output, buffer);
    pngBuffers.push(buffer);
  }

  await sharp(source).resize(512, 512).png({ compressionLevel: 9 }).toFile(path.join(root, "app", "icon.png"));
  await sharp(source).resize(180, 180).png({ compressionLevel: 9 }).toFile(path.join(root, "app", "apple-icon.png"));

  const icoBuffers = await Promise.all(
    [16, 32, 64].map((size) =>
      sharp(source).resize(size, size).ensureAlpha().png({ compressionLevel: 9 }).toBuffer(),
    ),
  );
  await fs.writeFile(path.join(root, "app", "favicon.ico"), createIco(icoBuffers, [16, 32, 64]));
}

async function prepareSocialImage() {
  const source = path.join(sourceRoot, "brand", "plumber-kensington-wide-brand.png");
  const output = path.join(root, "public", "brand", "plumber-kensington-wide-brand.png");
  const buffer = await sharp(source).resize(1200, 630, { fit: "fill" }).png({ compressionLevel: 9 }).toBuffer();
  await ensureParent(output);
  await Promise.all([
    fs.writeFile(output, buffer),
    fs.writeFile(path.join(root, "app", "opengraph-image.png"), buffer),
    fs.writeFile(path.join(root, "app", "twitter-image.png"), buffer),
  ]);
}

async function main() {
  const requested = new Set(process.argv.slice(2));
  const runAll = requested.size === 0;

  if (runAll || requested.has("--brand")) {
    for (const asset of brandAssets) {
      await writeModernFormats(path.join(sourceRoot, asset.source), path.join(root, asset.output), asset.widths);
    }
  }

  if (runAll || requested.has("--visuals")) {
    for (const name of visualNames) {
      await writeModernFormats(
        path.join(sourceRoot, "site-visuals", `${name}.png`),
        path.join(root, "public", "visuals", name),
        [724, 1448],
      );
    }
  }

  if (runAll || requested.has("--icons")) await prepareIcons();
  if (runAll || requested.has("--social")) await prepareSocialImage();

  const publicFiles = await fs.readdir(path.join(root, "public", "visuals"));
  console.log(`Prepared ${publicFiles.length} responsive visual files, brand formats, app icons and social images.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
