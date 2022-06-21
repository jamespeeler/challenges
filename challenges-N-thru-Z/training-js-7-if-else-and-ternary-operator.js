//Parameters: the number of people buying hot dogs
//Return: the price of the dog
function saleHotdogs(n){
    //use a conditional to use the correct pricing formula based on how many peeps are in line
    if (n < 5){
      return n * 100
    } else if (n < 10){
      return n * 95
    } else {
      return n * 90
    }
  }