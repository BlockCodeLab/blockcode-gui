export class Color {
  /**
   * @typedef {object} RGBObject - An object representing a color in RGB format.
   * @property {number} r - the red component, in the range [0, 255].
   * @property {number} g - the green component, in the range [0, 255].
   * @property {number} b - the blue component, in the range [0, 255].
   */

  /**
   * @typedef {object} HSVObject - An object representing a color in HSV format.
   * @property {number} h - hue, in the range [0-359).
   * @property {number} s - saturation, in the range [0,1].
   * @property {number} v - value, in the range [0,1].
   */

  /**
   * Convert a Scratch decimal color to a hex string, #RRGGBB.
   * @param {number} decimal RGB color as a decimal.
   * @return {string} RGB color as #RRGGBB hex string.
   */
  static decimalToHex(decimal) {
    if (decimal < 0) {
      decimal += 0xffffff + 1;
    }
    let hex = Number(decimal).toString(16);
    hex = `#${'000000'.substr(0, 6 - hex.length)}${hex}`;
    return hex;
  }

  /**
   * Convert a Scratch decimal color to an RGB color object.
   * @param {number} decimal RGB color as decimal.
   * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */
  static decimalToRgb(decimal) {
    const a = (decimal >> 24) & 0xff;
    const r = (decimal >> 16) & 0xff;
    const g = (decimal >> 8) & 0xff;
    const b = decimal & 0xff;
    return { r: r, g: g, b: b, a: a > 0 ? a : 255 };
  }

  /**
   * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
   * CC-BY-SA Tim Down:
   * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   * @param {!string} hex Hex representation of the color.
   * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */
  static hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  /**
   * Convert an RGB color object to a hex color.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {!string} Hex representation of the color.
   */
  static rgbToHex(rgb) {
    return Color.decimalToHex(Color.rgbToDecimal(rgb));
  }

  /**
   * Convert an RGB color object to a Scratch decimal color.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {!number} Number representing the color.
   */
  static rgbToDecimal(rgb) {
    return (rgb.r << 16) + (rgb.g << 8) + rgb.b;
  }

  /**
   * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
   * @param {!string} hex Hex representation of the color.
   * @return {!number} Number representing the color.
   */
  static hexToDecimal(hex) {
    return Color.rgbToDecimal(Color.hexToRgb(hex));
  }

  /**
   * Convert an HSV color to RGB format.
   * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
   * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   */
  static hsvToRgb(hsv) {
    let h = hsv.h % 360;
    if (h < 0) h += 360;
    const s = Math.max(0, Math.min(hsv.s, 1));
    const v = Math.max(0, Math.min(hsv.v, 1));

    const i = Math.floor(h / 60);
    const f = h / 60 - i;
    const p = v * (1 - s);
    const q = v * (1 - s * f);
    const t = v * (1 - s * (1 - f));

    let r;
    let g;
    let b;

    switch (i) {
      default:
      case 0:
        r = v;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = v;
        b = p;
        break;
      case 2:
        r = p;
        g = v;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = v;
        break;
      case 4:
        r = t;
        g = p;
        b = v;
        break;
      case 5:
        r = v;
        g = p;
        b = q;
        break;
    }

    return {
      r: Math.floor(r * 255),
      g: Math.floor(g * 255),
      b: Math.floor(b * 255),
    };
  }

  /**
   * Convert an RGB color to HSV format.
   * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
   * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
   */
  static rgbToHsv(rgb) {
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    const x = Math.min(Math.min(r, g), b);
    const v = Math.max(Math.max(r, g), b);

    // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate
    let h = 0;
    let s = 0;
    if (x !== v) {
      const f = r === x ? g - b : g === x ? b - r : r - g;
      const i = r === x ? 3 : g === x ? 5 : 1;
      h = ((i - f / (v - x)) * 60) % 360;
      s = (v - x) / v;
    }

    return { h: h, s: s, v: v };
  }

  /**
   * Linear interpolation between rgb0 and rgb1.
   * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
   * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
   * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
   * @return {RGBObject} the interpolated color.
   */
  static mixRgb(rgb0, rgb1, fraction1) {
    if (fraction1 <= 0) return rgb0;
    if (fraction1 >= 1) return rgb1;
    const fraction0 = 1 - fraction1;
    return {
      r: fraction0 * rgb0.r + fraction1 * rgb1.r,
      g: fraction0 * rgb0.g + fraction1 * rgb1.g,
      b: fraction0 * rgb0.b + fraction1 * rgb1.b,
    };
  }

  constructor(color, clear = false) {
    this._clear = clear;
    this._color = color;
    if (typeof color === 'number') {
      this._type = 'decimal';
    } else if (typeof color === 'string' && color[0] === '#') {
      this._type = 'hex';
    } else if (Array.isArray(color)) {
      const [a, b, c] = color;
      if (b <= 1 && c <= 1) {
        this._type = 'hsv';
        this._color = { h: a, s: b, v: c };
      } else {
        this._type = 'rgb';
        this._color = { r: a, g: b, b: c };
      }
      this._clear = clear || color[3] === 0;
    } else if (typeof color.r === 'number') {
      this._type = 'rgb';
    } else if (typeof color.h === 'number') {
      this._type = 'hsv';
    }
  }

  get clear() {
    return this._clear;
  }

  get rgb() {
    if (this._type === 'rgb') return this._color;
    if (this._type === 'decimal') return Color.decimalToRgb(this._color);
    if (this._type === 'hsv') return Color.hsvToRgb(this._color);
    if (this._type === 'hex') return Color.hexToRgb(this._color);
  }

  get hsv() {
    if (this._type === 'hsv') return this._color;
    if (this._type === 'decimal') return Color.rgbToHsv(Color.decimalToRgb(this._color));
    if (this._type === 'rgb') return Color.rgbToHsv(this._color);
    if (this._type === 'hex') return Color.rgbToHsv(Color.hexToRgb(this._color));
  }

  get hex() {
    if (this._type === 'hex') return this._color;
    if (this._type === 'decimal') return Color.decimalToHex(this._color);
    if (this._type === 'rgb') return Color.rgbToHex(this._color);
    if (this._type === 'hsv') return Color.rgbToHex(Color.hsvToRgb(this._color));
  }

  get decimal() {
    if (this._type === 'decimal') this._color;
    if (this._type === 'rgb') return Color.rgbToDecimal(this._color);
    if (this._type === 'hsv') return Color.rgbToDecimal(Color.hsvToRgb(this._color));
    if (this._type === 'hex') return Color.hexToDecimal(this._color);
  }

  toRGBColor() {
    if (this._type === 'rgb') return this;
    return new Color(this.rgb, this.clear);
  }

  toHSVColor() {
    if (this._type === 'hsv') return this;
    return new Color(this.hsv, this.clear);
  }

  toHEXColor() {
    if (this._type === 'hex') return this;
    return new Color(this.hex, this.clear);
  }

  toDecimalColor() {
    if (this._type === 'decimal') return this;
    return new Color(this.decimal, this.clear);
  }

  equals(color) {
    return (
      this.rgb.r === color.rgb.r &&
      this.rgb.g === color.rgb.g &&
      this.rgb.b === color.rgb.b &&
      this.clear === color.clear
    );
  }

  notEquals(color) {
    return !this.equals(color);
  }
}
