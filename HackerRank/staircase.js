function staircase(n) {
    for (let i = 0; i < n; i++ ) {
        let blank = '' ;
        let symbol = '';

        for (let j = 0; j <= i; j++) {
            symbol += '#';
        }

        for (let k =  n - 1; k > i; k--) {
            blank += ' ';
        }

        const output = blank + symbol;

        console.log(output);
    }
}

staircase(6);