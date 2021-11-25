import React, { Fragment } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const fecha = new Date().getFullYear();
  return (
   // <div className="App">
    <Fragment>
      <Header 
        titulo = "Tienda Virtual OnLine"
        numero= "20"    
      />
      <Footer
        fecha={fecha}
      />
     </Fragment>
   // </div>
  );
}

export default App;
