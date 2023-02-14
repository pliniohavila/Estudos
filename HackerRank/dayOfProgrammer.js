
function dayOfProgrammer(year) {
    if (year === 1918) return transition();
    if (year > 1917) {
        return gregorian();
    } else {
        return julian();
    }

    function gregorian() {
        if (year % 100 === 0 && year % 400 === 0) {
            return `12.09.${year}`;
        }
        if (year % 4 === 0 && year % 100 !== 0) {
            return `12.09.${year}`;
        } 
        else {
            return `13.09.${year}`;
        }
    }

    function julian() {
        if (year % 4 === 0) {
            return `12.09.${year}`;
        } else {
            return `13.09.${year}`;
        }
    }

    function transition() {
        const days = 31 + 14 + 31 + 30 + 31 + 30 + 31 + 31;
        const day = 256 - (days + 1);
        return `${day}.09.${year}`;
    }
}

console.log(dayOfProgrammer(1918));
console.log(dayOfProgrammer(2016), '12.09.2016');
// dayOfProgrammer(1984);
// dayOfProgrammer(2020);