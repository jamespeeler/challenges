//Parameters: a year
//Return: the century of that year
function century(year) {
    //divide the 'year' argumgent by 100, and round up to get the century
    return Math.ceil(year/100)
}