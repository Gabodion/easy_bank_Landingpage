import React from 'react';
import "./App.css"
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Blog/>
      <Footer/>

    </>
  );
}

export default App;
