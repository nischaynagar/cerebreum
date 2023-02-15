import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import './style.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
