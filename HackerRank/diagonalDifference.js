'use strict';
// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    const n = arr.length;
    let sumOne = 0;
    let sumTwo = 0;
    for (let i = 0; i < n; i++) {
        sumOne += arr[i][i];
        sumTwo += arr[i][n - (i + 1)];
    }
    
    const firstResult = sumOne - sumTwo;
    
    if (firstResult < 0) {
        return firstResult * (-1);
    } else {
        return firstResult;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}