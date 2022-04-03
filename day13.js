// Well of ideas - Easy version

function well(x){
  
    let count = 0;
    
    x.forEach(e => {
      if (e === 'good'){
        count += 1;
      };
    });
     
     if (count === 0){
       return 'Fail!';
     }else if (count < 3){
       return 'Publish!';
     } else {
       return 'I smell a series!';
     };
     
};

// Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
    let countPos = 0;
    let countNeg = 0;
  
    if (input === null || input.length === 0){
      return [];
    } else {         
      input.forEach(e => { e > 0 ? countPos += 1 : countNeg += e });  
      return [countPos, countNeg];      
    };
};

// Abbreviate a two word name

function abbrevName(name){
    return name.split(" ").map(i=>i[0]).join('.').toUpperCase();
};