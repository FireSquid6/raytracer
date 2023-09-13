import { test, expect } from "bun:test";
import { tuple, point, vector, add, subtract } from "../lib/tuple";

test("tuple", () => {
  const t = tuple(1, 2, 3, 4);
  expect(t.x).toEqual(1);
  expect(t.y).toEqual(2);
  expect(t.z).toEqual(3);
  expect(t.w).toEqual(4);
});

test("point", () => {
  const p = point(1, 2, 3);
  expect(p.x).toEqual(1);
  expect(p.y).toEqual(2);
  expect(p.z).toEqual(3);
  expect(p.w).toEqual(1);
});

test("vector", () => {
  const p = vector(1, 2, 3);
  expect(p.x).toEqual(1);
  expect(p.y).toEqual(2);
  expect(p.z).toEqual(3);
  expect(p.w).toEqual(0);
});

test("add tuple", () => {
  const a = tuple(1, 2, 3, 0);
  const b = tuple(1, 2, 3, 1);

  const sum = add(a, b);
  expect(sum.x).toEqual(2);
  expect(sum.y).toEqual(4);
  expect(sum.z).toEqual(6);
  expect(sum.w).toEqual(1);
});

test("subtract tuple", () => {
  const a = tuple(1, 2, 3, 1);
  const b = tuple(1, 2, 3, 1);

  const sum = subtract(a, b);
  expect(sum.x).toEqual(0);
  expect(sum.y).toEqual(0);
  expect(sum.z).toEqual(0);
  expect(sum.w).toEqual(0);
});
