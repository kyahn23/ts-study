type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";
// type alias

function combine(
  input1: Combinable,
  input2: Combinable,
  // resultConvserion: string
  resultConvserion: ConversionDescriptor
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConvserion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (resultConvserion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }

  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("ky", "ahn", "as-text");
console.log(combinedNames);

type User = { name: string; age: number };
const u1: User = { name: "kyahn", age: 35 };

function test1(user: User) {
  console.log(`Hi, I'm ` + user.name, `I'm ` + user.age + ` years old`);
}

test1({ name: "kevin", age: 30 });
