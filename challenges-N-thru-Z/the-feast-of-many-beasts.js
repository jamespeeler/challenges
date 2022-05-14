//Parameters: an animal name, and a dish name
//Return: true if the first and last letters of beast and dish are the same, false otherwise

function feast(beast, dish) {
    // check to see if the first letters of each parameter are the same, then check the last letters. return the result
    return beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1) ? true : false
  } 