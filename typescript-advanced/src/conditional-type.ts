{
  // --------------->> Conditional Type ----------------->>
  type A = null;
  type B = undefined;

  type C = A extends null ? true : B extends undefined ? true : any;

  interface Vehicle {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  }

  type CheckVehicle<T> = T extends keyof Vehicle ? true : false;

  type HasPlane = CheckVehicle<"plane">;
  type HasBus = CheckVehicle<"bus">;
}
