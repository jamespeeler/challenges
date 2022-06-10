//Parameters: a number of years
//Return: an array of 3 numbers, each one corresponding to the relative "age" of a cat & dog

var humanYearsCatYearsDogYears = function(humanYears) {
    // set up two counter variables
    let catYears = 0
    let dogYears = 0
    // use a for loop to run a formula "humanYears" number of times
    // use conditionals to add appropriate number of years to cat & dog
    for (let i = 1; i <= humanYears; i++){
      if (i === 1){
        catYears += 15 
        dogYears += 15
      } else if (i === 2){
        catYears += 9 
        dogYears += 9
      } else {
        catYears += 4
        dogYears += 5
      }
    }
    
    return [humanYears, catYears, dogYears];
  }
  