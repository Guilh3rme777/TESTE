type User = {
  name: string;
  price: number;
};

const users: User[] = [
  { name: 'Ana', price: 100 },
  { name: 'Bruno', price: 200 },
  { name: 'Carla', price: 300 },
  { name: 'Diego', price: 400 },
  { name: 'Eva', price: 500 },
];

const soma: number = users.reduce(
  (acc, user) => {
    return acc + user.price;
  },
  0
);

console.log(soma);

const quantidade: number = users.length;

console.log(soma / quantidade);

const maisCaro: User = users.reduce(
  (maior, user) => {
    return user.price > maior.price
      ? user
      : maior;
  },
  users[0]
);

console.log(maisCaro);

const comDesconto: User[] = users.map(user => {
  return {
    name: user.name,
    price: user.price * 0.9
  };
});

console.log(comDesconto);