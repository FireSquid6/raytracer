import { Tuple } from "./tuple";

interface Ray {
  origin: Tuple;
  direction: Tuple;
}

export function ray(origin: Tuple, direction: Tuple): Ray {
  return { origin, direction };
}
