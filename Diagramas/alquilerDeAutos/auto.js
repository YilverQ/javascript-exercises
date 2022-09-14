/*__ Clase Auto __*/

export class Auto{
	static contadorAuto = 0;
	constructor(modelo, marca, color, matricula){
		this.idAuto = ++Auto.contadorAuto;
		this.modelo = modelo;
		this.marca = marca;
		this.color = color;
		this.matricula = matricula;
		this.disponibilidad = true;
	}

	//Setters and getters. 
	get getIdAuto(){
		return this.idAuto;
	}

	get getModelo(){
		return this.modelo;
	}
	set setModelo(modelo){
		this.modelo = modelo;
	}

	get getMarca(){
		return this.marca;
	}
	set setMarca(marca){
		this.marca = marca;
	}

	get getColor(){
		return this.color;
	}
	set setColor(color){
		this.color = color;
	}

	get getMatricula(){
		return this.matricula;
	}
	set setMatricula(matricula){
		this.matricula = matricula;
	}

	get getDisponibilidad(){
		return this.disponibilidad;
	}
	set setDisponibilidad(disponibilidad){
		this.disponibilidad = disponibilidad;
	}

	//Información del objeto.
	get getInfo(){
		return `id_Auto: ${this.idAuto}, \
				Modelo: ${this.modelo}, \
				Marca: ${this.marca}, \
				Color: ${this.color}, \
				Matricula: ${this.matricula}`.split("\t").join("");
	}
}