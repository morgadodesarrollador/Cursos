if ('serviceWorker' in navigator) {
  //  console.log ('podemos usarlo');
}
// confitmar si podemos usar el ServiceWorker
if (navigator.serviceWorker){
 //   console.log ('podemos usarlo');
    navigator.serviceWorker.register('/sw.js')
}
