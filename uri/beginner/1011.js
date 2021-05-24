var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var input = parseFloat(lines.shift());
var pi = 3.14159;
var volume = (4/3.0)*pi*Math.pow(input, 3);

volume = volume.toFixed(3);

console.log("VOLUME = "+volume);
