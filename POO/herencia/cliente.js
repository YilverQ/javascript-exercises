/*__ Clase Cliente __*/
import {Persona} from './persona.js';

export class Cliente extends Persona{
	static contadorCliente = 0;
	
	constructor(nombre, apellido, edad, fecha){
		super(nombre, apellido, edad);
		this.fechaInscripcion = fecha;
		this.idCliente = ++Cliente.contadorCliente;
	}

	//setter and getters
	get getIdCliente(){
		return this.idCliente;
	}

	get getFechaInscripcion(){
		return this.fechaInscripcion;
	}

	get infoCliente(){
		return `${this.infoPersona}\nid_Cliente: ${this.idCliente}\nFecha de Inscripcion: ${this.fechaInscripcion}`;
	}
}