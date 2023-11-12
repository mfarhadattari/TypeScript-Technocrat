{
  // ----------->> Polymorphism <<-----------
  class Shape {
    getArea(): number {
      return 0;
    }
  }
  class Circle extends Shape {
    public constructor(public radius: number) {
      super();
    }

    public getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
      super();
    }
    public getArea(): number {
      return this.width * this.height;
    }
  }
}
