const bc = require("./index");

console.log(bc.label("BETTER", "Color Test"));

console.log("");
console.log("PASTEL:");
Object.keys(bc.palettes.pastel).forEach((name) => {
  console.log(bc.pastel(name, ` ${name} `));
});

console.log("");
console.log("BOX:");
Object.keys(bc.palettes.box).forEach((name) => {
  console.log(bc.box(name, ` ${name} box `));
});

console.log("");
console.log("GRADIENT:");
Object.keys(bc.palettes.gradient).forEach((name) => {
  console.log(bc.gradient(name, ` ${name} gradient `));
});
