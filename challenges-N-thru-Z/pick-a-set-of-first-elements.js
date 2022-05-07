// Pick a set of first elements

function first(arr, n) {
    if (n === 0){
      return []
    } else if(!n){
      return arr.slice(0, 1)
    } else {
      return arr.slice(0, n)
    }
  }