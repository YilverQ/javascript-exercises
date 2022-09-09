/*__ Clase Monitor __*/
export class Monitor{
	static contadorMonitor = 0;
	constructor(marca, dimension){
		this.marca = marca;
		this.dimension = dimension; //Tamaño de la pantalla.
		this.idMonitor = ++Monitor.contadorMonitor;
	}

	//Setters and getters.
	get getIdMonitor(){
		return this.idMonitor;
	}

	get getMarca(){
		return marca;
	}
	set setMarca(marca){
		this.marca = marca;
	}

	get getDimension(){
		return this.dimension;
	}
	set setDimension(dimension){
		this.dimension = dimension;
	}

	//Información del monitor.
	get getInfo(){
		return `id_Monitor: ${this.idMonitor}
				Marca: ${this.marca}
				Dimensión de la pantalla: ${this.dimension}`.split("\t").join("");
	}
}