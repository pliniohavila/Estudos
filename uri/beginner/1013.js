var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());

great1 = ((a+b+Math.abs(a-b)))/2; 
great2 = ((great1+c+Math.abs(great1-c)))/2; 

console.log(great2+" eh o maior");
