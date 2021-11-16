
    function sumarUno (numero ){

        var promesa = new Promise ( function( resolve, reject ){
            if (numero >= 7){
                reject( 'el numero es muy alto');
            }

            setTimeout(function(){ //esta función se ejecuta después de 800ms
                resolve (numero + 1);
            }, 800);
        })
        return promesa;
    }

    sumarUno(4)
    .then (sumarUno)
    .then (sumarUno)
    .then( nuevonumero => {
        console.log(nuevonumero);
    })
    .catch( err => {
        console.log('error en promesa, ', err);
    })

    /*
    sumarUno(8)
    .then (nuevovalor => {
        console.log(nuevovalor)
    })
    .catch( err => {
        console.log('error en promesa, ', err);
    })
   */