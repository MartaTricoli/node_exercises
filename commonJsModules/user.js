const user = (name, age) => {
    if (typeof name !== "string" || name === "") {
        throw new Error("name must be a valid string");
    }
    if (typeof age !== "number" || isNaN(age)) {
        throw new Error("age must be a valid number");
    }
    console.log(`my name is: ${name}, I am ${age} years old.`) ;
}

module.exports = user;