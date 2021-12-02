import React from "react";
import PropTypes from "prop-types";
// usamos declaración de función

//destructuring de objeto props en el componente
const  Header = ({titulo = 'valor por default', numero, saludo}) => { 

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
            <p>Saludo: { saludo } </p>
            <h4> Numero: { numero } </h4>
            <button onClick={ (e) => handleAdd (e,4) }> numero ++ </button>
        </header>
    );
}
//<button onClick={ handleAdd }> numero ++ </button>
//definición de tipos y defaults en propiedades de entrada al componente
Header.propTypes = {
  saludo: PropTypes.string.isRequired,
  numero: PropTypes.number.isRequired
}
Header.defaultProps = {
  titulo: ' soy un titulo',
  numero: 5,
  saludo: 'Hola Mundo ...'
}
// eventos
const handleAdd = (ev, n) => {
  console.log (n);
  console.log (ev);
  //Header.props.saludo ++;
}
export default Header;


