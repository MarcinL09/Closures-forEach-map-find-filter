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