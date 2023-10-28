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
          <p className='h-full AdminCat'> <strong>Nome: </strong> {categoria.categoria}</p>

          <p className='h-full AdminCat'> <strong>Descrição: </strong> {categoria.descricao}</p>

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
        <p className='h-full UserCat'> <strong>Nome: </strong> {categoria.categoria}</p>

        <p className='h-full UserCat'> <strong>Descrição: </strong> {categoria.descricao}</p>
      </>)}


    </div>
  )
}

export default CardCategoria