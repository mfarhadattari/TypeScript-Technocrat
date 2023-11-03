{
  // ------------> type alias ------------>
  //   object type
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

  //   function type
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
  console.log(add(4, 5));
}
