var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var num1 = Number(lines[0]);
var num2 = Number(lines[1]);

var numP1 = num1*3.5;
var numP2 = num2*7.5;

var media = (numP1+numP2)/(3.5+7.5);
media = media.toFixed(5);

console.log("MEDIA = "+media);
