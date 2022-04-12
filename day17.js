// You only need one - Beginner

const check = (a, x) => {return a.includes(x)};

// My head is at the wrong end!

const fixTheMeerkat = arr => {return arr.reverse()}

//Get the mean of an array 

const getAverage = marks => {return Math.floor(marks.reduce((a,b) => a+b) / (marks.length))};

//Sort and Star

const twoSort = s => {return s.sort().shift().split('').join('***')}