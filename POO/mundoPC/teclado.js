/*__ Módulo __*/
import {DispositivoEntrada} from "./dispositivoEntrada.js";

/*__ Clase Teclado __*/
export class Teclado extends DispositivoEntrada{
	static contadorTeclado = 0;
	constructor(tipo, marca){
		super(tipo, marca);
		this.idTeclado = ++Teclado.contadorTeclado;
	}

	//Información del objeto.
	get getInfo(){
		return `id_Teclado: ${this.idTeclado}
				Tipo de entrada: ${this.tipoDeEntrada}
				Marca: ${this.marca}`.split("\t").join("");
	}
}