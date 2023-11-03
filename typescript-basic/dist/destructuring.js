"use strict";
{
    // --------------------> destructuring array: access by sequence
    const numbers = [1, 2, 3, 4, 5];
    const [, second, , ...rest] = numbers;
    console.log(second, rest);
    // --------------------> destructuring object
    const user = {
        name: {
            firstName: "Mohammad",
            lastName: "Farhad",
        },
        age: 19,
        isMarried: false,
    };
    const { name: { firstName, lastName }, age, isMarried: married, } = user;
    console.log(`Hello ! ${firstName} ${lastName}. Your are is ${age} year old. You are ${married ? "Married" : "Single"}.`);
}
