// Descending Order 

const descendingOrder = n => Number(Array.from(String(n), Number).sort((a,b) => b - a).join(''));