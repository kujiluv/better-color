<div align="center">

# 🎨 Better Color

### Make your terminal beautiful with soft, eye-pleasing pastel colors

[![npm version](https://img.shields.io/npm/v/better-color.svg)](https://www.npmjs.com/package/better-color)
[![npm downloads](https://img.shields.io/npm/dm/better-color.svg)](https://www.npmjs.com/package/better-color)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js](https://img.shields.io/badge/node-%3E%3D%2012.0.0-brightgreen.svg)](https://nodejs.org/)

![Better Color Demo](https://i.imgur.com/xBQRaZo.png)

**Better Color** is a lightweight, zero-dependency terminal styling library featuring carefully curated pastel colors that are gentle on the eyes. Perfect for creating beautiful CLI tools, logs, and terminal applications.

[Installation](#-installation) •
[Quick Start](#-quick-start) •
[Features](#-features) •
[API](#-api-reference) •
[Examples](#-examples)

</div>

-----

## ✨ Features

- 🎨 **17 Beautiful Pastel Colors** - Handpicked soft colors that won’t strain your eyes
- 🌈 **10 Gradient Presets** - Apply stunning color gradients across your text
- 📦 **Zero Dependencies** - Pure JavaScript, no bloat
- 🪶 **Lightweight** - Small footprint, fast performance
- 🎯 **Simple API** - Intuitive methods that just work
- 🔧 **Flexible** - Use presets or access raw color values for custom styling
- 🖥️ **Universal** - Works on any terminal with ANSI color support

## 📦 Installation

```bash
npm install better-color
```

or

```bash
yarn add better-color
```

## 🚀 Quick Start

```javascript
const bc = require('better-color');

// Pastel colored text
console.log(bc.rose('Hello World!'));
console.log(bc.pastel('mint', 'Fresh mint text'));

// Background colors
console.log(bc.roseBg('Important Message'));
console.log(bc.box('lavender', 'Boxed content'));

// Status labels
console.log(bc.label('SUCCESS', 'Operation completed'));
console.log(bc.label('ERROR', 'Something went wrong'));

// Beautiful gradients
console.log(bc.gradient('sunset', 'Stunning sunset gradient text'));
console.log(bc.gradient('ocean', 'Deep ocean waves'));
```

## 🎨 API Reference

### Text Styling

#### `rose(text)` / `roseBg(text)`

Apply rose color to text or background. Rose is the primary color of Better Color.

```javascript
console.log(bc.rose('Beautiful rose text'));
console.log(bc.roseBg('Rose background'));
```

#### `pastel(colorName, text)`

Apply any pastel color to text. See [Available Colors](#available-colors) for all options.

```javascript
console.log(bc.pastel('lavender', 'Soft lavender'));
console.log(bc.pastel('mint', 'Fresh mint'));
console.log(bc.pastel('peach', 'Warm peach'));
```

#### `box(colorName, text)`

Create boxed text with a colored background and contrasting dark text.

```javascript
console.log(bc.box('sky', ' Important Notice '));
console.log(bc.box('coral', ' Warning Message '));
```

### Labels & Tags

#### `label(tag, message)`

Create professional two-part labels perfect for logs and status messages.

```javascript
console.log(bc.label('INFO', 'Server started on port 3000'));
console.log(bc.label('SUCCESS', 'Database connected'));
console.log(bc.label('WARNING', 'Rate limit approaching'));
console.log(bc.label('ERROR', 'Authentication failed'));
```

### Gradients

#### `gradient(gradientName, text)`

Apply smooth color gradients across your text. Each character transitions through the gradient colors.

```javascript
console.log(bc.gradient('sunset', 'Amazing sunset colors'));
console.log(bc.gradient('ocean', 'Deep blue ocean'));
console.log(bc.gradient('bloom', 'Flower petals'));
```

**Available Gradients:**

- `sunset` - Warm coral → peach → golden butter
- `blush` - Romantic rose → blush → soft lavender
- `cotton` - Sweet blush → lilac → sky blue
- `ocean` - Aqua blue → sky → deep periwinkle
- `sherbet` - Fruity apricot → peach → melon
- `minty` - Cool mint → seafoam → aqua
- `bloom` - Floral rose → orchid → lilac
- `daydream` - Dreamy lavender → periwinkle → sky
- `lemoncream` - Citrus butter → lemon → warm sand
- `coralreef` - Tropical coral → melon → soft peach

## 🎨 Available Colors

Better Color includes 17 carefully selected pastel colors:

|Color       |Description     |RGB                 |
|------------|----------------|--------------------|
|`rose`      |Soft pink rose  |`rgb(247, 167, 198)`|
|`blush`     |Light pink blush|`rgb(255, 193, 204)`|
|`lavender`  |Gentle purple   |`rgb(200, 191, 231)`|
|`lilac`     |Light purple    |`rgb(220, 208, 255)`|
|`periwinkle`|Blue-purple     |`rgb(204, 204, 255)`|
|`orchid`    |Pink-purple     |`rgb(234, 187, 234)`|
|`peach`     |Warm orange     |`rgb(255, 218, 185)`|
|`apricot`   |Soft orange     |`rgb(255, 203, 164)`|
|`coral`     |Pink-orange     |`rgb(255, 183, 178)`|
|`melon`     |Light coral     |`rgb(255, 174, 166)`|
|`mint`      |Fresh green     |`rgb(182, 255, 198)`|
|`seafoam`   |Blue-green      |`rgb(159, 226, 191)`|
|`aqua`      |Light blue      |`rgb(175, 238, 238)`|
|`sky`       |Soft blue       |`rgb(173, 216, 230)`|
|`butter`    |Warm yellow     |`rgb(255, 245, 157)`|
|`lemon`     |Light yellow    |`rgb(255, 250, 205)`|
|`sand`      |Beige           |`rgb(245, 222, 179)`|

## 💡 Examples

### Beautiful CLI Logs

```javascript
const bc = require('better-color');

// Application startup
console.log(bc.gradient('sunset', '🌅 MyApp v1.0.0'));
console.log(bc.box('mint', ' Server Status: Online '));
console.log('');

// Status updates
console.log(bc.label('INFO', 'Loading configuration...'));
console.log(bc.label('SUCCESS', 'Database connected'));
console.log(bc.label('SUCCESS', 'Cache initialized'));
console.log(bc.label('INFO', 'Server listening on port 3000'));
```

### Progress & Loading States

```javascript
// Loading states
console.log(bc.pastel('sky', '⏳ Fetching data...'));
console.log(bc.pastel('butter', '⚙️  Processing...'));
console.log(bc.pastel('mint', '✅ Complete!'));

// Error handling
console.log(bc.pastel('coral', '❌ Failed to connect'));
console.log(bc.label('ERROR', 'Database connection timeout'));
```

### Build & Deploy Scripts

```javascript
console.log(bc.gradient('ocean', '🚀 Starting build process...'));
console.log('');

console.log(bc.box('lavender', ' Step 1: Compiling TypeScript '));
console.log(bc.pastel('mint', '✓ Compilation successful'));
console.log('');

console.log(bc.box('lavender', ' Step 2: Running tests '));
console.log(bc.pastel('mint', '✓ All tests passed (127/127)'));
console.log('');

console.log(bc.box('lavender', ' Step 3: Deploying '));
console.log(bc.pastel('mint', '✓ Deployed to production'));
console.log('');

console.log(bc.gradient('bloom', '✨ Build complete! ✨'));
```

### Interactive CLI

```javascript
const bc = require('better-color');

console.log(bc.gradient('sunset', '╔════════════════════════════╗'));
console.log(bc.gradient('sunset', '║   Welcome to Better CLI   ║'));
console.log(bc.gradient('sunset', '╚════════════════════════════╝'));
console.log('');

console.log(bc.pastel('rose', '  1. Create new project'));
console.log(bc.pastel('lavender', '  2. Open existing project'));
console.log(bc.pastel('mint', '  3. Settings'));
console.log(bc.pastel('coral', '  4. Exit'));
console.log('');

console.log(bc.box('sky', ' Enter your choice: '));
```

## 🔧 Advanced Usage

### Access Raw Color Values

```javascript
const bc = require('better-color');

// Get RGB values for custom implementations
const roseColor = bc.palette.rose; 
// { r: 247, g: 167, b: 198 }

// Access all color palettes
console.log(bc.palettes.pastel);   // All pastel colors
console.log(bc.palettes.box);      // Box background colors
console.log(bc.palettes.gradient); // All gradient definitions
```

### Create Custom Color Functions

```javascript
const bc = require('better-color');

// Create a custom styling function
function customStyle(text) {
  const { r, g, b } = bc.palette.mint;
  return `\x1b[38;2;${r};${g};${b}m${text}\x1b[0m`;
}

console.log(customStyle('Custom styled text'));
```

## 🤝 Contributing

Contributions are welcome! Whether it’s bug fixes, new features, or color suggestions:

1. Fork the repository
1. Create your feature branch (`git checkout -b feature/AmazingFeature`)
1. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
1. Push to the branch (`git push origin feature/AmazingFeature`)
1. Open a Pull Request

## 📝 License

ISC License - feel free to use Better Color in your projects!

## 🙏 Acknowledgments

- Inspired by the need for gentler, more aesthetic terminal colors
- Color palette carefully crafted for optimal readability and visual comfort
- Built with ❤️ for developers who appreciate beautiful tools

## 📚 Resources

- [npm Package](https://www.npmjs.com/package/better-color)
- [GitHub Repository](https://github.com/kujiluv/better-color)
- [Report Issues](https://github.com/kujiluv/better-color/issues)

-----

<div align="center">

**Made with 💖 by developers, for developers**

⭐ Star us on GitHub if you find Better Color useful!

</div>