

fetch('https://reqres.in/api/users/1')
    .then( respuesta => {
        respuesta.json().then(usuario => {
            console.log(usuario.data.email)
        });
    })
    
    