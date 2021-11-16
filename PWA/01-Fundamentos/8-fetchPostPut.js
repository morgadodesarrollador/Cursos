

let usuario = {
    nombre: 'Jose Antonio Morgado',
    categoria: 'analista programador',
    departamento: 'desarrollo de aplicaciones'
}

fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify (usuario), //data 
    headers: { //configuracion de las cabeceras de la request que envio
        'Content-Type': 'application/json'
    }
})
    .then( respuesta => respuesta.json() )
    .then( console.log )
    .catch ( error => {
        console.log ('Error en la petición'),
        console.log (error);
    })
    