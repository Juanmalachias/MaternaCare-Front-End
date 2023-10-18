import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import homeLogo from '../../assets/LogoHome2.png'

function Navbar() {
 
  

    return (
        <>
            <div className='navbar w-full  text-black flex justify-center fixed-header altura'>
                <div className="container flex justify-evenly text-lg ">
                    <div className='div-logo flex justify-center items-center altura'>
                        <div className="flex justify-center">
                            <img src={homeLogo} alt="" className='' />
                        </div>
                        <div className='text-2xl font-bold uppercase'>MaternaCare</div>
                    </div>
                    <div className='flex  justify-between gap-20 items-center font-bold'>
                        <Link to='/login' className='hover:underline'>Login</Link>
                        <Link to='/home' className='hover:underline'>Home</Link>
                        <Link to = '/produtos' className='hover:underline'>Produtos</Link>
                        <Link to='/categoria' className='hover:underline'>Categoria</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <div className='hover:underline'>Perfil</div>
                        <div className='hover:underline'>Sair</div>
                    </div>
                </div>
            </div>
            <hr className='color pink' />
        </>
        )
        }
        
        export default Navbar