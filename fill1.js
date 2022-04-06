// Count by X

function countBy(x, n) {
    let z = [];
    for (i = 0; i < n; i++){
      z[i] = x * (i + 1)
    }
    return z;
  }