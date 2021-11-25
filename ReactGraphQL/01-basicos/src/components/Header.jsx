import React from "react";

// usamos declaración de función
function Header(){
    const edad = 15;
    let mensaje;
    if (edad >= 18){
      mensaje = ' eres mayor de edad';
    }else {
      mensaje = ' no eres mayor de edad';
    };
    return( //Solo puede retornar un contenedor
        <header>
            <h1 className="encabezado"> Tienda Online</h1>
            <h2>Hola Mundo</h2>
            <p>Edad {edad} años, {mensaje}</p>
        </header>
    );
}

export default Header;