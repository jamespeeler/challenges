// Training on UEFA EURO 2016

function uefaEuro2016(teams, scores){
    let winner
    let teamsString = `At match ${teams[0]} - ${teams[1]}, `
    if (scores[0] < scores[1]){
      winner = `${teams[1]} won!`
    } else if (scores[0] > scores[1]){
      winner = `${teams[0]} won!`
    } else {
      winner = `teams played draw.`
    }
    return teamsString + winner
  }