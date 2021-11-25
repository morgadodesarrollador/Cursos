import React from "react";

// usamos declaración de función
//function Header(props){
function Header({titulo, numero}){ //destructuring en objeto props

    const edad = 15;
    let mensaje;
    if (edad >= 18){
      mensaje = ' eres mayor de edad';
    }else {
      mensaje = ' no eres mayor de edad';
    };
    return( //Solo puede retornar un contenedor
        <header>
            <h1 className="encabezado"> {titulo }</h1>
            <h2>Dirección calle Turquesa número { numero }</h2>
            <p>Edad {edad} años, {mensaje}</p>
        </header>
    );
}

export default Header;