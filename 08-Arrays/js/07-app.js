const carrito = []
function Producto(nombre,precio)
{
    this.nombre = nombre;
    this.precio = precio;
}

const product = new Producto('iPhone 14',300);
const product2 = new Producto('iPhone 14 pro',400);
const product3 = new Producto('iPhone 14 pro Max',1200);
const product4 = new Producto('iPhone 14 plus',1300);
const product5 = new Producto('Huawei',1300);
const product6 = new Producto('Samsung',1300);

let resultado;

resultado = [...carrito,product2];
resultado = [...resultado, product];
resultado = [product3, ...resultado];
resultado = [...resultado, product4];
resultado = [...resultado, product5];
resultado.push(product6);

console.table(resultado);

//elimina al final del arreglo
resultado.pop();
console.table(resultado);

//Elimina al inicio del arreglo
resultado.shift();
console.table(resultado);

//Eliminar elementos  de  otra posicion

let numeros = [1,2,3,4,5,6];

numeros.splice(2,2);

console.table(numeros);