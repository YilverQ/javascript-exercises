/*__ Clase Orden __*/
export class Orden{
	static contadorOrden = 0;
	constructor(){
		this.computadoras = [];
		this.idOrden = ++Orden.contadorOrden;
	}

	//Setters and getters.
	get getIdOrden(){
		return this.idOrden;
	}

	get getComputadoras(){
		return this.computadoras;
	}

	//Agregar computadora.
	agregarComputadora(computadora){
		this.computadoras.push(computadora);
	}

	mostrarComputadoras(){
		let orden = "";
		for (let i of this.computadoras){
			orden += i.getInfo + "\n";
		}
		return orden;
	}

	//mostrar Orden.
	get getInfo(){
		return `id_Orden: ${this.idOrden}
				Computadoras: ${this.mostrarComputadoras()}`.split("\t").join("");
	}
} 