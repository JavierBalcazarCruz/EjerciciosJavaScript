const name = prompt('Cúal es tu nombre:');
//Toma el nombre y lo muestra en pantalla


/* Comentario de multiples
lineas
*/


function hola(name)
{
    document.querySelector('.contenido').innerHTML = `${name} esta aprendiendo Javascript`;
}

hola(name);