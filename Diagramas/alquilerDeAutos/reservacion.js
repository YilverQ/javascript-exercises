/*__ Clase Reservacion __*/

import {Auto} from "./auto.js";

export class Reservacion{
	static contadorReservacion = 0;
	constructor(auto){
		this.idReservacion = ++Reservacion.contadorReservacion;
		this.auto = auto;
	}

	//Alquilar Hora.
	alquilarHora(hora){
		return `El auto será alquilado por: ${hora} horas`;
	}

	//Alquilar Día.
	alquilarDia(dia){
		return `El auto será alquilado por: ${dia} dias`;
	}

	//Fecha de entrega.
	fechaEntrega(fecha){
		return `El auto debe ser entregado: ${fecha}`;
	}


	//Getters and setters. 
	get getIdReservacion(){
		return this.idReservacion;
	}
	get getInfo(){
		return `id_Reservación: ${this.idReservacion}
				Caracteristicas del auto: 
				${this.auto.getInfo}`.split("\t").join("");
	}
}