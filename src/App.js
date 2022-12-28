import React from 'react'
import HeaderComponent from './Components/HeaderComponent';
import NavbarComponent from "./Components/NavbarComponent"
import DetailsComponent from './Components/DetailsComponent';
import IconComponent from './Components/IconComponent';
import About from './Components/About';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div className='App'>
      <NavbarComponent/>
      <HeaderComponent/>
      <DetailsComponent/>
      <IconComponent/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;