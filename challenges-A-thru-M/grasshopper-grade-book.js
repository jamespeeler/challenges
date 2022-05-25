//Parameters: 3 scores
//Return: the letter value associated with the average of the 3 scores
function getGrade (s1, s2, s3) {
    //calculate the average of the grades and assign that value to 'scoreAvg'
    let scoreAvg = (s1 + s2 + s3) / 3
    
    //use lots (and lots) of conditionals to determine what grade the scores should receieve
    if (scoreAvg >= 90){
      return 'A'
    } else if (scoreAvg >= 80){
      return 'B'
    } else if (scoreAvg >=70){
      return 'C'
    } else if (scoreAvg >= 60){
      return 'D'
    } else {
      return 'F'
    }
}