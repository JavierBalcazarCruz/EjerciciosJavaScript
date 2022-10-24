const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible:true,
    info:{
        medidas:{
            peso:'1kg',
            medida:'1m'
        },
        fabricacion:{
            pais:'México',
            fecha:'30-08-1991'
        }
    }
}

Object.seal(producto)
console.log(producto)
producto.disponible = false;
console.log(producto)
console.log(Object.isSealed(producto))