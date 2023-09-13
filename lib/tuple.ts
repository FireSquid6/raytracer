export function tuple(x: number, y: number, z: number, w: number) {
  return {
    x: x,
    y: y,
    z: z,
    w: w,
  };
}

export function point(x: number, y: number, z: number) {
  return tuple(x, y, z, 1);
}

export function vector(x: number, y: number, z: number) {
  return tuple(x, y, z, 0);
}
