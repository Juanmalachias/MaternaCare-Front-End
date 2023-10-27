import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartProvider, CartContext } from '../../contexts/CartContext';
import './Cart.css'

function Cart() {

  // const { productsCart, addProductToCart}
  // const [ product, setProductsCart] = useState(CartContext);
  const { productCart, clearCartCompra, clearCartDoa } = useContext(CartContext)
  const [qtd, setQtd] = useState(1)

  return (
    <>
      {productCart.length === 0 ? (
        <>
          <div className="header flex justify-center items-center">
            <div className='container text-white'>
              <div className="flex items-center justify-center py-4 ">
                <p>Você não adicionou nenhum produto!</p>
                <div className='hover:underline'><Link to='/produtos'><button className='navbotao font-bold'>Produtos</button></Link></div>
              </div>

            </div>
          </div>

        </>
      ) : (<>
        <div className="header flex justify-center items-center">
          <div className='container text-white'>
            <div className="flex items-center justify-center py-4 font-bold text-2xl">
              <p>Produtos adicionados</p>

            </div>

          </div>
        </div>


        <div className='containerCarrinho'>
          <div className=''>
            {productCart.map((produto) => (
              <div className='produtoCarrinho border rounded-3xl flex overflow-hidden'>
                <img className="fotoProduto" src={produto.foto}></img>
                <p className='nomeCarrinho'>{produto.nomeProduto}</p>
                <p className='precoCarrinho'>{produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                <div className='flex'>
                  <button onClick={() => setQtd(prev => prev - 1)}>-</button>
                  <h3 className='quantidadeCarrinho'>{qtd}</h3>
                  <button onClick={() => setQtd(prev => prev + 1)}>+</button>
                </div>
                <p className='precoCarrinho'>{(qtd * produto.preco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='botaoCarrinho'>
          <button className='botCompra font-bold' onClick={clearCartCompra}>Comprar</button>
          <button className='botCompra font-bold' onClick={clearCartDoa}>Doar</button>

        </div>

      </>)
      }
    </>
  )

}

export default Cart;