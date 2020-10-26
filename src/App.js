import React from 'react';
import Context from './Context';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <Context>
    <div className="App">
      <Header/>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
    </Context>
  );
}

export default App;
