// código relacionado con el service worker
//console.log('SW: Hola Mundo 2');
//var self = this;
self.addEventListener('fetch', event => {
    const respuesta = 
        fetch( event.request )
        .then( resp => { 
            if ( resp.ok ){ //si es true devuelvo a la app la misma respuesta
                return resp
            }else{ //si es false(no se carga la imagen), devuelvo otra
                return fetch('img/vscode.png')
            }
        });
    event.respondWith( respuesta )
});