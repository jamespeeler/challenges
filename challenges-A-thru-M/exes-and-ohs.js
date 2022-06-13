//Parameters: a string of letters
//Retuyrn: true if the number of x's equals the number of o's; false otherwise
function XO(str) {
  //start some count variables and set them to 0, just in case the parameter does not have any x's or o's
  let xCount = 0
  let oCount = 0
  
  //set the parameter to lowercase, split it, and run a for each on each element. 
  //if the element is x or o, raise the related count variable by 1
  str.toLowerCase().split('').forEach(e => {
    e === 'x' ? xCount += 1 : e === 'o' ? oCount += 1 : false
  })
  // check if the two count variables are equal, and return the boolean result
  return xCount === oCount;
}