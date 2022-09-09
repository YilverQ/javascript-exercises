/*__ Sistema de ventas __*/
/*__ Módulos __*/
import {Producto} from "./producto.js";
import {Orden} from "./orden.js";

/*__ Instancias Productos __*/
const arroz 	= new Producto("Arroz", 1, 5);
const helado 	= new Producto("Helado", 3, 2);
const manzana 	= new Producto("Manzana", 1, 4);
const vainilla 	= new Producto("Vainilla", 4, 1);
const chocolate = new Producto("Chocolate", 3, 1);
const zanahoria = new Producto("Zanahoria", 0.5, 2);

/*__ Instancias Orden __*/
const orden1 = new Orden();
const orden2 = new Orden();
const orden3 = new Orden();



/*__ Información de los productos __*/
console.log(helado.getInfo);
console.log(manzana.getInfo);
console.log(zanahoria.getInfo);

/*__ Información de las ordenes __*/
orden1.agregarProducto(arroz);
orden1.agregarProducto(helado);
orden1.agregarProducto(manzana);
console.log(orden1.getOrden);

orden2.agregarProducto(vainilla);
orden2.agregarProducto(chocolate);
orden2.agregarProducto(zanahoria);
console.log(orden2.getOrden);

orden3.agregarProducto(helado);
orden3.agregarProducto(manzana);
orden3.agregarProducto(vainilla);
console.log(orden3.getOrden);