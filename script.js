// Oldschool manier - Function declaration
function squaresNumbersOld (numberA, numberB) {
    totalA = (numberA * numberA) + (numberB * numberB);
    totalB = totalA * totalA;
    return "The answer of your sum is: " + totalB;
}

console.log(squaresNumbersOld(5, 25));

// Moderne manier - Function Expression
const squaresNumbersNew = function (numberA, numberB) {
    totalA = (numberA * numberA) + (numberB * numberB);
    totalB = totalA * totalA;
    return "The answer of your sum is: " + totalB;
};

console.log(squaresNumbersNew(5, 25));

// Allernieuwste manier - Arrow Functions 
const squaresNumbersArrow = (numberA, numberB) => {
    totalA = (numberA * numberA) + (numberB * numberB);
    totalB = totalA * totalA;
    return "The answer of your sum is: " + totalB;
};

console.log(squaresNumbersArrow(5, 25));