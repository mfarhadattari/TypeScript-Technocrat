"use strict";
{
    // <<------------------->> Function With Generics <<----------------->>
    const createArray = (pram) => {
        return [pram];
    };
    const res1 = createArray("Bangladesh");
    const createArrayWithGeneric = (pram) => {
        return [pram];
    };
    const res2 = createArrayWithGeneric("Bangladesh");
    const createTupleWithGeneric = (param1, param2) => {
        return [param1, param2];
    };
    const res3 = createTupleWithGeneric("Mohammad Farhad", {
        name: "Mohammad Farhad",
    });
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Dev";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: "Mr X",
        email: "x@abc.com",
        devType: "NLWD",
    });
    const student2 = addCourseToStudent({
        name: "Mr Y",
        email: "y@abc.com",
        watch: "APPLE Watch",
    });
}
