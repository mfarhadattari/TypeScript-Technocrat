{
  //---------------->> interface: type defining for non-primitive --------------->>
  interface Rectangle {
    height: number;
    width: number;
  }

  const rectangular: Rectangle = {
    height: 500,
    width: 500,
  };

  console.log(rectangular);

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

  //   interface in array
  interface NumbersArray {
    [index: number]: number;
  }
  const numbers: NumbersArray = [1, 2, 3, 4, 5];
  console.log(numbers);

  //   interface in function
  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = (num1, num2) => num1 + num2;
  console.log(add(13, 45));
}
