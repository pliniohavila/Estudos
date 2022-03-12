function endLargest(start, end, salt) {
    let arrayReturn = [];
    for (let i = start; i <= end; i += salt){
        arrayReturn.push(i);
    }
    return arrayReturn;
}


function endSmaller(start, end, salt) {
    let arrayReturn = [];
    for (let i = start; i >= end; i += salt){
        if (i < end) {
            return arrayReturn;
        }
        else {
            arrayReturn.push(i);
        }
    }
    return arrayReturn;
}


function range(start, end, saltOp) {
    let salt = 1;
    if (arguments.length == 3) {
        salt = arguments[2];
    }
    if (start < end) {
        return endLargest(start, end, salt);
    }
    else if (start > end) {
        return endSmaller(start, end, salt);
    }
    else {
        return start;
    }
}

function sum(arrayToSum) {
    let sum = 0;
    for (let i = 0; i < arrayToSum.length; i++)
    {
        sum += arrayToSum[i];
    }
    return sum;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));



