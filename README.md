# Better Color 🎨

A beautiful terminal styling library with carefully crafted pastel color palettes for Node.js applications.

## Features

✨ **Beautiful Pastel Colors** - Carefully selected soft, eye-pleasing colors  
🎨 **Multiple Styling Options** - Text colors, backgrounds, boxes, and gradients  
🌈 **Gradient Text** - Apply color gradients across your text  
📦 **Lightweight** - Zero dependencies, pure JavaScript  
🎯 **Easy to Use** - Simple, intuitive API  

## Installation

```bash
npm install better-color
```

## Quick Start


```javascript
const bc = require('better-color');

// Simple colored text
console.log(bc.rose('Hello World!'));

// Text with background
console.log(bc.roseBg('Important Message'));

// Labels with tags
console.log(bc.label('SUCCESS', 'Operation completed'));

// Box styling
console.log(bc.box('mint', 'Mint flavored text'));

// Pastel colors
console.log(bc.pastel('lavender', 'Soft lavender text'));

// Gradient text
console.log(bc.gradient('sunset', 'Beautiful gradient text'));
```

## Example
![Better Color Demo](https://i.imgur.com/xBQRaZo.png)

## API Reference

### Basic Styling

#### `rose(text)`
Apply rose color to text with bold styling.

```javascript
console.log(bc.rose('Rose colored text'));
```

#### `roseBg(text)`
Apply rose background with dark text.

```javascript
console.log(bc.roseBg('Text with rose background'));
```

### Labels

#### `label(tag, text)`
Create a two-part label with a highlighted tag and colored text.

```javascript
console.log(bc.label('INFO', 'This is an information message'));
console.log(bc.label('ERROR', 'Something went wrong'));
```

### Box Styling

#### `box(colorName, text)`
Apply box styling with background color and dark text.

```javascript
console.log(bc.box('mint', 'Mint box'));
console.log(bc.box('lavender', 'Lavender box'));
console.log(bc.box('peach', 'Peach box'));
```

### Pastel Colors

#### `pastel(colorName, text)`
Apply pastel foreground colors.

```javascript
console.log(bc.pastel('rose', 'Soft rose text'));
console.log(bc.pastel('sky', 'Sky blue text'));
console.log(bc.pastel('mint', 'Mint green text'));
```

### Gradients

#### `gradient(gradientName, text)`
Apply color gradients across text characters.

```javascript
console.log(bc.gradient('sunset', 'Sunset gradient'));
console.log(bc.gradient('ocean', 'Ocean waves'));
console.log(bc.gradient('bloom', 'Flower bloom'));
```

## Available Colors

### Pastel Palette
- `rose` - Soft pink rose
- `blush` - Light pink blush  
- `lavender` - Gentle purple lavender
- `lilac` - Light purple lilac
- `periwinkle` - Blue-purple periwinkle
- `orchid` - Pink-purple orchid
- `peach` - Warm orange peach
- `apricot` - Soft orange apricot
- `coral` - Pink-orange coral
- `melon` - Light coral melon
- `mint` - Fresh green mint
- `seafoam` - Blue-green seafoam
- `aqua` - Light blue aqua
- `sky` - Soft blue sky
- `butter` - Warm yellow butter
- `lemon` - Light yellow lemon
- `sand` - Beige sand

### Gradient Palettes
- `sunset` - Coral to peach to butter
- `blush` - Rose to blush to lavender
- `cotton` - Blush to lilac to sky
- `ocean` - Aqua to sky to periwinkle
- `sherbet` - Apricot to peach to melon
- `minty` - Mint to seafoam to aqua
- `bloom` - Rose to orchid to lilac
- `daydream` - Lavender to periwinkle to sky
- `lemoncream` - Butter to lemon to sand
- `coralreef` - Coral to melon to peach

## Advanced Usage

### Access Color Palettes

```javascript
// Access the base color palette
console.log(bc.palette.rose); // { r: 247, g: 167, b: 198 }

// Access all palettes
console.log(bc.palettes.pastel);
console.log(bc.palettes.box);
console.log(bc.palettes.gradient);
```

### Custom Styling

You can access the raw color values to create your own styling functions:

```javascript
const { palette } = bc;

// Use RGB values for custom implementations
const customRose = palette.rose; // { r: 247, g: 167, b: 198 }
```

## Examples

### Creating Beautiful Logs

```javascript
const bc = require('better-color');

// Status messages
console.log(bc.label('SUCCESS', 'User authenticated'));
console.log(bc.label('WARNING', 'Rate limit approaching'));
console.log(bc.label('ERROR', 'Connection failed'));

// Highlighted sections
console.log(bc.box('mint', ' Configuration loaded '));
console.log(bc.box('peach', ' Server starting... '));

// Decorative text
console.log(bc.gradient('sunset', '🌅 Welcome to Better Color! 🌅'));
```

### Progress Indicators

```javascript
// Different states with colors
console.log(bc.pastel('sky', '⏳ Loading...'));
console.log(bc.pastel('mint', '✅ Complete!'));
console.log(bc.pastel('coral', '❌ Failed'));
```

## Requirements

- Node.js (any recent version)
- Terminal with ANSI color support

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with 💖 and lots of ☕