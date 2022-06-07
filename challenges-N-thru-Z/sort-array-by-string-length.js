//Parameters: an array of strings of differing lengths
//Return: an array containing the same strings, ordered from shortest to longest
function sortByLength (array) {
    //use sort method to arrange array by length :D
    return array.sort((a,b) => a.length - b.length)
};