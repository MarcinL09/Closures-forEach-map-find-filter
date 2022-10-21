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

function getSquaredNumbers(arrayOfNumbers) {
    return arrayOfNumbers ** 2;
}
    const arrayOfSquareNumbers = arrayOfNumbers.map(getSquaredNumbers)



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
//     for (let i = 0; i < users.length; ++i) {
//         const user = users[i];
//         if ((`${user.firstName} ${user.lastName}`) === fullName) {
//             return user;
//         }
//     }
// }
    return users.find(function(user) {
        return `${user.firstName} ${user.lastName}` === fullName;
})
}

const kate = findUserWithFullName(usersArray, 'Kate Williams');
console.log(kate.heightInCm); // 169

// write the getNegativeNumbers function using the filter function

// function getNegativeFunction(values) {
    // const numbers = []
//     for (let i = 0; i < values.length; ++i) {
//         const number = values[i];
//         if (number < 0) {
//             numbers.push(values[i]);
//         }
//     }
//     return numbers;
// }

const values = [1,-5,-3,12,-152];
    const numbers = values.filter(function(value) {
        return value < 0
    })
// }
// console.log(numbers);
// console.log(getNegativeFunction([1, -5, -3, 12, -152])); // [-5, -3, -152]

// write the getDivideByFunction
// function getDivideByFunction(divisor) {
//     return
// }
// const divideByFive = getDivideByFunction(5);
// console.log(divideByFive(10)); // 2
// console.log(divideByFive(50)); // 10
// const divideByTwo = getDivideByFunction(2);
// console.log(divideByTwo(8)); // 4
// console.log(divideByTwo(50)); // 25

// write the getDeltaFunction
// delta = b*b - 4*a*c
function getDeltaFunction(a,b,c) {
    return b ** 2 - 4 * a * c;
}

// const delta = {
//         a: 1;
//         b: 2;
//         c: 3;
// }
const getDelta = getDeltaFunction({ a: 1, b: 2, c: 3 });
    getDelta.forEach(function (value) {

    }

console.log(getDelta()); // -8
getDelta({ b: 12 }); // 132
getDelta({ a: 4, b: 10 }); // 52
getDelta({ a: 4, b: 0 }); // -48
// The nested function returns NaN if any of the arguments are missing
console.log(getDeltaFunction({ a: 1, c: 3 })()); // NaN
console.log(getDeltaFunction({ a: 1, c: 3 })({ b: 15 })); // 213