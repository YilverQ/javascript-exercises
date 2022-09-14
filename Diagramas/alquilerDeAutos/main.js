/*__ Módulos __*/
import {Cliente} from "./cliente.js";
import {Auto} from "./auto.js";
import {Reservacion} from "./reservacion.js";
import {Pago} from "./pago.js";


/*__ Instancias de "Cliente" __*/
const cliente1 = new Cliente("Juan", "B-12345");
const cliente2 = new Cliente("Marcos", "B-61234");
const cliente3 = new Cliente("María", "B-21903");
const cliente4 = new Cliente("Betty", "A-19401");
const cliente5 = new Cliente("Victoria", "C-90531");
let clientes = [cliente1, cliente2, cliente3, cliente4, cliente5];


/*__ Instancias de "Auto" __*/
const auto1 = new Auto("Xr10", "Mazda", "#fr2", "A24-B32");
const auto2 = new Auto("Ford GT", "Ford", "#003", "C15-4G2");
const auto3 = new Auto("Civic", "Honda", "#f21", "D22-1C1");
const auto4 = new Auto("Corolla", "Chevrolet", "#003", "RT1-766");
const auto5 = new Auto("4Runner", "Toyota", "#de2", "ASC-132");
let autos = [auto1, auto2, auto3, auto4, auto5];


/*__ Instancias de "Reservacion" __*/
const reservar1 = new Reservacion(auto1);
const reservar2 = new Reservacion(auto2);
const reservar3 = new Reservacion(auto3);
const reservar4 = new Reservacion(auto4);
const reservar5 = new Reservacion(auto5);
let reservaciones = [reservar1, reservar2, reservar3, reservar4, reservar5];

/*__ Instancias de "Pago" __*/
const pago1 = new Pago(2500);
const pago2 = new Pago(1200);
const pago3 = new Pago(1500);
const pago4 = new Pago(1800);
const pago5 = new Pago(3000);
let pagos = [pago1, pago2, pago3, pago4, pago5];




/*__ Testing __*/
let tipoReservacion = ["Teléfonica", "Online", "Presencial"];
clientes.forEach( (cliente, iterador) => {
	console.log(cliente.getInfo);
	let tipo = tipoReservacion[(iterador + 1) % tipoReservacion.length];
	console.log(cliente.reservacion(tipo));
	console.log();
})

autos.forEach( auto => {
	console.log(auto.getInfo);
})

