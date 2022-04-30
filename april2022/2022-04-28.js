// Categorize new member

function openOrSenior(data){
    return parsedArray = data.map((e,i) => {
      if (data[i][0] >= 55 && data [i][1] > 7){
        return 'Senior';
      } else {
        return 'Open';
      };
    }); 
  }
  