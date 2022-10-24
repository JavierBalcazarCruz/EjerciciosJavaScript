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

carrito.forEach(function(producto){
    console.log(producto.producto)
})