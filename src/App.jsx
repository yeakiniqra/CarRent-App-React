import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import CarList from './Component/CarList';
import About from './Component/About';
import Contact from './Component/Contact';
import Login from './Component/Login';
import Checkout from './Component/Checkout';
import Footer from './Component/Footer';


function App() {

 

  return (
       <Router>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/CarList" element={<CarList  />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  </Router>
   
  )
}

export default App
