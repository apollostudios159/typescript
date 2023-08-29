function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [str1get, str1set] = simpleState(10);
console.log(str1get());
str1set(20);
console.log(str1get());

const [str2get, str2set] = simpleState<string | null>(null);
console.log(str2get());
str2set("james");
console.log(str2get());

interface Rank<T> {
  item: T;
  rank: number;
}

function ranker<T>(items: T[], rank: (v: T) => number): T[] {
  const ranks: Rank<T>[] = items.map((item) => {
    return {
      item,
      rank: rank(item),
    };
  });
  console.log(ranks);

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbasaur",
    hp: 20,
  },
  {
    name: "Megaasaur",
    hp: 5,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
