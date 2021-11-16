

fetch('https://reqres.in/api/users')
    .then( respuesta => respuesta.json())
    .then (data => {
        console.log(data);
        console.log (data.page);
        console.log(data.per_page);
    })
  
fetch ('https://www.wikipedia.org')
    .then ( resp => resp.text())
    .then ( html => {
        document.open();
        document.write( html );
        document.close();
    })


