import React from "react";
//destructuring, extraemos las propiedades del PROP en variables
const Producto = ({ producto, carrito, agregarProductoCarrito, productos }) =>{
    const { nombre, precio, id } = producto;
    // agregar producto al carrito 
    const seleccionarProducto = (id) => {
        //filter itera en productos e instancia cada producto. 
        //hace un return del producto que verifica la id
        const prod = productos.filter( producto => producto.id === id)[0];
        console.log(prod);
        // NO carrito.push(prod). El STATE Carrito no se modifica directamente
        agregarProductoCarrito([
            //esta función automáticamente añade el producto al state carrito
            ...carrito, //operador Spread: copia el array del carrito
            prod
        ]);
    }
    // <> </> equivale a <Fragments></Fragments> y no es preciso realizar la importación
    return (
        
        <> 
            <h2>{ nombre } </h2>
            <p>$  { precio }</p>
            <button
                type="button"
                //cuando hagamos click ejecuta seleccionarProducto()
                //manejo de eventos en React
                onClick={ () =>  seleccionarProducto (id) } 
                //id="comprar"
            >Comprar</button>
         </>

    )
}
//document.querySelector('#comprar').addEventListener('click',) en JS
export default Producto;