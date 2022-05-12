//Parameters: an integer, always greater than 0
//Return: an array with every number from n to 1

const reverseSeq = n => {
    // create an empty array to fill with beautiful numbers
    let sequence = [];
    
    // loop 'n' times, push value 'i' into array 'sequence' each time
    for (let i = 1; i <= n; i++){
      sequence.push(i)
    };
    
    // reverse the entire array and return the result 
    return sequence.reverse();
  };