export const printToFile = (text: string, callback: () => void): void => {
  console.log(text);
  callback();
};

//First way to work with types
export const arrayMutate = (
  numbers: number[],
  mutate: (v: number) => number
): number[] => {
  return numbers.map(mutate);
};

printToFile("Hi", () => {
  console.log("array executed");
});
console.log(arrayMutate([1, 2, 30, 4, 5], (v) => v * 10));

//Second way to work with types. Create a function type
type MutateFunction = (v: number) => number;
export const arrayMutateArr = (
  numbers: number[],
  mutate: MutateFunction
): number[] => {
  return numbers.map(mutate);
};

printToFile("Hi", () => {
  console.log("array executed");
});
console.log(arrayMutateArr([1, 2, 30, 4, 5], (v) => v * 10));

//create create a new type based on previous Mutation Function type
const myNewMutateFunc: MutateFunction = (v: number) => v * 100;

type AdderFunction = (val: number) => number;

export const createAdder = (num: number): AdderFunction => {
  return (val: number) => num + val;
};
const add = createAdder(1);
console.log(add(5));
