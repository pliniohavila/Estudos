// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let pairs = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= n; j++) {
            if (i < j && ((ar[i] + ar[j]) % k === 0)) {
                pairs++;
            }
        }
    }
    return pairs;
}

function dvSumPairs(n, k, ar) {
    let pairs = 0;
    if (n === 1 ) {
        return pairs;
    }
    if ((n - 1) > (n - 2)) {
        console.log(ar[n - 2], ar[n - 1]);
    }

    return dvSumPairs(n - 1, k, ar);
}

const ar = [1, 3, 2, 6, 1, 2];
dvSumPairs(6, 5, ar);

function old(n, k, ar) {
    let pairs = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i != j && ar[i] < ar[j]) {
                if ((ar[i] + ar[j]) % k === 0) {
                    pairs++;
                }
            }
        }
    }
    return pairs;
}



// const ar = [1, 3, 2, 6, 1, 2];
// console.log(divisibleSumPairs(6, 3, ar), 5);
// const a = divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]);
// console.log(a, 3);

// const str1 = '64 95 76 35 83 2 97 21 26 6 20 98 100 79 84 40 62 62 20 9 87 40 47 38 12 10 92 68 4 34 98 53 15 4 9 4 77 60 36 49 10 73 56 43 31 6 18 91 53 73 28 90 79 3 72 64 29 89 95 28 23 7 54 23 34 90 100 73 77 98 95 89 22 42 98 39 92 25 44 40 7 100 62 28 25 21 64 55 84 54 99 14 5 51 34 66 4 5 49 56';
// const arr = str1.split(' ').map(Number);
// console.log(divisibleSumPairs(100, 21, arr), 254);

// const str2 = '99 40 53 31 92 68 17 70 100 16 26 82 72 89 19 14 56 7 26 69 8 44 51 88 24 34 40 70 90 68 95 95 28 39 71 75 31 17 96 60 98 98 33 35 68 84 17 11 76 17 45 61 72 76 18 67 55 81 57 43 45 96 58 49 4 61 38 66 82 16 44 100 50 19 82 15 72 5 81 97 94 70 7 92 75 55 1 87 4 9 92 35 83 20 53 8 90 2 92 82';
// const arr2 = str2.split(' ').map(Number);
// console.log(divisibleSumPairs(100, 32, arr2), 158);


