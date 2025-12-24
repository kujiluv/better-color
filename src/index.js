// code ansi
function ansi(color, isBg = false) {
  const { r, g, b } = color;
  const base = isBg ? 48 : 38; //38 c texte et 48 c background
  return `\x1b[${base};2;${r};${g};${b}m`;
}

// gras + reset
function style(text, color, { bg = null } = {}) {
  const bold = "\x1b[1m";
  const reset = "\x1b[0m";
  const fg = ansi(color, false);
  const bgCode = bg ? ansi(bg, true) : "";
  return `${bold}${fg}${bgCode}${text}${reset}`;
}

const { base, palettes } = require("./palettes");

function rose(text) {
  return style(text, base.rose);
}

function roseBg(text) {
  return style(text, base.textDark, { bg: base.rose });
}

function label(tag, text) {
  const left = style(` ${tag} `, base.textDark, { bg: base.butter });
  const right = style(` ${text} `, base.rose);
  return `${left} ${right}`;
}

function box(name, text) {
  const entry = palettes.box[name];
  if (!entry) return text;
  return style(text, entry.fg, { bg: entry.bg });
}

function pastel(name, text) {
  const entry = palettes.pastel[name];
  if (!entry) return text;
  return style(text, entry);
}

function gradient(name, text) {
  const colors = palettes.gradient[name];
  if (!colors || colors.length === 0) return text;
  const parts = text.split("");
  const styled = parts.map((ch, i) => {
    const color = colors[i % colors.length];
    return style(ch, color);
  });
  return styled.join("");
}

module.exports = {
  rose,
  roseBg,
  label,
  box,
  pastel,
  gradient,
  palette: base,
  palettes
};
