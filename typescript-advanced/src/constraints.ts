{
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
}
