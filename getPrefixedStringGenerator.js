function getPrefixedStringGenerator(prefix) {
    return function getPrefix(string) {
        return prefix + string;
    }
}
// const prefixStringWithMister = getPrefixedStringGenerator('Mr.');
// console.log(getPrefixedStringGenerator('Mr.')(' John')); // Mr. John
// console.log(prefixStringWithMister(' Adam')); // Mr. Adam
// const prefixStringWithMiss = getPrefixedStringGenerator('Ms.');
// console.log(prefixStringWithMiss(' Kate')); // Ms. Kate
// console.log(prefixStringWithMiss(' Julie')); // Ms. Julie
// const prefisStringWithNegative = getPrefixedStringGenerator('un');
// console.log(prefisStringWithNegative('happy')); // unhappy
// console.log(prefisStringWithNegative('productive')); // unproductive
// console.log(prefisStringWithNegative('fair')); // unfair
