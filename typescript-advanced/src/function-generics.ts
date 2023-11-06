{
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
}
