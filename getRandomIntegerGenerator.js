function getRandomIntegerGenerator(minimumDigit, maximumDigit) {
    function getRandomDigit(minimumDigit, maximumDigit) {
        return Math.random() * (maximumDigit - minimumDigit) + minimumDigit;
    }
    return getRandomDigit(minimumDigit, maximumDigit);
}

// const getRandomDigits = getRandomIntegerGenerator(0, 9);
// console.log(getRandomDigits); // random number between 0 and 9
// console.log(getRandomIntegerGenerator(-10, 10)); // random number between -10 and 10


const getRandomDigit = getRandomIntegerGenerator(0, 9);
getRandomDigit(); // random number between 0 and 9
getRandomIntegerGenerator(-10, 10)(); // random number between -10 and 10