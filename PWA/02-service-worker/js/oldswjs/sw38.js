// código relacionado con el service worker
//console.log('SW: Hola Mundo 2');
//var self = this;
self.addEventListener('fetch', event => {
    if (event.request.url.includes('.jpg')){
        let foto = fetch('img/vscode.png');
       // let foto = fetch(event.request.url);
       // let foto = fetch(event.request);
        event.respondWith (foto);
    };
});