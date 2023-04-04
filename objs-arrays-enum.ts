// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "kyahn",
//   age: 30,
//   hobbies: ["Sports", "Game"],
//   role: [2, "author"],
// };

// // person.role.push("Admin");
// // person.role[1] = 10;

// // person.role = [0, "admin", "user"];
// console.log(person);

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "kyahn",
  age: 30,
  hobbies: ["Sports", "Game"],
  role: Role.ADMIN,
};

let favoriteActivities: any[];
favoriteActivities = ["1", 1];

console.log(person);

if (person.role === Role.ADMIN) {
  console.log(Role.ADMIN);
}
