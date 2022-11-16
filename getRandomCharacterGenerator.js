// function getRandomCharacterGenerator(string) {
//     return function() {
//         const array = string.split('');
//         return array[Math.floor(Math.random() * array.length)];
//     }
// }
//
// // const getRandomDigit = getRandomCharacterGenerator('0123456789');
// // console.log(getRandomDigit); // returns a random string that contains a single digit
// //
// // const getRandomABC = getRandomCharacterGenerator('abcABC');
// // console.log(getRandomABC) // returns a random string that is a, A, b, B, c, or C
//
// const getRandomDigit = getRandomCharacterGenerator('0123456789');
// getRandomDigit(); // returns a random string that contains a single digit
// const getRandomABC = getRandomCharacterGenerator('abcABC');
// getRandomABC(); // returns a random string that is a, A, b, B, c, or C