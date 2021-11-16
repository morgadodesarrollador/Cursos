
function sumarLento( numero ){
    return new Promise( function ( resolve,reject) {
        setTimeout( function () {
            reject('sumar lento falló');
         //  resolve ( numero + 1 );
        }, 200)
    });
}

let sumarRapido = ( numero ) => {              
    return new Promise( (resolve, reject) => { 
        setTimeout( () => resolve (numero + 1), 300);
    });
}

Promise.race([sumarRapido(5), sumarLento(3)])
    .then( respuestas => { 
        console.log(respuestas);
    })
    .catch( console.log)
