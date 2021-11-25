import React from 'react';

//usamos arrow functions
const Footer = ({fecha}) => { 
    return (
        <footer>
            <h3>Todos los derechos reservados { fecha }  </h3>
        </footer>
    )
}

export default Footer;