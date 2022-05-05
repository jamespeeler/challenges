// Square every digit

const squareDigits = num => Number(num.toString().split('').map(e => e*e).join(''));