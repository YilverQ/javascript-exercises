/*__ Clase Computadora __*/
export class Computadora{
	static contadorComputadora = 0;
	constructor(nombre, monitor, teclado, mouse){
		this.nombre = nombre;
		this.monitor = monitor;
		this.teclado = teclado;
		this.mouse = mouse;
		this.idComputador = ++Computadora.contadorComputadora;
	}

	//Setters and getters.
	get getIdComputador(){
		return this.idComputador;
	}

	get getNombre(){
		return this.nombre;
	}
	set setNombre(nombre){
		this.nombre = nombre;
	}

	get getMonitor(){
		return this.monitor;
	}
	set setMonitor(monitor){
		this.monitor = monitor;
	}

	get getTeclado(){
		return this.teclado;
	}
	set setTeclado(teclado){
		this.teclado = teclado;
	}

	get getMouse(){
		return this.mouse;
	}
	set setMouse(mouse){
		this.mouse = mouse;
	}

	//Información del computador.
	get getInfo(){
		return `id_Computador: ${this.idComputador}
				Nombre: ${this.nombre}
				Monitor: ${this.monitor.getInfo}
				Teclado: ${this.teclado.getInfo}
				Mouse: ${this.mouse.getInfo}`.split("\t").join("");
	}
}