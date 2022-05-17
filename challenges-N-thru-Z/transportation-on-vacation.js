//Parameters: a number of days
//Return: the total cost of renting a car for a given number of days

function rentalCarCost(d) {
    //use a conditional to determine what formula to use based on the given days
    if (d < 3){
      return d * 40
    } else if (d < 7){
      return (d * 40) - 20
    } else {
      return (d * 40) - 50
    }
  }