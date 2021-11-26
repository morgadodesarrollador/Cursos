import React, { Fragment, useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";

function App() {

  //crear una lista de productos
  //destructuring [state, función que ayuda a reescribir (agrega/elimina elementos del state]
  const [ productos, saveProductos ] = useState([ // valores iniciales
    { id: 1, nombre: 'camisa ReactJS', precio: 50 }, 
    { id: 2, nombre: 'camisa NodeJS', precio: 30 },
    { id: 3, nombre: 'camisa VueJS', precio: 40 },
    { id: 4, nombre: 'camisa AngularJS', precio: 55 }
  ]); 

  const fecha = new Date().getFullYear();
  return (
   // <div className="App">
    <Fragment>
      <Header 
        titulo = "Tienda Virtual OnLine"
        numero= "20"    
      />
      <h1>Listado de Productos</h1>
      { productos.map( producto => (  // producto => () equivale a producto => { return ... }
          <Producto 
            key = { producto.id } //hay q pasar al componente una key unica
            producto = { producto }
          />
      ))}
      <Footer
        fecha={fecha}
      />
     </Fragment>
   // </div>
  );
}

export default App;
