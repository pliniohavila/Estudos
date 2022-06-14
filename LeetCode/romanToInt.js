var romanToInt = function(s) {
    let sum = 0;
    
    for (let i=0; i < s.length; i++) {
        if (s[i] == 'I') {
            sum += 1;
        }
        else if (s[i] == 'V') {
            if (s[i - 1] == 'I') {
                sum -= 1;
                sum += 4;
            }
            else {
                sum += 5;
            }
        }
        else if (s[i] == 'X') {
            if (s[i - 1] == 'I') {
                sum -= 1;
                sum += 9;
            }
            else {
                sum += 10;
            }
        }
        else if (s[i] == 'L'){
            if (s[i - 1] == 'X') {
                sum -= 10;
                sum += 40;
            }
            else {
                sum += 50;
            }
        }
        else if (s[i] == 'C'){
            if (s[i - 1] == 'X') {
                sum -= 10;
                sum += 90;
            }
            else {
                sum += 100;
            }
        }
        else if (s[i] == 'D'){
            if (s[i - 1] == 'C') {
                sum -= 100;
                sum += 400;
            }
            else {
                sum += 500;
            }
        }
        else if (s[i] == 'M'){
            if (s[i - 1] == 'C') {
                sum -= 100;
                sum += 900;
            }
            else {
                sum += 1000;
            }
        }
    }
    return sum;
};

console.log(romanToInt('XXVII'));
console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
