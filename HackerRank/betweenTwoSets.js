const print = console.log.bind(console);

export function euclidesAlgorithm(a, b) {
    // Rearrange the numbers so thet 'a' is the largest and 
    // 'b' is the smallest
    if (b > a) {
        const tmp = a;
        a = b;
        b = tmp;
    }

    if (a % b === 0) return b;

    return euclidesAlgorithm(b, a % b);
}

function euclidesAlgorithmArray(arr) {
    let mdc = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        mdc = euclidesAlgorithm(mdc, arr[i + 1]);
    }
    return mdc;
}

function getMMC(a, b) {
    const mmc = (a * b) / euclidesAlgorithm(a, b);
    return mmc;
}


function mmcArray(arr) {
    let n = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        n = getMMC(n, arr[i + 1]);
    }
    return n;
}


function getTotalX(a, b) {
    const mmc = mmcArray(a);
    const mdc = euclidesAlgorithmArray(b)
    let start = mmc;
    let result = 0;

    while (start <= mdc) {
        if (mdc % start === 0) result++;
        start += mmc;
    }
    return result;
}

const a = [2, 4];
const b = [16, 32, 96];

print(getTotalX(a, b), 3);
print(getTotalX([2, 6], [24, 36]), 2);