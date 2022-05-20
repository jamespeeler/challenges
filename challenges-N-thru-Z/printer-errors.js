//Parameters: a string of letters from a thru z. we only want letters a thru m
//Return: a fraction, the numerator is the amount of bad letters, the denominator is the length of the string argument

function printerError(s) {
    //initialize a count variable
    let count = 0
    
    //split the argument, then check each element for a letter after m. if there is a letter after m, increase count by 1
    s.split('').forEach((e,i) => {
      if (e.charCodeAt(e) > 109){
        count += 1
      }
    })
  
    //return the final count value over the length of 's'
    return `${count}/${s.length}`
}