{
  // ------------>> Inheritance <<-------------
  class People {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    sleep(sleepHour: number) {
      console.log(`${this.name} sleep for ${sleepHour} hour.`);
    }
  }

  class Student extends People {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
    study(studyTime: number) {
      console.log(`${this.name} study ${studyTime} hour every day.`);
    }
  }

  const student = new Student("Farhad Student", 19, "Chattogram");

  class Teacher extends People {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numOfClass: number) {
      console.log(`${this.name} take ${numOfClass} class everyday..`);
    }
  }
}
