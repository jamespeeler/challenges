// SpeedCode #2 - Array Madness

function arrayMadness(a, b) {
    let aMap = a.map(e => e**2)
    let bMap = b.map(e => e**3)
    let aReduce = aMap.reduce((e,i) => e+i,0)
    let bReduce = bMap.reduce((e,i) => e+i,0)
    
    if (aReduce === bReduce){
      return false
    } else if (aReduce > bReduce){
      return true
    } else {
      return false
    }
  }