// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true&h_r=next-challenge&h_v=zen


function timeConversion(s) {
    const hour = s.slice(0, 2);
    let r = '';

    if (s.slice(-2) === 'PM') {
        if (hour !== '12') {
            const newHour = Number(hour) + 12;
            r = s.replace(hour, newHour);
            return r.replace('PM', '');
        } 
        r = s.replace('PM', '');
    } else {
        if (hour === '12') {
            r = s.replace(/^(12)/, '00');
            return r.replace('AM', '');
        }
        r = s.replace('AM', '');
    }

    return r;
}

console.log(timeConversion('07:05:45PM')); 
console.log(timeConversion('07:05:45AM')); 
console.log(timeConversion('12:05:45AM')); 
console.log(timeConversion('12:05:45PM')); 