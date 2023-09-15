export interface Color {
  r: number;
  g: number;
  b: number;
}

export function color(r: number, g: number, b: number): Color {
  return { r, g, b };
}

export function add(a: Color, b: Color) {
  return color(a.r + b.r, a.g + b.g, a.b + b.b);
}

export function subtract(a: Color, b: Color) {
  return color(a.r - b.r, a.g - b.g, a.b - b.b);
}

export function scalarMultiply(a: Color, b: number) {
  return color(a.r * b, a.g * b, a.b * b);
}

export function schurProduct(a: Color, b: Color) {
  return color(a.r * b.r, a.g * b.g, a.b * b.b);
}

export function colorEquals(a: Color, b: Color) {
  return a.r === b.r && a.g === b.g && a.b === b.b;
}

export class Canvas {
  width = 0;
  height = 0;
  pixels: Color[][] = [];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    for (let i = 0; i < width; i++) {
      this.pixels[i] = [];
      for (let j = 0; j < height; j++) {
        this.pixels[i][j] = color(0, 0, 0);
      }
    }
  }

  setPixel(x: number, y: number, color: Color) {
    this.pixels[x][y] = color;
  }

  getPixel(x: number, y: number) {
    return this.pixels[x][y];
  }

  toPPM() {
    let ppm = `P3\n${this.width} ${this.height}\n255\n`;

    for (let j = 0; j < this.height; j++) {
      let line = "";
      for (let i = 0; i < this.width; i++) {
        const pixel = this.pixels[i][j];
        const r = Math.round(pixel.r * 255);
        const g = Math.round(pixel.g * 255);
        const b = Math.round(pixel.b * 255);
        line += `${r} ${g} ${b} `;
      }
      ppm += line + "\n";
    }

    return ppm;
  }

  toPng() {
    // todo
  }

  toJpeg() {
    // todo
  }
}
