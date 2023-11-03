{
  // implicit type object
  const name = {
    fName: "Mohammad",
    mName: "Farhad",
    lName: "Attari",
  };
  console.log(name);

  // explicit type object
  const name2: { fName: string; mName: string; lName: string } = {
    fName: "Mohammad",
    mName: "Farhad",
    lName: "Attari",
  };
  console.log(name2);

  // optional property
  let user: { name: string; title?: string; isMarried: boolean } = {
    name: "Mohammad Farhad",
    isMarried: false,
  };
  console.log(user);

  // literal type
  let hero: { name: string; company: "Programming Hero"; title: string } = {
    name: "Mohammad Farhad",
    company: "Programming Hero",
    title: "Student",
  };
  console.log(hero);

  // read only
  let hero2: { name: string; readonly company: String; title: string } = {
    name: "Mohammad Farhad Attari",
    company: "Programming Hero",
    title: "Student",
  };
  console.log(hero2);
}
