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

function getSquaredNumbers(arrayOfNumbers) {
    return arrayOfNumbers.map(number => number ** 2);
}

console.log(getSquaredNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(getSquaredNumbers([6, 7, 8, 9, 10])); // [36, 49, 64, 81, 100]

// write findUserWithFullName using the find function
const usersArray = [
    {
        firstName: 'John',
        lastName: 'Smith',
        heightInCm: 184
    },
    {
        firstName: 'Kate',
        lastName: 'Williams',
        heightInCm: 169
    }
]

function findUserWithFullName(users, fullName) {
    return users.find(function(user) {
        return `${user.firstName} ${user.lastName}` === fullName;
})
}

const kate = findUserWithFullName(usersArray, 'Kate Williams');
console.log(kate.heightInCm); // 169

// write the getNegativeNumbers function using the filter function

function getNegativeFunction(values) {
    return values.filter(function(value) {
        return value < 0;
    });
}

console.log(getNegativeFunction([1, -5, -3, 12, -152])); // [-5, -3, -152]

// write the getDivideByFunction
function getDivideByFunction(divisor) {
    function divideBy(dividend) {
        return dividend / divisor;
    }
    return divideBy;
}
const divideByFive = getDivideByFunction(5);
console.log(divideByFive(10)); // 2
console.log(divideByFive(50)); // 10
const divideByTwo = getDivideByFunction(2);
console.log(divideByTwo(8)); // 4
console.log(divideByTwo(50)); // 25

// write the getDeltaFunction
// delta = b*b - 4 * a * c
// function getDeltaFunction(a, c) {
//     function getDelta(b) {
//         return b.forEach(function(number)) {
//             number.b ** 2 - 4 * number.a * number.c;
//         }
//     }
//     return getDelta();
// }
//
// console.log(getDeltaFunction({a: 1, b: 2, c: 3}))
// const getDelta = getDeltaFunction({ a: 1, b: 2, c: 3 });
//
//
// console.log(getDelta()); // -8
// getDelta({ b: 12 }); // 132
// getDelta({ a: 4, b: 10 }); // 52
// getDelta({ a: 4, b: 0 }); // -48
// // The nested function returns NaN if any of the arguments are missing
// console.log(getDeltaFunction({ a: 1, c: 3 })()); // NaN
// console.log(getDeltaFunction({ a: 1, c: 3 })({ b: 15 })); // 213

// Sum of positive using the forEach function

function positiveSum(arrayOfNumbers) {
    let sum = 0;
    arrayOfNumbers.forEach(function positiveSum(number) {
        if (number > 0) {
            sum = sum + number;
        }
    });
    return sum;
}

console.log(positiveSum([1,-4,7,14]));

// Counting sheep... function

function countSheeps(arrayOfSheep) {
    const present = true;
    let sheep = 0;
    arrayOfSheep.filter(function(value) {
        if (value === present) {
            sheep++;
        }
    });
    return sheep;
}

console.log(countSheeps([true,  true,  true,  false,
                         true,  true,  true,  true ,
                         true,  false, true,  false,
                         true,  false, false, true ,
                         true,  true,  true,  true ,
                         false, false, true,  true]));

// A Needle in the Haystack

function findNeedle(haystack) {
    const item = 'needle'
    const index = haystack.findIndex(element => element === item);
    return `found the ${item} at position ${index}`
}


console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));

// Given an array of integers, return a new array with each value doubled.'
function maps(value){
    return value.map(element => element * 2);
}

console.log(maps([1, 2, 3]));

// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    return array.map(element => element * -1);
}

console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));
console.log(invert([]));

// Return the average of the given array rounded down to its nearest integer.

function getAverage(marks) {
    let sum = 0;
    marks.forEach(function(mark) {
        sum = sum + mark;
    });
    return Math.floor(sum/marks.length);
   }

console.log(getAverage([3, 4, 5, 3.5]))

// write isStringInArray using the find function

function isStringInArray(array, name) {
    const element = array.find(function(value) {
       return value === name;
    });
    return element !== undefined;
}

console.log(isStringInArray(['Orange', 'Apple'], 'Apple')); // true
console.log(isStringInArray(['Onion', 'Cabbage'], 'Potato')); // false

// write the forEach function from scratch using a for loop

const vegetables = ['Carrot', 'Cabbage', 'Onion'];
function printVegetable(vegetable, index) {
    for (let i = 0; i < vegetables.length; ++i) {
        const vegetable = vegetables[i];
        const index = i;
    }
    console.log(vegetable, index)
}
vegetables.forEach(printVegetable);
// Carrot 0
// Cabbage 1
// Onion 2

const fruits = ['Apple', 'Orange', 'Watermelon'];
function forEach(array, callback) {
    for (let i = 0; i < array.length; ++i) {
        const element = array[i];
        callback(element, i);
    }
}

function printFruit(fruit, index) {
    console.log(fruit, index);
}

forEach(fruits, printFruit);

// Apple 0
// Orange 1
// Watermelon
//            fruits, isFruit
function find(array, callback) {
    for (let i = 0; i < array.length; ++i) {
        const element = array[i];
        if (element === 'Orange') {
        return callback(element);
        }
    }
}

function isFruit(fruit) {
    console.log(fruit);
}

find(fruits, isFruit);

// Additional exercises

// create the executeAfterFiveSeconds function that calls the provided function after five seconds

function executeAfterFiveSeconds(callback) {
    setTimeout(callback, 5000);
}

function sayHello() {
    console.log('Hello!');
}

executeAfterFiveSeconds(sayHello);

// create the getRandomIntegerGenerator function. It should return a function that returns a
// random integer between two provided numbers.

function getRandomIntegerGenerator(minimumDigit, maximumDigit) {
    function getRandomDigit(minimumDigit, maximumDigit) {
        return Math.random() * (maximumDigit - minimumDigit) + minimumDigit;
    }
    return getRandomDigit(minimumDigit, maximumDigit);
}

const getRandomDigits = getRandomIntegerGenerator(0, 9);
console.log(getRandomDigits); // random number between 0 and 9
console.log(getRandomIntegerGenerator(-10, 10)); // random number between -10 and 10
/*
create the findObjectProperty that returns the name of a property from an object
it works similarly to the find built into JavaScript, but works with an object instead of an array
if there is no matching property name, return undefined
*/

// const redApple = {
//     color: 'red',
//     weightInGrams: 150
// }
// console.log(Object.keys(redApple));
//
// function findObjectProperty(object, callback) {
//     const redApple = Object.keys(object);
//     for (let i = 0; i < redApple.length; ++i);
//     const redAppleValue = redApple[i];
//     if (redApple.redAppleValue === 'red') {
//         return redAppleValue;
//     }
// }
//
// function isPropertyName(propertyValue) {
//     return ;
// }
//
// const propertyName = findObjectProperty(redApple, isPropertyName);
//
// console.log(propertyName); // color
//
// const john = {
//     name: 'John',
//     bestFriend: {
//         name: 'Adam'
//     }
// }
//
// const adamPropertyName = findObjectProperty(john, function(propertyValue) {
//     return propertyValue === 'Adam';
// })
// console.log(adamPropertyName); // bestFriend

// create the getRandomCharacterGenerator function. It should return a function that returns a
// random character from the provided string.

function getRandomCharacterGenerator(string) {
    function getRandomDigit(string) {
        const array = string.split('');
        return array[Math.floor(Math.random() * array.length)];
    }
    return getRandomDigit(string)
}

const getRandomDigit = getRandomCharacterGenerator('0123456789');
console.log(getRandomDigit); // returns a random string that contains a single digit

const getRandomABC = getRandomCharacterGenerator('abcABC');
console.log(getRandomABC) // returns a random string that is a, A, b, B, c, or C
