// https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true

function sockMerchant(n, ar) {
    let pairs = [];
    let was = [];
    
    for (let i = 0; i < n; i++) {
        if (!was.includes(ar[i])) {
            let control = 0;
            let actual = ar[i];
            was.push(ar[i]);

            for (let j = i; j < n; j++) {
                if (ar[j] === actual) {
                    control++;
                    if (control === 2) {
                        pairs.push([ar[j], ar[j]]);
                        control = 0;
                    } 
                }
            }
        }
    }
    return pairs.length;
}

const print = console.log.bind(console);

const arr = [1, 2, 1, 2, 3, 1, 2];
const n = arr.length;
print(sockMerchant(n, arr), 2);
print(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]), 3);

const a = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
print(sockMerchant(10, a), 4);