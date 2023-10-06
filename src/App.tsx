import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import Carousel from './components/carousel/carousel';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[35vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Carousel />
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;