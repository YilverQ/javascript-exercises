/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
 //Que tengan la misma cantidad de palabras.
 //Que palabra1 tenga todas las letras de palabra2.
 //Si dos palabras son iguales no son anagramas.



class Anagrama{
    constructor(){
        this.palabra1 = "";
        this.palabra2 = "";
    }

    setPalabras(palabra1, palabra2){
        // Agregamos las palabras y cambiamos a minúsculas ambas cadenas
        this.palabra1 = palabra1.toLowerCase();
        this.palabra2 = palabra2.toLowerCase();
    }

    isAnagrama(){
        // Convertimos ambas cadenas en un arreglo
        palabra1 = this.palabra1.split("");
        palabra2 = this.palabra2.split("");

        // Ordenamos el arreglo.
        palabra1 = palabra1.sort();
        palabra2 = palabra2.sort();

        //Convertimos nuevamente a string.
        palabra1 = palabra1.join("");
        palabra2 = palabra2.join("");
  
  
        // Comparamos
        return (palabra1 === palabra2) ? true : false;
    }
}

const anagrama = new Anagrama();
let palabra1 = "Trata";
let palabra2 = "Tarta";
anagrama.setPalabras(palabra1, palabra2);
console.log(anagrama.isAnagrama());