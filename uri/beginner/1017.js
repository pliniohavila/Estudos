var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var time = parseFloat(lines.shift());
var aveSpeed = parseFloat(lines.shift());

var result = ((aveSpeed*time)/12).toFixed(3);

console.log(result);
