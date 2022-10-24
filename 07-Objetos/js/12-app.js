//Object literal 
const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible:true,
    mostrarInfo: function (){
        console.log(`El producto: ${this.nombre} tiene precio de ${this.precio}`)
    }
}


//Object constructor

function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
}

const product = new Producto('tv',500);
console.log(product);

const product2 = new Producto('Queso',800);
console.log(product2)