type User = {
  name: string;
  age: number;
  active: boolean;
};

const users: User[] = [
  { name: 'Ana', age: 17, active: true },
  { name: 'Bruno', age: 25, active: false },
  { name: 'Carla', age: 22, active: true },
  { name: 'Diego', age: 19, active: true },
  { name: 'Eva', age: 15, active: true },
];

const Maior = users.filter(
  (u: User) => u.age >= 18
);

const AtivoeMaior = Maior.filter(
  (n: User) => n.active
);

AtivoeMaior.sort(
  (a: User, b: User) =>
    a.name.localeCompare(b.name)
);

console.log(AtivoeMaior);