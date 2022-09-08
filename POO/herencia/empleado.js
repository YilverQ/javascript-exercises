/*__ Clase Empleado __*/
import {Persona} from "./persona.js";

export class Empleado extends Persona{
	static contadorEmpleado = 0;
	constructor(nombre, apellido, edad, salario){
		super(nombre, apellido, edad);
		this.salario = salario;
		this.idEmpleado = ++Empleado.contadorEmpleado;
	}

	//setters and getters.
	get getIdEmpleado(){
		return this.getIdEmpleado;
	}

	get getSalario(){
		return this.salario;
	}
	set setSalario(salario){
		this.salario = salario;
	}

	get infoEmpleado(){
		return `${this.infoPersona}\nid_Empleado: ${this.idEmpleado}\nSalario: ${this.salario}`;
	}
} 