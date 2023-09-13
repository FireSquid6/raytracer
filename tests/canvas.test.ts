import { color } from "../lib/canvas";
import { test, expect } from "bun:test";

test("color", () => {
  const c = color(-0.5, 0.4, 1.7);
  expect(c.r).toEqual(-0.5);
  expect(c.g).toEqual(0.4);
  expect(c.b).toEqual(1.7);
});
