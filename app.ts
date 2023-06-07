const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(2, 3));

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
