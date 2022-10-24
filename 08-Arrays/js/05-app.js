const carrito = []
function Producto(nombre,precio)
{
    this.nombre = nombre;
    this.precio = precio;
}

const product = new Producto('Televisión',300);
const product2 = new Producto('Monitor',400);
const product3 = new Producto('Celular',1200);
const product4 = new Producto('Laptop',1300);

carrito.push(product);
carrito.push(product2);
carrito.push(product3);
carrito.unshift(product4);

console.table(carrito);
console.log(carrito);
