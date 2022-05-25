//Parameters: a string of lowercase letters and spaces
//Return: the number of vowels in the string (except for 'y')

function getCount(str) {
  // start a 'count' variable where the number of vowels will be stored
  let vowelsCount = 0;

  //split the string into an array, and check if each value is a vowel - if it is, add 1 to the count
  str.split('').forEach(e => {
    if (e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u'){
      vowelsCount += 1
    }
  })

  //return the number of vowels
  return vowelsCount;
}

//Example: 'aeiou' should return 5
//         'sdcf' should return 0