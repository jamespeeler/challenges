//Parameters: two choices from rock paper scissors
//Return: the winner of the game
const rps = (p1, p2) => {
  //use conditionals to determine the winner!
    if (p1 === p2){
      return 'Draw!'
    } else if (p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors'){
      return "Player 1 won!"
    } else {
      return "Player 2 won!"
    }
  };