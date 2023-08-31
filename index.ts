//Produce the following using filter. They have to be type safe
//For Each
//Filter
//Map

//ForEach
function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((acc, val) => {
    forEachFunc(val);
    return undefined;
  }, undefined);
}
myForEach(["a", "b", "c"], (v) => console.log(`forEach ${v}`));

//Filter
function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), [] as T[]);
}
console.log(myFilter([1, 2, 3, 4, 5, 6], (v) => v % 2 === 0));
