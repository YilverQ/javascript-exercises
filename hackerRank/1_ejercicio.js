/*
	Dada una matriz cuadrada, calcule la diferencia absoluta entre las sumas de sus diagonales.
	3
	11 02 04
	04 05 06
	10 08 -12
	left = 4;
	right = 19;
	resultado = 15; 
*/


function diagonalDifference(arr) {
    // Write your code here
    let left = 0, right = 0, resultado = 0; 
    
    for (let i = 0; i< arr.length; i++){
        left += arr[i][i];
        right += arr[(arr.length - 1) - i][i];
    }
    resultado = Math.max(left, right) - Math.min(left, right);
    return resultado;
}