//Parameters: an array of numbers
//Return: 'odd' or 'even', based on the sum of the array elements
function oddOrEven(array) { //use a conditional statement to determine if the array is empty or not.
    if (array === []){ //if array is empty, return 'even'
      return 'even'
    } else { // if array is not empty, use reduce to get the sum and test for oddness/evenness
             // and return the appropriate string value.
      return array.reduce((a,b) => a + b, 0) % 2 === 0 ? 'even' : 'odd'
    }
}