// Multiple of Index

const multipleOfIndex = arr => {return arr.filter((e,i) => e % i === 0)}

// Remove String Spaces

const noSpace = x => {return x.split('').filter(e => e != ' ').join('')}

//To square(root) or not to square(root)

function squareOrSquareRoot(array) {
    return array.map(e => {
      if (Number.isInteger(Math.sqrt(e))){
        return Math.sqrt(e);
      } else {
          return e*e
      }
    })
  }

// Removing elements

const removeEveryOther = arr => {return arr.filter((_,i) => i % 2 === 0)};

// Convert string to array 

const stringToArray = string => {return string.split(' ')};

// Find the first non-consecutive number

function firstNonConsecutive (arr) {
    if((arr.find((e,i,a) => e - a[i - 1] > 1)) === undefined){
      return null
    } else {
      return (arr.find((e,i,a) => e - a[i - 1] > 1))
    }
  }

// Merge two sorted arrays into one 

const mergeArrays = (arr1, arr2) => {return arr1.concat(arr2).sort((a,b) => a - b).filter((e,i,a) => a.indexOf(e) === i)}

// Multiply

const multiply = (a, b) => {return a * b}

// Sort numbers

function solution(nums){
    if (nums === null){
      return [];
    } else {
        return nums.sort((a,b) => a - b)
    }
  }

// Convert a string to a number

var stringToNumber = str => {return Number(str)}

// Square(n) Sum

const squareSum = numbers => numbers.map(e => e*e).reduce((a,b) => a+b, 0);

// Function 1 - hello world

const greet = _ => "hello world!"

// Convert a number to a string!

const numberToString = num => String(num)

// Replace With Alphabet Position

function alphabetPosition(text) {
    return text.toLowerCase()
               .split('')  
               .map((e,i,a) => 
                   e.charCodeAt(0) - 96)  
               .filter(e => e > 0 && e < 27)   
               .join(' ');
}

// Complementary DNA

function DNAStrand(dna){
    return dna.split('').map(e => {
      if (e === 'A'){
        return 'T'
      } else if (e === 'T'){
        return 'A'
      } else if (e === 'G'){
        return 'C'
      } else if (e === 'C'){
        return 'G'
      }
    }).join('')
}

// Detect Pangram

function isPangram(string){
    let whyAmIDoingItLikeThis = string.toLowerCase()
                                      .split('')  
                                      .map((e,i,a) => 
                                          e.charCodeAt(0))  
                                      .filter(e => e > 96 && e < 123)
                                      .filter((e,i,a) => a.indexOf(e) === i)
    
    if (whyAmIDoingItLikeThis.length === 26){
      return true
    } else {
      return false
    }
   
}