const carrito = [
    {
        producto:'iPhone 14',
        precio: 12000
    },
    {
        producto:'iPhone 14 Plus',
        precio: 13000
    },
    {
        producto:'iPhone 14 Pro',
        precio: 14000
    },
    {
        producto:'iPhone 14 Pro Max',
        precio: 15000
    },
    {
        producto:'iPhone 13',
        precio: 13000
    }
];


const bolsaTotal = carrito.map(function(prod){
    return `El ${prod.producto} tiene un costo de ${prod.precio}`;
})

console.log(bolsaTotal)