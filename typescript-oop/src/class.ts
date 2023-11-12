{
  // --------------->> Class <<----------------
  class Animal1 {
    name: string;
    species: string;
    sound: string;
    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`${this.name} is making sound ${this.sound}.`);
    }
  }
  // Class with parameter properties
  class Animal2 {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`${this.name} is making sound.`);
    }
  }

  //   create instance
  const dog = new Animal1("Dog Bhai", "Dog", "Ghew Ghew");
  const cat = new Animal1("Cat Bhai", "Cat", "Meaw Meaw");
}
