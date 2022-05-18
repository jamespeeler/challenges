//Parameters: two numbers
//Return: true if one number is odd and the other is even, false otherwise
function lovefunc(flower1, flower2){
    //determine if one number is odd and the other is even, and return true or false
    return (flower1 + flower2) % 2 !== 0
}
//(1, 4) should return true
//(1, 3) should return false