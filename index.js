// Write the getSmallestNumber function using the forEach function

function getSmallestNumber(arrayOfNumbers) {
    let lowestNumber = arrayOfNumbers[0];
    arrayOfNumbers.forEach(function getSmallestNumber(number) {
    if (number < lowestNumber) {
        lowestNumber = number;
    }
  });
    return lowestNumber;
}

console.log(getSmallestNumber([2, -5, 10, 1, 4])); // -5
console.log(getSmallestNumber([200, 25, 4, 123, 87])); // 4

// write the getSquaredNumbers function using map
const arrayOfNumbers = [1,2,3,4,5]
// function getSquaredNumbers(arrayOfNumbers) {
//     return arrayOfNumbers ** 2;
// }
    const arrayOfSquareNumbers = arrayOfNumbers.map(function getSquaredNumber(arrayOfNumbers) {
        return arrayOfNumbers ** 2;
});
    // const numberToBeSquared = arrayOfNumbers
//     for (let i = 0; i < arrayOfNumbers.length; ++i) {
//         const number = arrayOfNumbers[i]
//         arrayOfSquareNumbers.push(number ** 2)
//     }
//     return arrayOfSquareNumbers;
// }

console.log(arrayOfSquareNumbers);
console.log(getSquaredNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(getSquaredNumbers([6, 7, 8, 9, 10])); // [36, 49, 64, 81, 100]