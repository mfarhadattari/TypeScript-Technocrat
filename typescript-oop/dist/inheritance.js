"use strict";
{
    // ------------>> Inheritance <<-------------
    class People {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        sleep(sleepHour) {
            console.log(`${this.name} sleep for ${sleepHour} hour.`);
        }
    }
    class Student extends People {
        constructor(name, age, address) {
            super(name, age, address);
        }
        study(studyTime) {
            console.log(`${this.name} study ${studyTime} hour every day.`);
        }
    }
    const student = new Student("Farhad Student", 19, "Chattogram");
    class Teacher extends People {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
            console.log(`${this.name} take ${numOfClass} class everyday..`);
        }
    }
}
