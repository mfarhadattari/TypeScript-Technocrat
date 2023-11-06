"use strict";
{
    // <<-------------->> Type Casting : Type Casting is the process of overriding a type. <<--------------->>
    // type casting using as
    let x;
    x = "hello";
    console.log(x.toUpperCase());
    let age;
    age = 19;
    console.log(age.toFixed(2));
    const kmTom = (km) => {
        if (typeof km === "string") {
            return parseFloat(km) * 1000;
        }
        else if (typeof km === "number") {
            return km * 1000;
        }
    };
    const meter = kmTom(5.7);
    console.log(meter);
}
