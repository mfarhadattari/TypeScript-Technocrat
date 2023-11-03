{
  {
    // ----------- Union Type ----------------

    type Gender = "Male" | "Female";
    type Coupon = 1234 | 5678;
    type FrontendDev =
      | "React Developer"
      | "Angular Developer"
      | "Vue Developer";
    type FullstackDev =
      | "MERN Stack Developer"
      | "MEAN Stack Developer"
      | "MEVN Stack Developer";
    type Developer = FrontendDev | FullstackDev;

    const myGender: Gender = "Male";
    const code: Coupon = 1234;
    const dev: Developer = "MERN Stack Developer";
  }

  {
    //   -------------Intersection Type ----------
    type FrontendDev = {
      skills: string[];
      designation1: "Frontend Developer";
    };
    type BackendDev = {
      skills: string[];
      designation2: "Backend Developer";
    };

    type FullstackDev = FrontendDev & BackendDev;

    const fullstackDev: FullstackDev = {
      skills: [
        "HTML",
        "CSS",
        "JS",
        "React",
        "TailwindCSS",
        "Redux",
        "Node JS",
        "Express JS",
        "MongoDB",
        "Cloud",
      ],
      designation1: "Frontend Developer",
      designation2: "Backend Developer",
    };
    console.log(fullstackDev);
  }
}
