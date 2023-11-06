{
  // ----------->> Mapped Type ----------->

  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  //   lookup type
  type Height = AreaNumber["height"];

  type DynamicArea<T> = {
    [key in keyof T]: T[key];
  };

  const area1: DynamicArea<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}
