// la base de couleur !
const base = {
  rose: { r: 247, g: 167, b: 198 },
  blush: { r: 250, g: 210, b: 225 },
  lavender: { r: 205, g: 180, b: 219 },
  lilac: { r: 228, g: 193, b: 249 },
  periwinkle: { r: 184, g: 192, b: 255 },
  orchid: { r: 242, g: 181, b: 212 },
  peach: { r: 255, g: 200, b: 162 },
  apricot: { r: 251, g: 196, b: 171 },
  coral: { r: 255, g: 154, b: 162 },
  melon: { r: 255, g: 183, b: 178 },
  mint: { r: 189, g: 235, b: 211 },
  seafoam: { r: 199, g: 249, b: 204 },
  aqua: { r: 160, g: 231, b: 229 },
  sky: { r: 169, g: 214, b: 245 },
  butter: { r: 255, g: 241, b: 168 },
  lemon: { r: 249, g: 243, b: 194 },
  sand: { r: 247, g: 237, b: 226 },
  textDark: { r: 58, g: 46, b: 57 }
};

const pastel = {
  rose: base.rose,
  blush: base.blush,
  lavender: base.lavender,
  lilac: base.lilac,
  periwinkle: base.periwinkle,
  orchid: base.orchid,
  peach: base.peach,
  apricot: base.apricot,
  coral: base.coral,
  melon: base.melon,
  mint: base.mint,
  seafoam: base.seafoam,
  aqua: base.aqua,
  sky: base.sky,
  butter: base.butter,
  lemon: base.lemon,
  sand: base.sand
};

function makeBox(palette, fg) {
  const out = {};
  Object.keys(palette).forEach((name) => {
    out[name] = { fg, bg: palette[name] };
  });
  return out;
}

const box = makeBox(pastel, base.textDark);

const gradient = {
  sunset: [base.coral, base.peach, base.butter],
  blush: [base.rose, base.blush, base.lavender],
  cotton: [base.blush, base.lilac, base.sky],
  ocean: [base.aqua, base.sky, base.periwinkle],
  sherbet: [base.apricot, base.peach, base.melon],
  minty: [base.mint, base.seafoam, base.aqua],
  bloom: [base.rose, base.orchid, base.lilac],
  daydream: [base.lavender, base.periwinkle, base.sky],
  lemoncream: [base.butter, base.lemon, base.sand],
  coralreef: [base.coral, base.melon, base.peach]
};

const palettes = { box, pastel, gradient };


module.exports = { base, palettes };
