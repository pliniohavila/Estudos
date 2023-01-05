// https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true

import assert from 'node:assert';

function birthday(s, d, m) {
    // Write your code here
    let sumSegments = 0;

    for (let i = 0; i < s.length; i++) {
        const segment = s.slice(i, i + m);
        const sumSegment = getSumSegment(segment);
        if (sumSegment === d) {
            sumSegments++;
        } 
    }

    function getSumSegment(segment){
        const sumSegment = segment.reduce((acc, curr) => {
            return acc += curr;
        }, 0);
        return sumSegment;
    }

    return sumSegments;
}


const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;

assert.deepEqual(birthday(s, d, m), 2);
assert.deepEqual(birthday([1, 1, 1, 1, 1, 1], 3, 2), 0);
assert.deepEqual(birthday([4], 4, 1), 1);