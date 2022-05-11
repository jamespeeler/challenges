// Find the Difference in Age between Oldest and Youngest Family Members

function differenceInAges(ages){
    ages.sort((a,b) => a - b);
    return [ages[0], ages[ages.length-1], ages[ages.length-1] - ages[0]];
  }
  