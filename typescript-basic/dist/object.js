"use strict";
{
    // implicit type object
    const name = {
        fName: "Mohammad",
        mName: "Farhad",
        lName: "Attari",
    };
    console.log(name);
    // explicit type object
    const name2 = {
        fName: "Mohammad",
        mName: "Farhad",
        lName: "Attari",
    };
    console.log(name2);
    // optional property
    let user = {
        name: "Mohammad Farhad",
        isMarried: false,
    };
    console.log(user);
    // literal type
    let hero = {
        name: "Mohammad Farhad",
        company: "Programming Hero",
        title: "Student",
    };
    console.log(hero);
    // read only
    let hero2 = {
        name: "Mohammad Farhad Attari",
        company: "Programming Hero",
        title: "Student",
    };
    console.log(hero2);
}
