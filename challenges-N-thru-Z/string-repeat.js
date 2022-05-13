//Parameters: a number 'n' and a string 's'
//Return: the string 's' repeated 'n' number of times

function repeatStr (n, s) {
    //create a blank string and assign it to variable 'a'
    let a = '';
    
    // loop 'n' times, adding 's' into 'a' for each iteration
    for (i = 0; i < n; i++){
      a += s
    };
    
    //return the final product, 'a'
    return a;
  }




// that was the solution I originally used, but here's a better way to do it:

function repeatStrBetter (n, s) {
    return s.repeat(n);
}