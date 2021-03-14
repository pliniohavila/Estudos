var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = Number(lines.shift());
var b = Number(lines.shift());
var c = Number(lines.shift());
var d = Number(lines.shift());

diferenca  = (a*b) - (c*d);

console.log("DIFERENCA = "+diferenca);
