import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import Home from './paginas/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import FormularioProdutos from './components/produtos/formularioProdutos/FormularioProdutos';
import DeletarProdutos from './components/produtos/deletarProdutos/DeletarProdutos';
import Carousel from './components/carousel/carousel';
import Card from './components/cards/Card';
import Doacao from './components/doacao/Doacao';


function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route
                path="/home"
                element={
                  <Home>
                    <Carousel />
                    <Card />
                    <Doacao />
                  </Home>
                }
              />
              <Route path="/categoria" element={<ListaCategoria />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria/>} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria/>} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria/>} />
              <Route path="/produtos" element={< ListaProdutos/>} />
              <Route path="/cadastroProduto" element={<FormularioProdutos />} />
              <Route path="/editarProduto/:id" element={<FormularioProdutos />} />
              <Route path="/deletarProduto/:id" element={<DeletarProdutos />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;