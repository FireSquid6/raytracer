import { test, expect } from "bun:test";
import { tuple, point, vector } from "../lib/tuple";

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
