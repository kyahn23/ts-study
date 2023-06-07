// const add = (a: number, b: number) => {
//   return a + b;
// };

// console.log(add(2, 3));

const func = (arr: any[]) => {
  return arr.reduce((acm, cur) => {
    if (typeof acm === typeof cur) {
      return acm + cur;
    } else {
      return null;
    }
  });
};

console.log(func([1, 2]));

console.log(func(["Hello", "World"]));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

const hobbies = ["Sports", "Cooking"];

console.log([...hobbies, "Game"]);
console.log(["Game", ...hobbies]);

const person = {
  name: "kyahn",
  age: 30,
};

const copiedPerson = { ...person, height: 180 };

console.log(copiedPerson);

// 여러값을 매개변수로 받을 경우
const add = (...numbers: number[]) => {
  // const add = (...numbers: [number,number,number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add(1.1, 2, 3, 4, 5);

console.log(addNumbers);
