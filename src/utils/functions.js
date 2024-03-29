const randomHexGenerator = () => {
  return Math.floor(Math.random() * (0xffffff + 1))
    .toString(16)
    .padStart(6, "0");
};

const getSchemeURL = (hex, mode) => {
  if (mode) {
    return `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&named=true`;
  } else {
    return `https://www.thecolorapi.com/scheme?hex=${hex}&mode=triad&named=true`;
  }
};

// Detects when a color is too dark to contrast
// against the foreground text.
const isColorDark = (color) => {
  let c = color.substring(1);
  let rgb = parseInt(c, 16);
  let r = (rgb >> 16) & 0xff;
  let g = (rgb >> 8) & 0xff;
  let b = (rgb >> 0) & 0xff;

  let brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  if (brightness < 120) {
    return true;
  } else {
    return false;
  }
};

const getCSSValues = (scheme) => {
  let values = scheme.map((color) => {
    const { hex, rgb, name: {value} } = color;

    return {
        hex,
        rgb,
        value
    }
  });
  return values;
};

// Map over HEX values and generate CSS Markdown.
const getHex = (scheme) => {
    const colors = getCSSValues(scheme);
    const hexComment = "/* CSS HEX */\n\n"
    const hex = hexComment + colors.map((color) => {
        return `--${color.value.split(' ')
        .join('-').toLowerCase()}: ${color.hex.value};\n`
    }).join('') + "\n";

    return hex;
};

// Map ove RGB values and generate CSS Markdown.
const getRGB = (scheme) => {
    const colors = getCSSValues(scheme)
    const rgbComment = "/* CSS RGB */\n\n"
    const rgb = rgbComment + colors.map((color) => {
        return `--${color.value.split(' ')
        .join('-').toLowerCase()}: rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b});\n`
    }).join('');

    return rgb;
};

export {
  randomHexGenerator,
  isColorDark,
  getSchemeURL,
  getCSSValues,
  getHex,
  getRGB
};
