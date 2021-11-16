
self.addEventListener('install', event => {
    console.log('SW: Instalando ...!!');
    const instalacion = new Promise ( (resolve, reject) => {
        setTimeout(() => {  //simulamos que las instalaciones duran 1 segundo
            console.log('Instalaciones terminadas ...');
            self.skipWaiting();
            resolve(); //termina
        }, 2000);
        
    });
    //espera hasta que la promesa 'instalacion' se resuelva
    event.waitUntil(instalacion)
});

/* 2-. Activación del SW */
// Cuando el SW toma el control de la aplicación
self.addEventListener('activate', event => {
    // borrar cache viejo generadas por el anterior service worker
    console.log ('SW2: Activo y listo para controlar la aplicación');
})
