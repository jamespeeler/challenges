// Number of People in the Bus

var number = function(busStops){
    let startCount = 0
    busStops.forEach(e => {
      startCount += e[0];
      startCount -= e[1]
    })
    return startCount;
  };