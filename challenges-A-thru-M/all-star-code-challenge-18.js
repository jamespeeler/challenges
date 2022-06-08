//Parameters: two strings; the first is a word, the second is a letter
//Return: the number of times 'letter' occurs in 'str'
function strCount(str, letter){ 
    //set a count variable to 0, just in case the letter occurs 0 times 
    let count = 0
    //set the word to lowercase, split, and use forEach to iterate
    str.toLowerCase().split('').forEach(e => {
      //use conditional statement to check if the current element is equal to lowercase 'letter; if so, add 1 to the count variable
      if (e === letter.toLowerCase()){
        count += 1
      }
    })
    return count
}