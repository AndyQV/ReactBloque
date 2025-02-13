import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Boton from './Boton';

function App() {
  let [count, setCount] = useState(524);
  const sum = () => {
    setCount(count + 1);
    console.log(count)
  };
  const nombre = "Hugo Reyes";
  const elemento = <h1>Hello, {nombre}</h1> 
  return (
    <div>
      <Header/>
      <Boton name={"suma"} />
      <Boton name={} />
      <Boton name={} />
      <Footer/>
    </div>
  );
}

export default App;