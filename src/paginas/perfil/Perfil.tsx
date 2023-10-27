import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import slide1 from '../../assets/Design_sem_nome_10.png'
import { toastAlerta } from '../../utils/toastAlerta'
import './perfil.css'

function Perfil() {
  let navigate = useNavigate()

  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta('Você precisa estar logado', "sucesso")
      navigate("/login")
    }
  }, [usuario.token])

  return (
    <div className='container mx-auto mt-4 rounded-2xl overflow-hidden fonteEntrar'>
      <img className='w-full h-72 object-cover border-b-8 border-white' src={slide1} alt="Capa do Perfil" />
      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-6rem] h-72 flex flex-col text-2xl items-center justify-center fundoPerfil">

        <div className='containerPerfil'>
          <p> <strong> Nome: </strong> {usuario.nome} </p>
          <p><strong> E-mail: </strong> {usuario.usuario}</p>
        </div>

      </div>
    </div>
  )
}

export default Perfil