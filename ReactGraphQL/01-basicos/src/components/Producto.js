import React from "react";

const Producto = ({ producto }) =>{
    const { nombre, precio, id } = producto;
    // agregar producto al carrito de
    const seleccionarProducto = (id) => {
        console.log('comprando el producto ', id );
    }
    return (
        <div> 
            <h2>{ nombre } </h2>
            <p>$  { precio }</p>
            <button
                type="button"
                //cuando hagamos click ejecuta seleccionarProducto()
                //manejo de eventos en React
                onClick={ () =>  seleccionarProducto (id) } 
                //id="comprar"
            >Comprar</button>
         </div>

    )
}
//document.querySelector('#comprar').addEventListener('click',) en JS
export default Producto;