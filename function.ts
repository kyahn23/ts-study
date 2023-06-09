function add2(n1: number, n2: number) {
  return n1 + n2;
}

function printResult2(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number) => number;

combineValues = add2;
// combineValues = printResult;
// combineValues = 5; // runtime error

console.log(combineValues(5, 10));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
