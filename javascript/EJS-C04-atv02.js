function arrayToList(array) {
    const arrayLen = array.length;
    let list = {};
    for (let i = 0; i < arrayLen; i ++) {
        list = { value: array.pop(), rest: list};
    }
    return list;
} 


function listToArray(list) {
    let arrayFromList = [];
    let listTemp = list;
    while (listTemp['rest'] != null) {
        arrayFromList.push(listTemp['value']);
        listTemp = listTemp['rest'];
    }
    return arrayFromList;
} 


function prepend(item, list) {
    let newlist = {}
    newlist = { value: item, rest: list }
    return newlist;
} 

function nth(list, item) {
    let index = 0;
    let listTemp = list;
    while (listTemp['rest'] != null) {
        if (index == item) {
            return listTemp['value'];
        }
        index++;
        listTemp = listTemp['rest'];
    }
    return undefined;
}
//array = [1, 2, 3];
//console.log(arrayToList([10, 20]));
//console.log(listToArray(arrayToList([10, 20, 30])));
//console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));