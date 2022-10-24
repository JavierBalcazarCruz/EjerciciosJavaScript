const numeros = [10,20,30,40,50,60];

const [diez,veinte,, cuarenta, , sesenta] = numeros;

console.log(diez,veinte)

const numeros2 = [10,20,30,40,50,60];
const [ , ,treinta, ,cincuenta] = numeros2;
const [primero, ...tercero] = numeros2
console.log(tercero)