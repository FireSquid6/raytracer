import * as Canvas from "../lib/canvas";
import { test, describe, expect } from "bun:test";

describe("Colors", () => {
  test("color", () => {
    const c = Canvas.color(-0.5, 0.4, 1.7);
    expect(c.r).toEqual(-0.5);
    expect(c.g).toEqual(0.4);
    expect(c.b).toEqual(1.7);
  });

  test("add color", () => {
    const a = Canvas.color(0.9, 0.6, 0.75);
    const b = Canvas.color(0.7, 0.1, 0.25);

    const sum = Canvas.add(a, b);
    expect(sum.r).toBeCloseTo(1.6);
    expect(sum.g).toBeCloseTo(0.7);
    expect(sum.b).toBeCloseTo(1.0);
  });

  test("subtract color", () => {
    const a = Canvas.color(0.9, 0.6, 0.75);
    const b = Canvas.color(0.7, 0.1, 0.25);

    const sum = Canvas.subtract(a, b);
    expect(sum.r).toBeCloseTo(0.2);
    expect(sum.g).toBeCloseTo(0.5);
    expect(sum.b).toBeCloseTo(0.5);
  });

  test("scalar multiply color", () => {
    const a = Canvas.color(0.2, 0.3, 0.4);

    const sum = Canvas.scalarMultiply(a, 2);
    expect(sum.r).toBeCloseTo(0.4);
    expect(sum.g).toBeCloseTo(0.6);
    expect(sum.b).toBeCloseTo(0.8);
  });

  test("schur product color", () => {
    const a = Canvas.color(1, 0.2, 0.4);
    const b = Canvas.color(0.9, 1, 0.1);

    const sum = Canvas.schurProduct(a, b);
    expect(sum.r).toBeCloseTo(0.9);
    expect(sum.g).toBeCloseTo(0.2);
    expect(sum.b).toBeCloseTo(0.04);
  });

  test("color equals", () => {
    const a = Canvas.color(1, 0.2, 0.4);
    const b = Canvas.color(1, 0.2, 0.4);
    const c = Canvas.color(0.9, 1, 0.1);

    expect(Canvas.colorEquals(a, b)).toEqual(true);
    expect(Canvas.colorEquals(a, c)).toEqual(false);
  });
});

describe("Canvas", () => {
  test("create canvas", () => {
    const c = new Canvas.Canvas(10, 20);
    expect(c.width).toEqual(10);
    expect(c.height).toEqual(20);
    expect(c.pixels.length).toEqual(10);
    expect(c.pixels[0].length).toEqual(20);
    expect(c.pixels[0][0]).toEqual(Canvas.color(0, 0, 0));
  });

  test("write pixel to canvas", () => {
    const c = new Canvas.Canvas(10, 20);
    const red = Canvas.color(1, 0, 0);
    c.setPixel(2, 3, red);
    expect(c.pixels[2][3]).toEqual(red);
  });

  test("get pixel from canvas", () => {
    const c = new Canvas.Canvas(10, 20);
    const red = Canvas.color(1, 0, 0);
    c.setPixel(2, 3, red);
    expect(c.getPixel(2, 3)).toEqual(red);
  });
});
