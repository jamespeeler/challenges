// Add length

function addLength(str) {
    let strArr = str.split(' ');
    return strArr.map((e) => e = e + ' ' + e.length);
  }