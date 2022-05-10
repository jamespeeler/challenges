//Parameters: an array of ones and zeroes
//Return: the integer equivalent of the binary

const binaryArrayToNumber = arr => {
    //join the array elements and assign the result to the variable 'binary'
    let binary = arr.join('');
    //convert 'binary' from binary to integer and return that value
    return parseInt(binary, 2);
  };