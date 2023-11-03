# TypeScript Technocrat

```
/* ----------------- Author ------------------- */

Name : Mohammad Farhad
Email : mfarhad.dev@gmail.com
Website: https://mfarhad-dev.vercel.app

/* ---------------------@--------------------- */
```

## About TypeScript

```
- TypeScript is a Syntactic Superset of JavaScript.
- TypeScript is an Object Oriented Programming Language that built on top of JavaScript with extra features.
- TypeScript is a strongly typed programming language.
- TypeScript Code Transpiled into JavaScript.
```

```
# Benefits of TypeScript
1. Support older browser by transpiled into any version of JavaScript.
2. Type Safety: Implicitly or Explicitly
3. Increase productivity
4. Less bug and less testing
```

## TypeScript Installation:

```
1. Install Node.js
2. Install TypeScript: npm i -g typescript
```

## Commands:

```
tsc fileName.ts
tsc --init
tsc -w
ts-node-dev --respawn --transpile-only file
```

## Data Type:

```
1. Primitive Data Type
- boolean
- string
- number
- bigNumber
- symbol
- undefined
- null
- void
- never
- unknown
```

```
1. Non-Primitive Data Type
- array
- tuples
- object
- enum
```

## Type Assignment

When creating a variable, there are two main ways TypeScript assigns a type:

```
- Implicit : TypeScript infer data type
- Explicit : Writing out the data type
```

### Implicit

```ts
let myName = "Mohammad Farhad";
let age = 19;
let isMarried = false;
let a = undefined;
let b = null;
```

### Explicit

```ts
let name2: string = "Mohammad Farhad";
let age2: number = 50;
let isAdult: boolean = true;
let u: undefined = undefined;
let n: null = null;
```

## Condition

```ts
const age = 18;
if (age < 18) {
  console.log("You are a Child...");
} else if (age >= 18 && age <= 30) {
  console.log("You are adult...");
} else {
  console.log("You are old man...");
}
```

## Looping

```ts
//-------------->> for loop ------------->>
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

```ts
// ----------->> while loop ---------->>
let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}
```

```ts
// ---------------->> Do While Loop ------------>>
let n = 100;
do {
  console.log(n);
  n += 100;
} while (n <= 1000);
```

## Array

```ts
// -------------->> Implicit Array -------------->>
let friends = ["Rohim", "Korim", "Sabbir"];
let mixedArray = ["Hello", true, 12];
console.log(friends, mixedArray);
```

```ts
// -------------->> Explicit Array -------------->>
let friends2: string[] = ["Rakib", "Sakib", "Akib"];
let mixedArray2: (string | number | boolean)[] = ["World", false, 100];
console.log(friends2, mixedArray2);
```

## Tuples

```ts
let tuples: [string, number, boolean] = ["hello", 50, false];
console.log(tuples);

// -------------->>   readonly tuples -------------->>
let tuples2: readonly [string, number, boolean] = ["gello", 100, true];
console.log(tuples2);
```

## Object

```ts
// -------------->> implicit type object -------------->>
const name = {
  fName: "Mohammad",
  mName: "Farhad",
  lName: "Attari",
};
console.log(name);

// -------------->> explicit type object -------------->>
const name2: { fName: string; mName: string; lName: string } = {
  fName: "Mohammad",
  mName: "Farhad",
  lName: "Attari",
};
console.log(name2);

// -------------->> optional property -------------->>
let user: { name: string; title?: string; isMarried: boolean } = {
  name: "Mohammad Farhad",
  isMarried: false,
};
console.log(user);

// -------------->> literal type -------------->>
let hero: { name: string; company: "Programming Hero"; title: string } = {
  name: "Mohammad Farhad",
  company: "Programming Hero",
  title: "Student",
};
console.log(hero);

// -------------->> read only property -------------->>
let hero2: { name: string; readonly company: String; title: string } = {
  name: "Mohammad Farhad Attari",
  company: "Programming Hero",
  title: "Student",
};
console.log(hero2);
```

## Function

```ts
// ---------> Normal function --------->
function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add(10, 5));
```

```ts
// ------------->   arrow function -------------->
const add2 = (num1: number, num2: number): number => num1 + num2;
console.log(add2(20, 5));
```

```ts
// -------------->   multiline arrow function ----------->
const add3 = (num1: number, num2: number): number => {
  return num1 + num2;
};
console.log(add3(10, 40));
```

```ts
// ---------------> Default Parameter Function ------------->
const add4 = (num1 = 0, num2 = 0): number => {
  return num1 + num2;
};
console.log(add4(5, 3));
```

```ts
// ---------------------> Call Back Function ------------------>
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sqrNumbers = numbers.map(function (num: number): number {
  return num * num;
});
const cubeNumbers = numbers.map((num: number): number => num * num * num);
console.log(sqrNumbers);
console.log(cubeNumbers);
```

```ts
// -------------------> Indefinite Number of Parameter ----------->
const sum = (...numbers: number[]): number => {
  const sum = numbers.reduce((number, pre) => number + pre, 0);
  return sum;
};

console.log(sum(10, 10, 78));
```

```ts
// ------------> method : function in object ------------>
const user = {
  name: "Mohammad Farhad",
  birthYear: 2005,
  greeting(): void {
    console.log(`Hello! ${this.name}.`);
  },
  calculateAge(year: number): number {
    return year - this.birthYear;
  },
};

user.greeting();
console.log(user.calculateAge(2023));
```

## Destructuring

```ts
// ----------->>  destructuring array: access by sequence ----------->>
const numbers = [1, 2, 3, 4, 5];
const [, second, , ...rest] = numbers;
console.log(second, rest);
```

```ts
// ----------->> destructuring object : access by property name ----------->>
const user = {
  name: {
    firstName: "Mohammad",
    lastName: "Farhad",
  },
  age: 19,
  isMarried: false,
};

const {
  name: { firstName, lastName },
  age,
  isMarried: married,
} = user;
console.log(
  `Hello ! ${firstName} ${lastName}. Your are is ${age} year old. You are ${
    married ? "Married" : "Single"
  }.`
);
```

## Spread Operator

```ts
// ----------------->> Spread Operator in array ------------>>
const numbers: number[] = [10, 24, 46];
console.log(Math.max(...numbers));

const friends1: string[] = ["Rohim", "karim", "Akib"];
const friends2: string[] = ["Shakib", "Sultan", "Firoz"];
const allFriends = [...friends1, ...friends2];
console.log(allFriends);
```

```ts
// ----------------->> spread operator in object ----------------->>
const personalInfo = {
  name: "Mohammad Farhad",
  mobile: "01568306714",
  email: "mfarhad-dev@gmail.com",
  location: "Chattogram Bangladesh",
};

const academicInfo = {
  roll: 685931,
  session: "21-22",
  department: "CST",
  institute: "Chattogram Polytechnic Institute",
};

const student = {
  ...personalInfo,
  ...academicInfo,
};

console.log(student);
```

## Type alias

```ts
// -------->  object type -------->
type User = {
  id: string;
  name: string;
  age: number;
  isAdmin: boolean;
};

const user1: User = {
  id: "73471o38",
  name: "Mohammad Farhad",
  age: 19,
  isAdmin: false,
};

const user2: User = {
  id: "7523w8o",
  name: "Mohammad Rohim",
  age: 15,
  isAdmin: true,
};

console.log(user1, user2);
```

```ts
// ---------->>   function type ---------->>
type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;
console.log(add(4, 5));
```

## Union Type

```ts
type Gender = "Male" | "Female";
type Coupon = 1234 | 5678;
type FrontendDev = "React Developer" | "Angular Developer" | "Vue Developer";
type FullstackDev =
  | "MERN Stack Developer"
  | "MEAN Stack Developer"
  | "MEVN Stack Developer";
type Developer = FrontendDev | FullstackDev;

const myGender: Gender = "Male";
const code: Coupon = 1234;
const dev: Developer = "MERN Stack Developer";
```

## Intersection Type

```ts
type FrontendDev = {
  skills: string[];
  designation1: "Frontend Developer";
};
type BackendDev = {
  skills: string[];
  designation2: "Backend Developer";
};

type FullstackDev = FrontendDev & BackendDev;

const fullstackDev: FullstackDev = {
  skills: [
    "HTML",
    "CSS",
    "JS",
    "React",
    "TailwindCSS",
    "Redux",
    "Node JS",
    "Express JS",
    "MongoDB",
    "Cloud",
  ],
  designation1: "Frontend Developer",
  designation2: "Backend Developer",
};
console.log(fullstackDev);
```

## Nullable type

```ts
// -------->> null type --------->>
const searchName = (name: string | null) => {
  if (name) {
    console.log("Searching Name...");
  } else {
    console.log("Nothing to Search...");
  }
};
searchName("Hello");
searchName(null);
```

## Unknown type

```ts
// ------->>  unknown type ---------->>
const convertToMeterPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    const result = (value * 1000) / 3600;
    console.log(`Result is: ${result.toFixed(2)} ms^-1`);
  } else if (typeof value === "string") {
    const numberValue = value.split(" ")[0];
    const result = (parseFloat(numberValue) * 1000) / 3600;
    console.log(`Result is: ${result.toFixed(2)} ms^-1`);
  } else {
    console.log("Invalid Input...");
  }
};
convertToMeterPerSecond("29 kmh^-1");
```

## Never type

```ts
// -------->> never type ---------->
const throwError = (message: string): never => {
  throw new Error(message);
};
throwError("This is an Error...");
```

## Nullish Coalescence Operator

```ts
/* ------> Nullish Coalescence Operator: 
  default value if null or undefined  ------------> */
const isAuthenticated = null;
const user = isAuthenticated ?? "Gest";
console.log({ user });

const isMarried = undefined;
const maritalStatus = isMarried ?? "Unmarried";
console.log({ maritalStatus });
```
