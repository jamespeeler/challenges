// Parameters: an array of strings
// Return: an array with each of the strings, but with the items labeled in a 1-index system
function number(array){
    //use 'map' to edit each array element to match the template given
    return array.map((e,i) => e = `${i+1}: ${e}`)
}
  
//Examples
//[] should return an empty array
//['a', 'b', 'c'] should return ['1: a', '2: b', '3: c']