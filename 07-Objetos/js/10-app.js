const producto = {
    nombre: 'Monitor',
    precio: 300,
    disponible:true,
}
const medidas = {
    peso:'1kg',
    medida:'1m'
}

console.log(producto)
console.log(medidas)

const res1 = Object.assign(producto,medidas);
const res2 = {...producto,...medidas}

console.log(res1)
console.log(res2)