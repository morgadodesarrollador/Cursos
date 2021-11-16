
var request = new XMLHttpRequest();
//console.log(request);
request.open('GET', 'https://reqres.in/api/users', true);  //método, url, asíncrona
request.send(null); // mandar argumentos

//observamos los posibles cambios de estado que sufre la conexión
request.onreadystatechange = function ( state ){ //recibimos el estado
    //console.log(request);
    if (request.readyState == 4){
        //recibimos los datos en formato JSON string. Hemos de trensformarlos a obj JSON JS Para acceder a sus campos
        var resp = request.response;
        var data = JSON.parse(resp);
        console.log(data)
    }
}