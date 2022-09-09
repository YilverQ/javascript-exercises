/*__ Clase Producto __*/

export class Producto{
	static contadorProducto = 0;
	constructor(nombre, precio, cantidad){
		this.nombre = nombre;
		this.precio = precio;
		this.cantidad = cantidad;
		this.idProducto = ++Producto.contadorProducto;
	}

	//Setters and getters.
	get getIdProducto(){
		return this.idProducto;
	}

	get getNombre(){
		return this.nombre;
	}
	set setNombre(nombre){
		this.nombre = nombre;
	}

	get getPrecio(){
		return this.precio;
	}
	set setPrecio(precio){
		this.precio = precio;
	}

	get getCantidad(){
		return this.cantidad;
	}
	set setCantidad(cantidad){
		this.cantidad = cantidad;
	}

	get getInfo(){
		return `id_Producto: ${this.idProducto}
				Nombre: ${this.nombre}
				Precio: ${this.precio}
				Cantidad: ${this.cantidad}`.split("\t").join(""); //split para eliminar las tabulaciones y join para convertir nuevamente a texto.
	}	

} 