const randomHexGenerator = () => {
  return Math.floor(Math.random() * (0xffffff + 1))
    .toString(16)
    .padStart(6,'0');
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

export { randomHexGenerator, isColorDark };
