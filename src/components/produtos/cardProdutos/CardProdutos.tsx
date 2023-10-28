import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'


import './cardProdutos.css';
import { AuthContext } from '../../../contexts/AuthContext'
import { ShoppingCart } from '@phosphor-icons/react'
import { CartContext } from '../../../contexts/CartContext';



interface CardProdutosProps {
  post: Produto
}

function CardProdutos({ post }: CardProdutosProps) {

  const { usuario, handleLogout } = useContext(AuthContext);
  const { addProductToCart } = useContext(CartContext)


  return (
    <div className='cardProdutos border rounded-3xl	 flex flex-col  overflow-hidden justify-between'>
      <div>

        <div className='p-4 px-4 '>
          <div className='flex justify-center'>
            <img className="rounded-2xl w-1/2 mb-2 " src={post.foto}></img>
          </div>
          <h4 className='text-lg font-bold uppercase text-center'>{post.nomeProduto}</h4>
          <p className='text-center text-red-600'>{post.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
          <p><strong>Categoria:</strong>  {post.categoria?.descricao}</p>
          <p><strong>Descrição:</strong> {post.descricao}</p>
        </div>
      </div>

      {usuario.usuario === 'root@root.com' ? (
        <>
            <div className="flex BotEditCarrinho font-bold">
              <Link to={`/editarProduto/${post.id}`} className='w-full flex items-center justify-center py-2 botEdit'>
                <button className='hover:underline'>Editar</button>
              </Link>
              <Link to={`/deletarProduto/${post.id}`} className=' w-full flex items-center justify-center botDelete'>
                <button className='hover:underline'>Deletar</button>
              </Link>
            </div>
        </>
      ) : (<>
        <div className='w-full flex items-center justify-center py-2 BotAddCarrinho' onClick={() => addProductToCart(post)}>
          <button className='flex justify-center items-center font-bold' ><ShoppingCart /> Adicionar ao Carrinho</button>


        </div>
      </>)}

    </div>
  )
}

export default CardProdutos