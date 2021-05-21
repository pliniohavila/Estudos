var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var names = lines[0];
var salBase = parseFloat(lines[1]);
var percenetual = parseFloat(lines[2]) * 0.15;

var result = (salBase + percenetual).toFixed(2);

console.log("TOTAL = R$ "+result);
