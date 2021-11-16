

fetch('notFound.html')
    .then( resp => resp.text() )
    .then( resphtml => {
        console.log(resphtml);
        let body = document.querySelector('body');
        body.innerHTML = resphtml;
    })
    .catch( error => {
        console.log('error en la petición');
        console.log(error);
    })
    