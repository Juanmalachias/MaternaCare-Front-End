import React, { useContext} from 'react';
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'


import './cardProdutos.css';
import { AuthContext } from '../../../contexts/AuthContext'
import { ShoppingCart } from '@phosphor-icons/react'



interface CardProdutosProps {
  post: Produto
}

function CardProdutos({post}: CardProdutosProps) {
  
  const { usuario } = useContext(AuthContext);
  const token = usuario.usuario;

  return (
    <div className='cardProdutos border rounded-3xl	 flex flex-col  overflow-hidden justify-between'>
      <div>
        
        <div className='p-4 px-4 '>
        <div className='flex justify-center'>
            <img className="rounded-2xl w-1/2 mb-2 " src={post.foto}></img>
          </div>
          <h4 className='text-lg font-bold uppercase text-center'>{post.nomeProduto}</h4>
          <p className='text-center text-red-600'>{post.preco.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}</p>
          <p>Categoria: {post.categoria?.descricao}</p>
          <p>Descrição: {post.descricao}</p>
        </div>
      </div>
      
      {token === 'root@root.com' ? (
        <>
          <div className="flex">
        <Link to={`/editarProduto/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
            <button>Editar</button>
          </Link>
          <Link to={`/deletarProduto/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
            <button>Deletar</button>
          </Link>
        </div>
        </>
      ):(<>
        <Link to={`/editarProduto/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
            <button className='flex justify-center items-center' ><ShoppingCart/> Adicionar ao Carinho</button>
            
          </Link>
      </>)}

    </div>
  )
}

export default CardProdutos