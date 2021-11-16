
//notación normal que regresa una promesa
function sumarLento( numero ){
    return new Promise( function ( resolve,reject) {
        setTimeout( function () {
          //  reject('sumar lento falló');
            resolve ( numero + 1 );
        }, 800)
    });
}

//notacion EmacScript6. Función de flecha que regresa una promesa
let sumarRapido = ( numero ) => {               //funcion de flecha con 1 argumento
    return new Promise( (resolve, reject) => { //función de flecha con 2 argumentos
        setTimeout( () => resolve (numero + 1), 300);
    });
}

function cuadrado (num){
    return num*num;
}
let cosas = [sumarLento(5), sumarRapido (10), cuadrado(10), 'hola mundo'];
//array de promesas
 Promise.all(cosas) // se ejecuta como una promesas
        .then ( respuestas => { 
    //en respuestas entran las resoluciones de cada una de las promesas del array en ESE ORDEN, aunque no coincidan
    //en el tiempo
            console.log(respuestas);
        })
        .catch( console.log )



    //se ejecuta siempre antes sumarRapido
//sumarLento( 5 ).then ( console.log ); //imprime el resultado de la promesa
//sumarRapido( 10 ).then (console.log );