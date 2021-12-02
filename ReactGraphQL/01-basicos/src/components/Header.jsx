import React, {useState} from "react";
import PropTypes from "prop-types";
// usamos declaración de función

//destructuring de objeto props en el componente
const  Header = ({titulo = 'valor por default', numero, saludo}) => { 
   
    const [ contador, setContador ] = useState (0);
// eventos
    const handleAdd = (ev, n) => {
   //   setContador (contador + 1); // si tengo acceso al contador
      setContador ( (c) => c + 2 ); // recoge el valor anterior del conuter en el state y lo incrementa
      //contador ++;
    }
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
            <h5>Contador: { contador } </h5>
            <button onClick={ handleAdd }> numero ++ </button>
        </header>
    );
    
}
//<button onClick={ (e) => handleAdd (e,4) }> numero ++ </button>
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

export default Header;


