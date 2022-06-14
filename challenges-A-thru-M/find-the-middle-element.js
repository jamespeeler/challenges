//Parameters: an array of three digits
//Return: the index of the middle number in the array
function gimme (triplet) { //sort the array and assign it to a variable
    let sortedArr = [...triplet].sort((a,b) => a - b)
    //use sortedArr to locate the middle-most number, and use indexOf to find it's original index
    return triplet.indexOf(sortedArr[1])
}