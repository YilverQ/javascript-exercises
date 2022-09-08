/*Modulos*/
import {Persona} from './persona.js';
import {Cliente} from './cliente.js';
import {Empleado} from './empleado.js';


/*Fecha*/
let fecha = new Date();
const fechaInscripcion = () =>{
	return `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
}


/*Instancias*/
let persona = new Persona("Beto", "Rodriguez", 26);
let cliente = new Cliente("María", "Suertes", 22, fechaInscripcion());
let empleado = new Empleado("Hector", "Vida", 32, "4.500$");


/*Información*/
console.log("Persona:")
console.log(persona.infoPersona);
console.log(); //Imprime espacio;
console.log(); //Imprime espacio;

console.log("Cliente:")
console.log(cliente.infoCliente);
console.log(); //Imprime espacio;
console.log(); //Imprime espacio;

console.log("Empleado:")
console.log(empleado.infoEmpleado);