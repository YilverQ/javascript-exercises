/*__ Clase Persona __*/

export class Persona{
	static contadorPersona = 0;

	constructor(nombre, apellido, edad){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad; 
		this.idPersona = ++Persona.contadorPersona; //Así se agrega un numero a la variable antes de guardarla.
	}

	//Setters and Getters
	get getIdPersona(){
		return this.idPersona;
	}

	get getNombre(){
		return this.nombre;
	}
	set setNombre(nombre){
		this.nombre = nombre;
	}

	get getApellido(){
		return this.apellido;
	}
	set setApellido(apellido){
		this.apellido = apellido;
	}

	get getEdad(){
		return this.edad;
	}
	set setEdad(edad){
		this.edad = edad;
	}

	//info
	get infoPersona(){
		return `${this.nombre} ${this.apellido} tiene ${this.edad} años. \nid_persona: ${this.idPersona}`;
	}
}