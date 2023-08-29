interface Coordinate {
  x: number;
  y: number;
}

//Avoid and b overloading implementation in typescript.
//a
function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return { ...obj };
}
//b
function parseCoordinatesFromNumbers(x: number, y: number): Coordinate {
  return { x, y };
}

//Function overloading in Javascript/TypeScript. This is proper implementation
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
//unknown is like any, but you have to cast it before you use it. It is like a safe "any"
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "object") {
    coord = { ...(arg1 as Coordinate) };
  } else if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 60 }));
console.log(parseCoordinate("x:12,y:22"));
