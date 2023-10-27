import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { AuthContext } from '../../../contexts/AuthContext'
import './CardCategoria.css'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {


  const { usuario, handleLogout } = useContext(AuthContext);

  const token = usuario.usuario;

  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between fonteEntrar'>

      {token === 'root@root.com' ? (
        <>
          <p className='p-8 text-3xl h-full bg-white'>{categoria.descricao}</p>

          <div className="flex BotEditCarrinho font-bold">
            <Link to={`/editarCategoria/${categoria.id}`} className='w-full flex items-center justify-center py-2 botEdit'>
              <button className='hover:underline'>Editar</button>
            </Link>
            <Link to={`/deletarCategoria/${categoria.id}`} className=' w-full flex items-center justify-center botDelete'>
              <button className='hover:underline'>Deletar</button>
            </Link>
          </div>
        </>
      ) : (<>

        <p className='p-8 text-3xl h-full UserCat'>{categoria.descricao}</p>

      </>)}


    </div>
  )
}

export default CardCategoria