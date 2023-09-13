export interface Color {
  r: number;
  g: number;
  b: number;
}

export function color(r: number, g: number, b: number): Color {
  return { r, g, b };
}
