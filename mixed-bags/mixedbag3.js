//  I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(nbPetals) {    
    let petalsArr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'] 
    
    for (let i = 0; i <= nbPetals-1; i += 1) {
    
    if (i === nbPetals-1) {
      return petalsArr[i%6];
    }
  }
}

// Remove first and last character part two

function array(nums){
    let arr = nums.split(',')
    arr.pop()
    arr.shift()
    if(arr.join(' ') == NaN || arr.join(' ') == ''){
      return null
    } else {
      return arr.join(' ')
    }
  }

// Array plus array 

const arrayPlusArray = (arr1, arr2) => { return arr1.concat(arr2).reduce((a,b) => a + b, 0) }

// Is there a vowel in there?

function isVow(a){
    a.forEach((e, i) => {
      if (e === 97){
        a.splice(i, 1, 'a')
      } else if (e === 101){
        a.splice(i, 1, 'e')
      } else if (e === 105){
        a.splice(i, 1, 'i')
      } else if (e === 111){
        a.splice(i, 1, 'o')
      } else if (e === 117){
        a.splice(i, 1, 'u')
      }
    })
    
    return a
  }