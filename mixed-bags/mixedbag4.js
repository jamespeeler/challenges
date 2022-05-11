// Square(n) Sum
const squareSum = numbers => { return numbers.map(i => i * i).reduce((a,b) => a + b, 0) }

//Counting sheep...
function countSheeps(arrayOfSheep) {
    let count = 0
    arrayOfSheep.forEach(i => {
      if(i === true){
        count++
      }
    })
    return count
  }