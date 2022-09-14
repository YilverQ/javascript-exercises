/*__ Class Cliente __*/

export class Cliente{
	static contadorCliente = 0;
	constructor(nombre, datosBancarios){
		this.idCliente = ++Cliente.contadorCliente;
		this.nombre = nombre;
		this.datosBancarios = datosBancarios;
	}

	//Reservación()
	reservacion(tipo){
		return `El cliente ${this.nombre} está realizando una reservación ${tipo}`;
	}

	//Getters and setters.
	get getIdCliente(){
		return this.idCliente;
	}

	get getNombre(){
		return this.nombre;
	}
	set setNombre(nombre){
		this.nombre = nombre;
	}

	get getDatosBancario(){
		return this.datosBancarios;
	}
	set setDatosBancarios(datos){
		this.datosBancarios = datos;
	}
cd 
	get getInfo(){
		return `id_Cliente: ${this.idCliente}, \
				Nombre: ${this.nombre}, \
				Datos Bancario: ${this.datosBancarios}`.split("\t").join("");
	}
}