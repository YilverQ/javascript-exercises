/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

 function calcular(ladoA, ladoB) {
     triangulo = (ladoA * ladoB) / 2;
     cuadrado = ladoA * ladoA;
     rectangulo = ladoA * ladoB;

     return `Triángulo: ${triangulo}
             Cuadrado: ${cuadrado}
             Rectángulo: ${rectangulo}`.split("\t").join("");
 }

 console.log(calcular(3,6));