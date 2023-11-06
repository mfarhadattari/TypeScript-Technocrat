{
  // ---------------->> Utility Type ----------------->>
  interface Person {
    name: string;
    age: number;
    email?: string;
    mobile?: string;
  }

  //   Pick Type
  type NameAge = Pick<Person, "name" | "age">;

  //    Omit Type
  type ContractInfo = Omit<Person, "name" | "age">;

  //   Required Type
  type PersonRequired = Required<Person>;

  //   Partial Type
  type PersonPartial = Partial<Person>;

  //   Readonly Type
  type PersonReadonly = Readonly<Person>;

  //   Record Type
  type EmptyObj = Record<string, unknown>;
}
