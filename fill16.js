// Sum of two lowest positive integers

const sumTwoSmallestNumbers = numbers => numbers.sort((a,b) => a - b).slice(0, 2).reduce((a,b) => a+b, 0);