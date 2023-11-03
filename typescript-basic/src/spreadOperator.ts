{
  // -----> spread operator ----->
  const numbers: number[] = [10, 24, 46];
  console.log(Math.max(...numbers));

  const friends1: string[] = ["Rohim", "karim", "Akib"];
  const friends2: string[] = ["Shakib", "Sultan", "Firoz"];
  const allFriends = [...friends1, ...friends2];
  console.log(allFriends);

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
}
