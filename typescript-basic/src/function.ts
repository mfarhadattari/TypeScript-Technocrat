{
  // ---------> Normal function --------->
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  // console.log(add(10, 5));

  // ------------->   arrow function -------------->
  const add2 = (num1: number, num2: number): number => num1 + num2;
  // console.log(add2(20, 5));

  // -------------->   multiline arrow function ----------->
  const add3 = (num1: number, num2: number): number => {
    return num1 + num2;
  };
  // console.log(add3(10, 40));

  // ---------------> Default Parameter Function ------------->
  const add4 = (num1 = 0, num2 = 0): number => {
    return num1 + num2;
  };
  // console.log(add4(5, 3));

  // ---------------------> Call Back Function ------------------>
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sqrNumbers = numbers.map(function (num: number): number {
    return num * num;
  });
  console.log(sqrNumbers);
  const cubeNumbers = numbers.map((num: number): number => num * num * num);
  console.log(cubeNumbers);

  // -------------------> Indefinite Number of Parameter ----------->
  const sum = (...numbers: number[]): number => {
    const sum = numbers.reduce((number, pre) => number + pre, 0);
    return sum;
  };

  // console.log(sum(10, 10, 78));

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

  // user.greeting();
  // console.log(user.calculateAge(2023));
}
