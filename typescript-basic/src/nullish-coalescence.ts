{
  /* ------> Nullish Coalescence Operator: 
  default value if null or undefined  ------------> */
  const isAuthenticated = null;
  const user = isAuthenticated ?? "Gest";
  console.log({ user });

  const isMarried = undefined;
  const maritalStatus = isMarried ?? "Unmarried";
  console.log({ maritalStatus });
}
