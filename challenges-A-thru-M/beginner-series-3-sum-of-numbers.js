// Beginner Series #3 Sum of Numbers

//Paramters: two whole numbers, positive or negative, unordered
//Return: the sum of all numbers between the two numbers, including the numbers themselves

function getSum(a,b){
  // put the parameters into an array & sort them from least to greatest
  let arr = [a,b].sort((x,y) => x - y);
  
  // initialize an empty array where the final result will go
  let resultArr = [];
  
  //use arr to build a loop, and push all the values between the two numbers into a new array
  for (let i = arr[0]; i <= arr[1]; i++){
    resultArr.push(i)
  };
  
  // reduce the array & return
  return resultArr.reduce((a,b) => a + b, 0);
}