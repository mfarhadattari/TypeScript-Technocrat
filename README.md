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

## Type Casting

- Type Casting is the process of overriding a type.

```ts
// type casting using as
let x: any;
x = "hello";

console.log((x as string).toUpperCase());

let age: any;
age = 19;
console.log((age as number).toFixed(2));

const kmTom = (km: string | number): number | undefined => {
  if (typeof km === "string") {
    return parseFloat(km) * 1000;
  } else if (typeof km === "number") {
    return km * 1000;
  }
};

const meter = kmTom(5.7) as number;
console.log(meter);
```

## Interfaces

- interface: type defining for non-primitive

```ts
{
  interface Rectangle {
    height: number;
    width: number;
  }

  const rectangular: Rectangle = {
    height: 500,
    width: 500,
  };

  console.log(rectangular);

```

```ts
//   extends interface
interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};

console.log(coloredRectangle);
```

```ts
//   interface in array
interface NumbersArray {
  [index: number]: number;
}
const numbers: NumbersArray = [1, 2, 3, 4, 5];
console.log(numbers);
```

```ts
//   interface in function
interface Add {
  (num1: number, num2: number): number;
}

const add: Add = (num1, num2) => num1 + num2;
console.log(add(13, 45));
}
```

## Generics

```ts
const numbers: Array<number> = [1, 2, 3, 4, 5];
const friends: Array<string> = ["Rohim", "Karim", "Sakib"];
const mentors: Array<{ name: string; age: number }> = [
  { name: "Farhad", age: 19 },
  { name: "Shkib", age: 16 },
];
```

```ts
// dynamic type generics
type GenericArray<T> = Array<T>;

const marks: GenericArray<number> = [45, 67, 89, 60];
const subjects: GenericArray<string> = ["Math", "Physics", "Chemistry"];

interface User {
  id: number;
  name: string;
  role: string;
}

const users: GenericArray<User> = [
  { id: 1, name: "Farhad", role: "Admin" },
  { id: 2, name: "Shkib", role: "Gest" },
];
```

```ts
// generic tuple
type GenericTuple<X, Y> = [X, Y];
const coupleTuple: GenericTuple<string, string> = ["Mr. X", "Ms Y"];
```

```ts
// ---------------> Interface With Generic ------------------->
interface Developer<TSmartWatch, TBike = null> {
  name: string;
  age: number;
  isMarried: boolean;
  gender: "Male" | "Female";
  computer: {
    brand: string;
    model: string;
    info: string;
    releaseYear: number;
  };
  smartWatch: TSmartWatch;
  bike?: TBike;
}

interface EmilabWatch {
  brand: "Emilab";
  model: string;
  display: string;
}

interface AppleWatch {
  brand: "Apple";
  model: string;
  heartTrack: boolean;
  sleepTrack: boolean;
}

interface Bike {
  brand: string;
  model: string;
}

const poorDeveloper: Developer<EmilabWatch> = {
  name: "Mohammad Farhad",
  age: 19,
  isMarried: false,
  gender: "Male",
  computer: {
    brand: "ASUS",
    model: "ASUS62h",
    info: "8GB RAM & 256SSD",
    releaseYear: 2020,
  },
  smartWatch: {
    brand: "Emilab",
    model: "kw66",
    display: "OLED",
  },
};

const reachDeveloper: Developer<AppleWatch, Bike> = {
  name: "Mohammad Shakib",
  age: 25,
  isMarried: true,
  gender: "Male",
  computer: {
    brand: "Macbook",
    model: "Macbook PRO",
    info: "8GB RAM & 256SSD",
    releaseYear: 2022,
  },
  smartWatch: {
    brand: "Apple",
    model: "apple22",
    heartTrack: true,
    sleepTrack: true,
  },
  bike: {
    brand: "YAMAHA",
    model: "RDCJ20",
  },
};
```

```ts
// <<------------------->> Function With Generics <<----------------->>
const createArray = (pram: string): string[] => {
  return [pram];
};

const res1 = createArray("Bangladesh");

const createArrayWithGeneric = <T>(pram: T): T[] => {
  return [pram];
};

const res2 = createArrayWithGeneric<string>("Bangladesh");

const createTupleWithGeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};

const res3 = createTupleWithGeneric<string, { name: string }>(
  "Mohammad Farhad",
  {
    name: "Mohammad Farhad",
  }
);

const addCourseToStudent = <T>(student: T) => {
  const course = "Next Level Web Dev";

  return {
    ...student,
    course,
  };
};

const student1 = addCourseToStudent({
  name: "Mr X",
  email: "x@abc.com",
  devType: "NLWD",
});

const student2 = addCourseToStudent({
  name: "Mr Y",
  email: "y@abc.com",
  watch: "APPLE Watch",
});
```

```ts
// -------------->> Constraints In Generics --------------->>
const addCourseToStudent = <
  T extends {
    id: number;
    name: string;
    email: string;
  }
>(
  student: T
) => {
  const course = "Next Level Web Dev";

  return {
    ...student,
    course,
  };
};

const student1 = addCourseToStudent({
  id: 5,
  name: "Mr X",
  email: "x@abc.com",
  devType: "NLWD",
});

const student2 = addCourseToStudent({
  id: 7,
  name: "Mr Y",
  email: "y@abc.com",
  watch: "APPLE Watch",
});
```

## Asynchronous TypeScript

```ts
// basic promise
const createPromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "something";
    if (data) {
      resolve(data);
    } else {
      reject("Something is wrong");
    }
  });
};

const runPromise = async () => {
  const data: string = await createPromise();
  return data;
};

runPromise();
```

```ts
interface ToDo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

// fetching
const getToDo = async (): Promise<ToDo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
  return data;
};

getToDo();
```

## Conditional Type

```ts
type A = null;
type B = undefined;

type C = A extends null ? true : B extends undefined ? true : any;
```

```ts
interface Vehicle {
  bike: string;
  car: string;
  ship: string;
  plane: string;
}

type CheckVehicle<T> = T extends keyof Vehicle ? true : false;

type HasPlane = CheckVehicle<"plane">;
type HasBus = CheckVehicle<"bus">;
```

## Mapped Type

```ts
type AreaNumber = {
  height: number;
  width: number;
};

type AreaString = {
  [key in keyof AreaNumber]: string;
};
```

```ts
type DynamicArea<T> = {
  [key in keyof T]: T[key];
};

const area1: DynamicArea<{ height: string; width: number }> = {
  height: "100",
  width: 50,
};
```

## Utility Type

```ts
interface Person {
  name: string;
  age: number;
  email?: string;
  mobile?: string;
}

// ---------->>  Pick Type <<-----------
type NameAge = Pick<Person, "name" | "age">;

// ---------->>   Omit Type <<-----------
type ContractInfo = Omit<Person, "name" | "age">;

// ---------->>  Required Type <<-----------
type PersonRequired = Required<Person>;

// ---------->>  Partial Type <<-----------
type PersonPartial = Partial<Person>;

// ---------->>  Readonly Type <<-----------
type PersonReadonly = Readonly<Person>;

// ---------->>  Record Type <<-----------
type EmptyObj = Record<string, unknown>;
```
