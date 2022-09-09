/*__ Módulo __*/
import {DispositivoEntrada} from "./dispositivoEntrada.js";

/*__ Clase Mouse __*/
export class Mouse extends DispositivoEntrada{
	static contadorMouse = 0;
	constructor(tipo, marca){
		super(tipo, marca);
		this.idMouse = ++Mouse.contadorMouse;
	}

	//información del objeto.
	get getInfo(){
		return `id_Mouse: ${this.idMouse}
				Tipo de entrada: ${this.tipoDeEntrada}
				Marca: ${this.marca}`.split("\t").join("");
	}
}