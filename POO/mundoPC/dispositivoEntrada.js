/*__ DispositivoEntrada __*/

export class DispositivoEntrada{
	constructor(tipo, marca){
		this.tipoDeEntrada = tipo;
		this.marca = marca;
	}

	//Setters and getters.
	get getTipoDeEntrada(){
		return this.tipoDeEntrada;
	}
	set setTipoDeEntrada(tipo){
		this.tipoDeEntrada = tipo;
	}

	get getMarca(){
		return this.marca;
	}
	set setMarca(marca){
		this.marca = marca;
	}
}