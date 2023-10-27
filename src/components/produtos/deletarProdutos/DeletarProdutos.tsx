import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Produto from '../../../models/Produto'
import { buscar, deletar } from '../../../service/Service'
import { toastAlerta } from '../../../utils/toastAlerta'
import { Link } from 'react-router-dom'

function DeletarProdutos() {
  const [Produto, setProduto] = useState<Produto>({} as Produto)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/produtos")
  }

  async function DeletarProdutos() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      toastAlerta('Produto apagado com sucesso', 'sucesso')

    } catch (error) {
      toastAlerta('Erro ao apagar a Produto', 'erro')
    }

    retornar()
  }
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4 font-bold'>Deletar produto</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o produto a seguir?</p>

      <div className='cardProdutos border rounded-3xl	 flex flex-col  overflow-hidden justify-between'>
        <div>

          <div className='p-4 px-4 '>
            <div className='flex justify-center'>
              <img className="rounded-2xl w-1/2 mb-2" src={Produto.foto} ></img>
            </div>
            <h4 className='text-lg font-bold uppercase text-center'>{Produto.nomeProduto}</h4>
          </div>
        </div>
        <div className="flex BotEditCarrinho font-bold">
        <button className='w-full flex items-center justify-center py-2 botEdit hover:underline' onClick={retornar}>Não</button>
        <button className='w-full flex items-center justify-center botDelete' onClick={DeletarProdutos}>Sim</button>
       </div>

      </div>
    </div>
  )
}

export default DeletarProdutos