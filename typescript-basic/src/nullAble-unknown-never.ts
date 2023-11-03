{
  // -------->> null type --------->>
  const searchName = (name: string | null) => {
    if (name) {
      console.log("Searching Name...");
    } else {
      console.log("Nothing to Search...");
    }
  };
  searchName("Hello");
  searchName(null);

  // ------->>  unknown type ---------->>
  const convertToMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const result = (value * 1000) / 3600;
      console.log(`Result is: ${result.toFixed(2)} ms^-1`);
    } else if (typeof value === "string") {
      const numberValue = value.split(" ")[0];
      const result = (parseFloat(numberValue) * 1000) / 3600;
      console.log(`Result is: ${result.toFixed(2)} ms^-1`);
    } else {
      console.log("Invalid Input...");
    }
  };
  convertToMeterPerSecond("29 kmh^-1");

  // -------->> never type ---------->
  const throwError = (message: string): never => {
    throw new Error(message);
  };
  throwError("This is an Error...");
}
