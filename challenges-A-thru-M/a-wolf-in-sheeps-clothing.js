// A wolf in sheep's clothing

function warnTheSheep(queue) {
    let reversedQueue = queue.reverse();
    if (reversedQueue[0] === 'wolf'){
       return 'Pls go away and stop eating my sheep'
    } else {
     return `Oi! Sheep number ${reversedQueue.indexOf('wolf')}! You are about to be eaten by a wolf!`
    }
   }