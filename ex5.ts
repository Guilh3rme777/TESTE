type User = {
  name: string;
  city: string;
  address: {
    city: string;
    country: {
      code: string;
    };
  };
};

function groupBy(array: User[], key: string) {
  return array.reduce((acc: any, item: User) => {
    const keys: string[] = key.split(".");

    let value: any = item;

    for (let k of keys) {
      if (value == null) break;
      value = value[k];
    }

    if (!acc[value]) {
      acc[value] = [];
    }

    acc[value].push(item);

    return acc;
  }, {});
}

const users: User[] = [
  {
    name: "Ana",
    city: "SP",
    address: {
      city: "SP",
      country: { code: "BR" },
    },
  },
  {
    name: "Bruno",
    city: "RJ",
    address: {
      city: "RJ",
      country: { code: "BR" },
    },
  },
  {
    name: "Carla",
    city: "SP",
    address: {
      city: "SP",
      country: { code: "US" },
    },
  },
];

console.log("Agrupando por city:");
console.log(groupBy(users, "city"));

console.log("\nAgrupando por address.city:");
console.log(groupBy(users, "address.city"));

console.log("\nAgrupando por address.country.code:");
console.log(groupBy(users, "address.country.code"));