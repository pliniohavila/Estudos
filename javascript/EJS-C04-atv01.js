
function reverseArray(array) {
    let reverse = []
    for (let i = array.length - 1; i >= 0; i--){
        reverse.push(array[i]);
    }
    return reverse;
}

function reverseArrayInPlace(array){
    let middle = Math.floor(array.length / 2);
    let lenArray = array.length - 1;
    for (let i = 0; i <= middle; i++) {
        let temp = array[i];
        array[i] = array[lenArray - i];
        array[lenArray - i] = temp;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
