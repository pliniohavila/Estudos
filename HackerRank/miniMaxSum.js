function miniMaxSum(arr) {
    // Write your code here
    let sumTotal = 0;
    let min = arr[0];
    let max = arr[0];

    arr.forEach((item) => {
        sumTotal += item;
        
        if (item < min) min = item;
            
        if (item > max) max = item;
    });

    const minimumSum = sumTotal - max;
    const maximunSum = sumTotal - min;

    console.log(`${minimumSum} ${maximunSum}`);
}

const arr = [1, 3, 5, 7, 9];

miniMaxSum(arr);
miniMaxSum([1, 2, 3, 4, 5]);