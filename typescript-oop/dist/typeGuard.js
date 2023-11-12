"use strict";
{
    const add = (value1, value2) => {
        if (typeof value1 === "number" && typeof value2 === "number") {
            return value1 + value2;
        }
        else {
            return value1.toString() + value2.toString();
        }
    };
    const result1 = add(1, 4);
    console.log(result1);
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}.`);
        }
        else {
            console.log(`My name is ${user.name}.`);
        }
    };
    const normalUser = {
        name: "Normal Vai",
    };
    const adminUser = {
        name: "Normal Vai",
        role: "admin",
    };
    getUser(normalUser);
    getUser(adminUser);
}
