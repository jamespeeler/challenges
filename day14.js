// Needle in a haystack

findNeedle = haystack => {return `found the needle at position ${haystack.indexOf('needle')}`};

// Convert number to reversed array of digits

digitize = n => {return Array.from(String(n), Number).reverse()};

// Fake binary

function fakeBin(x){
    let numArr = Array.from(String(x), Number);
    numArr.forEach((e, i) => {
      if (e < 5){
        numArr.splice(i, 1, '0');
      } else {
        numArr.splice(i, 1, '1');
      };
    });
    return numArr.join('');
  };