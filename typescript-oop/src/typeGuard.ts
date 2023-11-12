{
  // ---------->> Type Guard <<------------

  //   type guard using typeof operator
  type AlpaNumeric = number | string;
  const add = (value1: AlpaNumeric, value2: AlpaNumeric): AlpaNumeric => {
    if (typeof value1 === "number" && typeof value2 === "number") {
      return value1 + value2;
    } else {
      return value1.toString() + value2.toString();
    }
  };

  const result1 = add(1, 4);
  console.log(result1);

  //   type guard using in operator
  interface NormalUser {
    name: string;
  }

  interface AdminUser extends NormalUser {
    role: "admin";
  }

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}.`);
    } else {
      console.log(`My name is ${user.name}.`);
    }
  };

  const normalUser: NormalUser = {
    name: "Normal Vai",
  };
  const adminUser: AdminUser = {
    name: "Normal Vai",
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);
}
