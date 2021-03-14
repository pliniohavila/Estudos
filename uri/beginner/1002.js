var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var r  = parseFloat(lines);
var pi  = 3.14159;
var r2 = Math.pow(r, 2);

var aCircle = pi * r2;

console.log("A="+aCircle.toFixed(4));
