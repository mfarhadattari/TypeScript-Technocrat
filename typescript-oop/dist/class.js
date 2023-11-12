"use strict";
{
    // --------------->> Class <<----------------
    class Animal1 {
        constructor(name, species, sound) {
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
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`${this.name} is making sound.`);
        }
    }
    //   create instance
    const dog = new Animal1("Dog Bhai", "Dog", "Ghew Ghew");
    const cat = new Animal1("Cat Bhai", "Cat", "Meaw Meaw");
}
