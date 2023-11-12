{
  // ----------->> Abstraction <<-----------

  // Using Interfaces
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting the car engine..");
    }
    stopEngine(): void {
      console.log("I am moving the car engine..");
    }
    move(): void {
      console.log("I am running..");
    }
  }

  // using abstract
  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  class Car2 extends Vehicle2 {
    startEngine(): void {
      console.log("I am starting the car engine..");
    }
    stopEngine(): void {
      console.log("I am moving the car engine..");
    }
    move(): void {
      console.log("I am running..");
    }
  }
}
