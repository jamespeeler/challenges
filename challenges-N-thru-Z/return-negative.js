//Parameters: a number
//Return: that number, but negative :O
function makeNegative(num) {
    //using ternary, check if num is positive. if it is, make it negative - otherwise, just return num.
    return num >=0 ? num * -1 : num
}