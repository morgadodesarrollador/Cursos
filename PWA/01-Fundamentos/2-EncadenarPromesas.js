
function sumarUno (numero ){

    var promesa = new Promise ( function( resolve, reject ){
        setTimeout(function(){ //esta función se ejecuta después de 800ms
            resolve (numero + 1);
        }, 800);
    })
    return promesa;
}
sumarUno(5)
    .then (sumarUno)
    .then (sumarUno)
    .then( nuevonumero => {
        console.log(nuevonumero);
    });



function sumarUno (numero ){

    var promesa = new Promise ( function( resolve, reject ){
        setTimeout(function(){ //esta función se ejecuta después de 800ms
            resolve (numero + 1);
        }, 800);
    })
    return promesa;
}

sumarUno(5)
    .then (nuevonumero => {
        console.log(nuevonumero);
        return sumarUno( nuevonumero )
    })
    .then (nuevonumero => {
        console.log(nuevonumero);
        return sumarUno( nuevonumero )
    })
    .then( nuevonumero => {
        console.log(nuevonumero);
    })
/*
sumarUno(5)
    .then( function( nuevonumero ){//sdispara el then cuando se resuelve la promesa
        console.log(nuevonumero)
    }) 
*/