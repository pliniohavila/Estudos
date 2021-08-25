
function binarySearch(arr, target) 
{
    let min = 0;
    let max = arr.length - 1;
	// Primeiro palpite
    let p = Math.trunc((max + min) / 2); 
	
    // Nesta versão não há a checagem direta, apenas executa o WHILE se o palpite foi diferente do target
    while (arr[p] !== target )
    {
		if (max < min) // Checa se tem o target na array
		{
			console.log("No exist");
			return -1;
        else if (arr[p] < target)// Se o target for maior que o palpite
        {
			min = p + 1; 
			p = Math.trunc((max + min) / 2);
        }
		// Se o target for menor que o palpite
        else if (arr[p] >  target) {
            max = p - 1;
            p = Math.trunc((max + min) / 2);
        }
    }
	// Retorno o indice da posição 
    return p; 
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const result = binarySearch(primes, 89);
console.log("Index: ", result);
console.log("Target: ", primes[result]);


Khan Academy Soluction

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
        
    while (min <= max )
    {
        guess = floor((max + min) / 2);
		if (array[guess] === targetValue)
        {
			return guess;
        }
        else if (array[guess] <  targetValue) 
        {
            min = guess + 1; 
        }
        else
        {
            max = guess - 1;
        }
    }
    return -1; 
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);

//Program.assertEqual(doSearch(primes, 73), 20);

// FINAL

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var countGuess = 0;
        
    while (min <= max )
    {
        guess = floor((max + min) / 2);
        println(guess);
        countGuess += 1;
		if (array[guess] === targetValue)
        {
            println(countGuess);
			return guess;
        }
        else if (array[guess] <  targetValue) 
        {
            min = guess + 1; 
        }
        else
        {
            max = guess - 1;
        }
    }
    return -1; 
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);
/*
Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 2), 0);
Program.assertEqual(doSearch(primes, 89), 23);*/