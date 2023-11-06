{
  // <<-------------->> Type Casting : Type Casting is the process of overriding a type. <<--------------->>
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
}
