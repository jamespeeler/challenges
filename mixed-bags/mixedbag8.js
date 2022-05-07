// String ends with ----------------------------

function solution(str, ending){
    return str.endsWith(ending) ? true : false
}

// Highest and lowest -------------------------

function highAndLow(numbers){
    let numbersArr = numbers.split(' ').map(Number);
    return Math.max(...numbersArr) + ' ' + Math.min(...numbersArr)
}