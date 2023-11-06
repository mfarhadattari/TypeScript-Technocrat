{
  // ------------->> keyof operator ------------>>
  // --->> keyof is a keyword in TypeScript which is used to extract the key type from an object type.

  interface Vehicle {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  }

  type anyVehicle = keyof Vehicle;

  const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  let person = {
    name: "Ms X",
    age: 27,
  };

  const res = getProperty(person, "age");
}
