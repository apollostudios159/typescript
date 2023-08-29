import houses from "./houses";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID {
  planets: string | string[];
}

function findHouses(
  input: string | House[],
  filter: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;
  return (filter ? houses.filter(filter) : houses).map((house) => {
    return {
      id: houses.indexOf(house),
      ...house,
    };
  });
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

// console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
