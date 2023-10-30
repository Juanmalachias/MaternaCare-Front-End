import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext';
import './Cart.css'

function Cart() {

  
  const { productCart, clearCartCompra, clearCartDoa, totalCart } = useContext(CartContext)
  
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
              </div>
            ))}
          </div>
        </div>
        <div>
          <p>Total: {totalCart()}</p>
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