import { test, expect, describe } from "bun:test";
import * as Tuple from "../lib/tuple";

test("tuple", () => {
  const t = Tuple.make(1, 2, 3, 4);
  expect(t.x).toEqual(1);
  expect(t.y).toEqual(2);
  expect(t.z).toEqual(3);
  expect(t.w).toEqual(4);
});

test("point", () => {
  const p = Tuple.point(1, 2, 3);
  expect(p.x).toEqual(1);
  expect(p.y).toEqual(2);
  expect(p.z).toEqual(3);
  expect(p.w).toEqual(1);
});

test("vector", () => {
  const p = Tuple.vector(1, 2, 3);
  expect(p.x).toEqual(1);
  expect(p.y).toEqual(2);
  expect(p.z).toEqual(3);
  expect(p.w).toEqual(0);
});

test("add tuple", () => {
  const a = Tuple.make(1, 2, 3, 0);
  const b = Tuple.make(1, 2, 3, 1);

  const sum = Tuple.add(a, b);
  expect(sum.x).toEqual(2);
  expect(sum.y).toEqual(4);
  expect(sum.z).toEqual(6);
  expect(sum.w).toEqual(1);
});

test("subtract tuple", () => {
  const a = Tuple.make(1, 2, 3, 1);
  const b = Tuple.make(1, 2, 3, 1);

  const sum = Tuple.subtract(a, b);
  expect(sum.x).toEqual(0);
  expect(sum.y).toEqual(0);
  expect(sum.z).toEqual(0);
  expect(sum.w).toEqual(0);
});

test("invert tuple", () => {
  const a = Tuple.make(1, 2, 3, 1);
  const b = Tuple.invert(a);
  expect(b.x).toEqual(-1);
  expect(b.y).toEqual(-2);
  expect(b.z).toEqual(-3);
  expect(b.w).toEqual(-1);
});

test("scalar multiply tuple", () => {
  const a = Tuple.make(1, 2, 3, 1);
  const b = 2;
  const c = Tuple.scalarMultiply(a, b);
  expect(c.x).toEqual(2);
  expect(c.y).toEqual(4);
  expect(c.z).toEqual(6);
  expect(c.w).toEqual(2);
});

test("scalar divide tuple", () => {
  const a = Tuple.make(1, 2, 3, 1);
  const b = 2;
  const c = Tuple.scalarDivide(a, b);
  expect(c.x).toEqual(0.5);
  expect(c.y).toEqual(1);
  expect(c.z).toEqual(1.5);
  expect(c.w).toEqual(0.5);
});

describe("magnitude of vector", () => {
  test("returns the magnitude", () => {
    const a = Tuple.vector(1, 2, 3);
    const b = Tuple.magnitude(a);
    expect(b).toEqual(Math.sqrt(14));
  });

  test("throws an error if the tuple is a point", () => {
    const a = Tuple.point(1, 2, 3);
    expect(() => Tuple.magnitude(a)).toThrow(
      "cannot calculate magnitude of a point"
    );
  });
});

test("vector is normalized", () => {
  const a = Tuple.vector(1, 2, 3);
  const b = Tuple.normalized(a);
  expect(Tuple.magnitude(b)).toEqual(1);
});

describe("dot product", () => {
  test("returns the dot product", () => {
    const a = Tuple.vector(1, 2, 3);
    const b = Tuple.vector(2, 3, 4);

    const c = Tuple.dotProduct(a, b);
    expect(c).toEqual(20);
  });

  test("throws an error if the tuple is a point", () => {
    const a = Tuple.point(1, 2, 3);
    const b = Tuple.vector(2, 3, 4);

    expect(() => Tuple.dotProduct(a, b)).toThrow(
      "cannot calculate dot product of a point"
    );
  });
});

describe("cross product", () => {
  test("returns the cross product", () => {
    const a = Tuple.vector(1, 2, 3);
    const b = Tuple.vector(2, 3, 4);

    const c = Tuple.crossProduct(a, b);
    expect(c).toEqual(Tuple.vector(-1, 2, -1));
  });

  test("throws an error if the tuple is a point", () => {
    const a = Tuple.point(1, 2, 3);
    const b = Tuple.vector(2, 3, 4);

    expect(() => Tuple.crossProduct(a, b)).toThrow(
      "cannot calculate cross product of a point"
    );
  });
});
