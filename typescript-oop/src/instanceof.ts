{
  // -------------->> instanceof operator <<-------------
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log(`${this.name} is making sound.`);
    }
  }

  class Dog extends Animal {
    constructor(name: string) {
      super(name, "dog");
    }
    makeBark() {
      console.log("I am barking...");
    }
  }
  class Cat extends Animal {
    constructor(name: string) {
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

  const isDag = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDag(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog Babaji");
  const cat = new Cat("Cat Babaji");

  getAnimal(dog);
  getAnimal(cat);
}
