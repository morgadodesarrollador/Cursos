


function sumarUno (numero, callback ){
    setTimeout(function(){ //esta función se ejecuta después de 800ms
        callback (numero + 1);
    }, 800);
    
}

sumarUno (44, function(nuevovalor){ //mando el 4 y la función que se instancia al callback
    console.log (nuevovalor);
});
