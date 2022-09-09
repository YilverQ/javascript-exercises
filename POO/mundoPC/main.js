/*__ Módulo __*/
import {Teclado} from "./teclado.js";
import {Mouse} from "./mouse.js";
import {Monitor} from "./monitor.js";
import {Computadora} from "./computadora.js";
import {Orden} from "./orden.js";

/*Instancias*/
const teclado = new Teclado("Bluetooth", "Samsung");
const mouse = new Mouse("USB", "HP");
const monitor = new Monitor("BENQ", "17¨");
const computadora = new Computadora("Canaima", monitor, teclado, mouse);

const orden = new Orden();
orden.agregarComputadora(computadora);

/*
console.log(teclado.getInfo);
console.log(mouse.getInfo);
console.log(monitor.getInfo);
console.log(computadora.getInfo);
*/
/*Información*/
console.log(orden.getInfo);