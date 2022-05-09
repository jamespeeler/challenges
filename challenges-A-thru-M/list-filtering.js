//Parameters: an array of positive integers and strings
//Return: a new array without the strings
function filter_list(l) {
    // filter the array 'l' for values that are numbers, and return that filtered array
    return l.filter(e => typeof(e) === 'number')
  }