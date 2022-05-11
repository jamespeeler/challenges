// filter out the geese 

function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter((i) => !geese.includes(i));
  };

// return sum of all positive numbers in array

function positiveSum(arr) {
    let positive = arr.filter(i => i > 0);
    return positive.reduce((a, b) => a + b, 0);
  }

// Given an array of integers, return a new array with each value doubled.

let maps = x => x.map(i => i*2);

