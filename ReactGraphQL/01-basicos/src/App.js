import React, { Fragment, useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";
function App() {

  //crear una lista de productos
  //destructuring [state, función que ayuda a reescribir (agrega/elimina elementos del state]
  //stete de Producto
  const [datos, setdatos ] = useState([1,2,2]);
  console.log (datos, setdatos);
  const [ productos, saveProductos ] = useState([ // valores iniciales
    { id: 1, nombre: 'camisa ReactJS', precio: 50 }, 
    { id: 2, nombre: 'camisa NodeJS', precio: 30 },
    { id: 3, nombre: 'camisa VueJS', precio: 40 },
    { id: 4, nombre: 'camisa AngularJS', precio: 55 }
  ]); 
  // state de carrito de compras. 
  // Carrito: valor inicial y agregarProductoCarrito: funcion q gestiona el carrito
  const [ carrito, agregarProductoCarrito] = useState([])

  const fecha = new Date().getFullYear();
  return (
   // <div className="App">
    <Fragment>
      <Header 
        titulo = "Tienda Virtual OnLine"
        numero= { 20 } //un número    
      />
      <main>
      <h1>Listado de Productos</h1>
      { productos.map( producto => (  // producto => () equivale a producto => { return ... }
          <Producto 
            key = { producto.id } //hay q pasar al componente una key unica
            producto = { producto }
            productos = { productos }
            carrito = { carrito }
            agregarProductoCarrito = { agregarProductoCarrito }
            
          />
      ))}
      <Carrito 
        carrito = { carrito }
      />
      </main>
      <Footer
        fecha={fecha}
      />
     </Fragment>
   // </div>
  );
}

export default App;
