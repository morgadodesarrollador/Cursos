// código relacionado con el service worker
//console.log('SW: Hola Mundo 2');
//var self = this;
self.addEventListener('fetch', event => {
    if (event.request.url.includes('style.css')){
        let respuesta = new Response(`
            body {
                background-color: red !important;
                color:pink;
            }       
        `, { 
            headers: {
                'Content-Type': 'text/css'
            }
        });
        event.respondWith(respuesta);
    }
});