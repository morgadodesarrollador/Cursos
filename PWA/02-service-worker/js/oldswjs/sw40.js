// código relacionado con el service worker
//console.log('SW: Hola Mundo 2');
//var self = this;
self.addEventListener('fetch', event => {
    if (event.request.url.includes('main.jpg')){
        let respuesta = fetch('img/main-patas-arriba.jpg');
        event.respondWith(respuesta);
    }
});