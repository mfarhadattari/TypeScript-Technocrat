"use strict";
{
    // -------------->> instanceof operator <<-------------
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`${this.name} is making sound.`);
        }
    }
    class Dog extends Animal {
        constructor(name) {
            super(name, "dog");
        }
        makeBark() {
            console.log("I am barking...");
        }
    }
    class Cat extends Animal {
        constructor(name) {
            super(name, "cat");
        }
        makeMeaw() {
            console.log("I am Meawing...");
        }
    }
    /* const getAnimal = (animal: Animal) => {
      if (animal instanceof Dog) {
        animal.makeBark();
      } else if (animal instanceof Cat) {
        animal.makeMeaw();
      } else {
        animal.makeSound();
      }
    }; */
    const isDag = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDag(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeaw();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("Dog Babaji");
    const cat = new Cat("Cat Babaji");
    getAnimal(dog);
    getAnimal(cat);
}
