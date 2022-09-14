/*__ Clase Pago __*/

export class Pago{
	static contadorPago = 0;
	constructor(pago){
		this.idPago = ++Pago.contadorPago;
		this.pago = pago;
	}

	//Getters and setters.
	get getIdPago(){
		this.idPago;
	}

	get getPago(){
		return this.pago;
	}
	set setPago(pago){
		return this.pago;
	}

	//Punto de venta.
	puntoDeVenta(){
		return `El pago ${this.pago} se hizo por Punto de Venta.`;
	}

	//Transferencia bancaria.
	transferencia(){
		return `El pago ${this.pago} se hizo por Transferencia.`;
	}

	//Efectivo.
	efectivo(){
		return `El pago ${this.pago} se hizo con Efectivo.`;
	}
}