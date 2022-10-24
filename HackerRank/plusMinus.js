

function plusMinus(arr) {
    let arrlength = arr.length;
    let positiveValues = 0;
    let negativeValues = 0;
    let zeros = 0

    for (let i = 0; i < arrlength; i++) {
        if (arr[i] > 0 ) {
            positiveValues++;
        } else if (arr[i] < 0) {
            negativeValues++;
        } else {
            zeros++;
        }
    }

    const proportionPositiveValues = (positiveValues / arrlength).toPrecision(6);
    const porportionNegativeValues = (negativeValues / arrlength).toPrecision(6);
    const proportionZeros = (zeros / arrlength).toPrecision(6);

    console.log(proportionPositiveValues);
    console.log(porportionNegativeValues);
    console.log(proportionZeros);
}

/*
const result = [
        proportionPositiveValues,
        porportionNegativeValues,
        proportionZeros,
    ]
*/


const arr = [-4, 3, -9, 0, 4, 1];
const result = plusMinus(arr);
// console.log(result);