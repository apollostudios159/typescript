function addNumbers(a: number, b: number): number {
  return a + b;
}

export const addStrings = (a: string, b: string): string => {
  return a + b;
};

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

export const fetchDate = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

export const introduction = (salutation: string, ...names: string[]) => {
  return `${salutation} ${names.join(" ")}`;
};

export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}

printFormat("Hi", 5);
console.log(fetchDate(`https://swapi.dev/api/people/1`));
console.log(introduction("Sam", "Wit", "Willy", "George"));
console.log(getName({ first: "hi", last: "how" }));
