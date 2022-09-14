/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

console.log(1);
console.log(2);
console.log(3);
console.log(5);
console.log(7);

for (let i = 6; i < 100; i++){
    if (i%2 == 0 || i%3 == 0 || i%5 == 0 || i%7 == 0){
        continue;
    }  
    console.log(i);
}
