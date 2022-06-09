//Parameters: a name
//Return: whether or not that person plays banjo. if their name starts with 'r', they do play banjo.
//Parameters: a name
//Return: a specific string if the name starts with an 'r'
function areYouPlayingBanjo(name) {
    //use a conditional to check if the first letter of the name is an r, return appropriate string.
    if (name.charAt(0) === 'R' || name.charAt(0) === 'r'){
      return `${name} plays banjo`
    } else {
      return `${name} does not play banjo`
    }
  }