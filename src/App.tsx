import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import Home from './paginas/home/Home';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import FormularioProdutos from './components/produtos/formularioProdutos/FormularioProdutos';
import DeletarProdutos from './components/produtos/deletarProdutos/DeletarProdutos';
import Carousel from './components/carousel/carousel';
import Card from './components/cards/Card';
import Doacao from './components/doacao/Doacao';
import Perfil from './paginas/perfil/Perfil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sobre from './paginas/sobre/Sobre';
import Telemedicina from './paginas/telemedicina/telemedicina';
import Dicas from './paginas/dicas/dicas';
import CartContext from './contexts/CartContext';
import Cart from './components/carrinho/Cart';




function App() {

  /*const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;*/

  return (
    <>
      <div className='fundoCinza'>
        <AuthProvider>
          <CartContext>
            <ToastContainer />
            <BrowserRouter>
              <Navbar />
              <div className='min-h-[80vh]'>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Home>
                        <Carousel />
                        <Card />
                        <Doacao />
                      </Home>
                    }
                  />
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
                  <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                  <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                  <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                  <Route path="/produtos" element={< ListaProdutos />} />
                  <Route path="/cadastroProduto" element={<FormularioProdutos />} />
                  <Route path="/editarProduto/:id" element={<FormularioProdutos />} />
                  <Route path="/deletarProduto/:id" element={<DeletarProdutos />} />
                  <Route path="/perfil" element={<Perfil />} />
                  <Route path="/sobre" element={<Sobre />} />
                  <Route path="/telemedicina" element={<Telemedicina />} />
                  <Route path="/dicas" element={<Dicas />} />
                  <Route path='/carrinho' element={<Cart />} />
                </Routes>
              </div>
              <Footer />
            </BrowserRouter>
          </CartContext>
        </AuthProvider>
      </div>
    </>
  );
}
export default App;