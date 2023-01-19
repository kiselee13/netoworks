import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cards from './components/Cards/Cards';
import Category from './components/Category/Category';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Cards/>
      <Category/>
      <Service/>
      <Footer/>

    </div>
  );
}

export default App;
