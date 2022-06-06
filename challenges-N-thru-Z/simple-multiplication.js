//Parameters: a number
//Return: the param multiplied by 8 if param is even, 9 otherwise.
function simpleMultiplication(number) {
    //use ternary to determine if the parameter is even, and apply the appropriate formula to the result.
      return number % 2 === 0 ? number * 8 : number * 9
  }
  