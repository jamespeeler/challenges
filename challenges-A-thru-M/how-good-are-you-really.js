//Parameters: an array with your classmates' scores, and an integer containing your score
//Return: true if your score is better than the average of the class, false otherwise

function betterThanAverage(classPoints, yourPoints){

    // push 'yourPoints' value into the 'classPoints' array  
    classPoints.push(yourPoints);

    // calculate the average
    let classAverage = ((classPoints.reduce((a,b) => a + b, 0)) / (classPoints.length + 1));

    // use a ternary operation to determine if i'm better than everyone else, and return that result
    return (yourPoints > classAverage ? true : false);

  };