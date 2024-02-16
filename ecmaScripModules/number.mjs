const number = (number1, number2) => {

    if(typeof number1 !== "number" || isNaN(number1)) {
        throw new Error("number1 must be a valid number");
    }
    if(typeof number2 !== "number" || isNaN(number2)) {
        throw new Error("number2 must be a valid number");
    }

    const sum = number1 + number2;

    if (sum % 2 === 0) {
        return `${sum} is an even number`;
    } else {
        return `${sum} is an odd number`;
    }
}

export default number;

