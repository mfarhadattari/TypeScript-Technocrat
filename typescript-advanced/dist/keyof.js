"use strict";
{
    const getProperty = (obj, key) => {
        return obj[key];
    };
    let person = {
        name: "Ms X",
        age: 27,
    };
    const res = getProperty(person, "age");
}
