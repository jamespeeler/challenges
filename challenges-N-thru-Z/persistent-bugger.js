//Parameters: a positive integer
//Return: the number's multiplicative persistence
function persistence(num) {
    //set a counter variable
     let multiplicativePersistence = 0;
    
    //use a while loop to convert num to string, split it, then reduce it with multiplication.
    //if the result has a length greater than 1, do it again. add 1 to the counter each iteration
     while (num.toString().length !== 1){
       num = num.toString().split('').reduce((a,b) => a * b)
       multiplicativePersistence += 1
     };
    //return the final counter value
    return multiplicativePersistence;
     
}