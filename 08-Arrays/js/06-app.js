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

let resultado;

resultado = [...carrito,product2];
resultado = [...resultado, product];
resultado = [product3, ...resultado];

console.table(resultado);