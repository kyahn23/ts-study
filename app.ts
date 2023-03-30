const person: {
  name: string;
  age: number;
} = {
  name: "kyahn",
  age: 30,
};

console.log(person.name);

const product: {
  id: string;
  price: number;
  tag: string[];
  detail: {
    title: string;
    description: string;
  };
} = {
  id: "123",
  price: 3000,
  tag: ["useful", "strong"],
  detail: {
    title: "hi",
    description: "hello",
  },
};

console.log(product);
