export interface Tuple {
  x: number;
  y: number;
  z: number;
  w: number;
}

export const ZERO = tuple(0, 0, 0, 0);

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

export function invert(a: Tuple) {
  return tuple(-a.x, -a.y, -a.z, -a.w);
}

export function scalarMultiply(a: Tuple, b: number) {
  return tuple(a.x * b, a.y * b, a.z * b, a.w * b);
}

export function scalarDivide(a: Tuple, b: number) {
  return tuple(a.x / b, a.y / b, a.z / b, a.w / b);
}

export function magnitude(a: Tuple) {
  if (a.w === 1) {
    throw "cannot calculate magnitude of a point";
  }

  return Math.sqrt(a.x ** 2 + a.y ** 2 + a.z ** 2);
}

export function normalized(a: Tuple) {
  return scalarDivide(a, magnitude(a));
}

export function dotProduct(a: Tuple, b: Tuple) {
  if (a.w === 1 || b.w === 1) {
    throw "cannot calculate dot product of a point";
  }

  return a.x * b.x + a.y * b.y + a.z * b.z;
}

export function crossProduct(a: Tuple, b: Tuple) {
  if (a.w === 1 || b.w === 1) {
    throw "cannot calculate cross product of a point";
  }

  return vector(
    a.y * b.z - a.z * b.y,
    a.z * b.x - a.x * b.z,
    a.x * b.y - a.y * b.x
  );
}
