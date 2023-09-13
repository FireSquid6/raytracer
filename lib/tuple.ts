export interface Tuple {
  x: number;
  y: number;
  z: number;
  w: number;
}

export function tuple(x: number, y: number, z: number, w: number): Tuple {
  return {
    x: x,
    y: y,
    z: z,
    w: w,
  };
}

export function point(x: number, y: number, z: number): Tuple {
  return tuple(x, y, z, 1);
}

export function vector(x: number, y: number, z: number): Tuple {
  return tuple(x, y, z, 0);
}

export function add(a: Tuple, b: Tuple) {
  return tuple(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
}

export function subtract(a: Tuple, b: Tuple) {
  return tuple(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
}
