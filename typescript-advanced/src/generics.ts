{
  // ------------------>> Generics ----------------->>

  const numbers: Array<number> = [1, 2, 3, 4, 5];
  const friends: Array<string> = ["Rohim", "Karim", "Sakib"];
  const mentors: Array<{ name: string; age: number }> = [
    { name: "Farhad", age: 19 },
    { name: "Shkib", age: 16 },
  ];

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

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const coupleTuple: GenericTuple<string, string> = ["Mr. X", "Ms Y"];
}
