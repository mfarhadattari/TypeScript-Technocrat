"use strict";
{
    /* ------> Nullish Coalescence Operator:
    default value if null or undefined  ------------> */
    const isAuthenticated = null;
    const user = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Gest";
    console.log({ user });
    const isMarried = undefined;
    const maritalStatus = isMarried !== null && isMarried !== void 0 ? isMarried : "Unmarried";
    console.log({ maritalStatus });
}
