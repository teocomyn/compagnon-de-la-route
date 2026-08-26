import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const logoPath = path.join(root, "public/brand-logo-car.png");
const photoPath = path.join(root, "public/images/hero/conducteur-bus.jpg");
const appDirectory = path.join(root, "src/app");
const socialDirectory = path.join(root, "public/images/og");

const colors = {
  ink: "#061f1a",
  inkLight: "#0a2a24",
  orange: "#ff742f",
  paper: "#f4f0e8",
  muted: "#b9c5bf",
};

await mkdir(appDirectory, { recursive: true });
await mkdir(socialDirectory, { recursive: true });

const logo = await sharp(logoPath).trim().png().toBuffer();

function roundedSquare(size, radius) {
  return Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" rx="${radius}" fill="${colors.ink}"/>
      <rect x="1" y="1" width="${size - 2}" height="${size - 2}" rx="${radius - 1}" fill="none" stroke="#21423a" stroke-width="2"/>
    </svg>
  `);
}

async function createAppIcon(size) {
  const horizontalPadding = Math.round(size * 0.12);
  const logoWidth = size - horizontalPadding * 2;
  const resizedLogo = await sharp(logo)
    .resize({ width: logoWidth, withoutEnlargement: false })
    .png()
    .toBuffer();
  const logoMetadata = await sharp(resizedLogo).metadata();

  return sharp(roundedSquare(size, Math.round(size * 0.22)))
    .composite([
      {
        input: resizedLogo,
        left: Math.round((size - logoWidth) / 2),
        top: Math.round((size - (logoMetadata.height ?? logoWidth)) / 2),
      },
    ])
    .png()
    .toBuffer();
}

function createIco(pngs) {
  const directorySize = 6 + pngs.length * 16;
  const header = Buffer.alloc(directorySize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);

  let imageOffset = directorySize;
  pngs.forEach(({ size, buffer }, index) => {
    const entryOffset = 6 + index * 16;
    header.writeUInt8(size >= 256 ? 0 : size, entryOffset);
    header.writeUInt8(size >= 256 ? 0 : size, entryOffset + 1);
    header.writeUInt8(0, entryOffset + 2);
    header.writeUInt8(0, entryOffset + 3);
    header.writeUInt16LE(1, entryOffset + 4);
    header.writeUInt16LE(32, entryOffset + 6);
    header.writeUInt32LE(buffer.length, entryOffset + 8);
    header.writeUInt32LE(imageOffset, entryOffset + 12);
    imageOffset += buffer.length;
  });

  return Buffer.concat([header, ...pngs.map(({ buffer }) => buffer)]);
}

const icon512 = await createAppIcon(512);
const appleIcon = await createAppIcon(180);
const faviconSizes = [16, 32, 48, 64];
const faviconPngs = await Promise.all(
  faviconSizes.map(async (size) => ({
    size,
    buffer: await sharp(icon512).resize(size, size).png().toBuffer(),
  })),
);

await writeFile(path.join(appDirectory, "icon.png"), icon512);
await writeFile(path.join(appDirectory, "apple-icon.png"), appleIcon);
await writeFile(path.join(appDirectory, "favicon.ico"), createIco(faviconPngs));

const socialWidth = 1200;
const socialHeight = 630;
const photoWidth = 610;
const photo = await sharp(photoPath)
  .resize(photoWidth, socialHeight, { fit: "cover", position: "centre" })
  .modulate({ saturation: 0.82, brightness: 0.82 })
  .jpeg({ quality: 90 })
  .toBuffer();
const socialLogo = await sharp(logo).resize({ width: 112 }).png().toBuffer();

const socialArtwork = Buffer.from(`
  <svg width="${socialWidth}" height="${socialHeight}" viewBox="0 0 ${socialWidth} ${socialHeight}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="seam" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${colors.ink}"/>
        <stop offset="0.58" stop-color="${colors.ink}" stop-opacity="0.98"/>
        <stop offset="1" stop-color="${colors.ink}" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="photoTone" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0.45" stop-color="${colors.ink}" stop-opacity="0"/>
        <stop offset="1" stop-color="${colors.ink}" stop-opacity="0.72"/>
      </linearGradient>
    </defs>
    <rect x="570" width="630" height="630" fill="url(#seam)"/>
    <rect x="590" width="610" height="630" fill="url(#photoTone)"/>
    <path d="M 0 610 H 1200" stroke="${colors.orange}" stroke-width="10"/>
    <path d="M 868 630 C 927 541 1035 511 1200 516" fill="none" stroke="${colors.orange}" stroke-width="3" opacity="0.9"/>
    <path d="M 870 630 C 935 554 1044 530 1200 537" fill="none" stroke="${colors.paper}" stroke-width="1.5" opacity="0.7"/>

    <text x="196" y="73" fill="${colors.paper}" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="700" letter-spacing="-0.5">Compagnon de la Route</text>
    <text x="76" y="142" fill="${colors.orange}" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="700" letter-spacing="3.2">LE LABEL TRANSPORT PORTÉ PAR BOAZ</text>

    <text x="76" y="253" fill="${colors.paper}" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="800" letter-spacing="-2.6">Plus qu’un métier,</text>
    <text x="76" y="322" fill="${colors.orange}" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="800" letter-spacing="-2.6">une mission.</text>

    <line x1="76" y1="374" x2="564" y2="374" stroke="#315047" stroke-width="1"/>
    <text x="76" y="415" fill="${colors.paper}" font-family="Arial, Helvetica, sans-serif" font-size="23" font-weight="600">Préparer les métiers qui font avancer</text>
    <text x="76" y="447" fill="${colors.muted}" font-family="Arial, Helvetica, sans-serif" font-size="23">le transport de voyageurs.</text>

    <text x="76" y="553" fill="${colors.muted}" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2.3">CONDUITE  ·  EXPLOITATION-RÉGULATION  ·  SERVICE</text>
  </svg>
`);

const socialCard = await sharp({
  create: {
    width: socialWidth,
    height: socialHeight,
    channels: 3,
    background: colors.ink,
  },
})
  .composite([
    { input: photo, left: socialWidth - photoWidth, top: 0 },
    { input: socialArtwork, left: 0, top: 0 },
    { input: socialLogo, left: 76, top: 42 },
  ])
  .jpeg({ quality: 91, chromaSubsampling: "4:4:4" })
  .toBuffer();

await writeFile(
  path.join(socialDirectory, "compagnon-route-share-v1.jpg"),
  socialCard,
);

const logoBytes = (await readFile(logoPath)).length;
console.log(
  `Brand assets generated from ${path.relative(root, logoPath)} (${logoBytes} bytes).`,
);
