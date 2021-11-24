import React from 'react';
import Header from "./components/Header";

function App() {
  const edad = 18;
  return (
    <div className="App">
     <Header />
     <h2>Hola Mundo</h2>
     <p>Edad { edad } años</p>
    </div>
  );
}

export default App;
