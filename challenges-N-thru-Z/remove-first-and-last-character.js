//Parameters: a string of characters
//Return: the same string, but with the first and last letters removed

function removeChar(str){
    //Split the string into an array, pull out the middle letters with splice, then join the array and return
    
    return str.split('')
              .splice(1, str.length-2)
              .join('')
  };