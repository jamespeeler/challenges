//Parameters: two numbers, where a is less than b
//Return: an array containing those numbers and all whole numbers between :D 
function between(a, b) {
    //set up consecArray as an empty array
    let consecArray = []
    //use a for loop to push numbers into the empty array
    for (let i = a; i <= b; i++){
      consecArray.push(i)
    }
    
    return consecArray
    
  }