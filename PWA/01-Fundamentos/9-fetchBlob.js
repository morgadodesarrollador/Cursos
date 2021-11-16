
const  imagenHTML = document.querySelector("img");

fetch('img/foto.jpg')
    .then( respuesta => respuesta.blob())
    .then( imagen => {
        //crea una dirección URL temporal para ponerlo como source de una imagen
        const imagenPath = URL.createObjectURL(imagen);
        console.log (imagenPath);
        imagenHTML.src = imagenPath; 
       // imagenHTML["src"] = imagenPath;
       console.log (imagenHTML);
        
    } )
/*
fetch('img/foto.jpg')
    .then( respuesta => { 
            return respuesta.blob()
    })
*/