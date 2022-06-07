//Parameters: true or false | employed, on vacation
//Return: true if your alarm should be set, false otherwise
function setAlarm(employed, vacation){
  //use ternary to check for desired state, and return boolean to match.
  return (employed === true && vacation === false) ? true : false
}