function even_or_odd(number) {
    if (number % 2 === 0){
      return "Even"
    } else {
      return "Odd"
    }
}

//-------------------------

function even_or_odd(number) {
  return (number % 2 === 0 ? "Even" : "Odd")
}

//-------------------------

function greet(name){
    return "Hello, " + name + " how are you doing today?"
}

//-------------------------

function litres(time) {
    return Math.floor(time * 0.5);
}

//-------------------------

function isDivideBy(number, a, b) {

    return number % a == 0 && number % b == 0 ? true : false;
    
}