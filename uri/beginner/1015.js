var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = lines[0].split(' ');
var b = lines[1].split(' ');

lines = a.concat(b);

var x1 = parseFloat(lines.shift());
var y1 = parseFloat(lines.shift());
var x2 = parseFloat(lines.shift());
var y2 = parseFloat(lines.shift());

var cal1 = Math.pow((x2-x1), 2);
var cal2 = Math.pow((y2-y1), 2);

var cal3 = Math.sqrt((cal1+cal2));

console.log(cal3.toFixed(4));
