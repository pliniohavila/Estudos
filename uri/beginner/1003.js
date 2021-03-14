var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var num1 = Number(lines[0]);
var num2 = Number(lines[1]);
var soma = num1+num2;
console.log("SOMA = "+soma);
