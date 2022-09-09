/*__ Class Orden __*/

export class Orden{
	static contadorOrden = 0;
	static get MAX_PRODUCT(){
		return 5;
	}

	constructor(){
		this.productos = [];
		this.idOrden = ++Orden.contadorOrden;
		//this.contadorProductosAgregados = 0; //Por ahora no hace falta.
	}

	//Setters and getters.
	get getIdOrden(){
		return this.idOrden;
	}

	//Agregar producto.
	agregarProducto(producto){
		if (this.productos.length < Orden.MAX_PRODUCT) {
			this.productos.push(producto);
			return "Producto agregado correctamente.";
		}else{
			return "Lo siente, ya se alcanzó el límite de productos";
		}
	}

	//Calcular total.
	calcularTotal(){
		let total = 0;
		for (let producto of this.productos){
			total += producto.getPrecio * producto.getCantidad;
		}
		return total;
	}

	//Mostrar orden.
	get getOrden(){
		let productoOrden = "";
		for (let producto of this.productos){
			productoOrden += producto.getInfo + "\n\n";
		}
		return `id_Orden: ${this.idOrden}
				--------------
				Productos: \n${productoOrden}
				Total a pagar: ${this.calcularTotal()}`.split("\t").join("");
	} 
}