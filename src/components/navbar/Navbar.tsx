import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import logoNavbar from '../../assets/LogoNavBar.png'

function Navbar() {
 
    return (
        <>
            <div className='navbar w-full  text-black flex justify-center fixed-header altura'>
                <div className="container flex justify-evenly text-lg ">
                    <div className='div-logo flex justify-center items-center altura'>
                        <div className="flex justify-center">
                            <img src={logoNavbar} alt="" className='' />
                        </div>
                        <div className='text-2xl font-bold uppercase maternanav'>MaternaCare</div>
                    </div>
                    <div className='flex  justify-between items-center font-bold containerbotoes'>
                        <div className='hover:underline'><Link to='/login'><button className='navbotao'>Login</button></Link></div>
                        <div className='hover:underline'><Link to='/home'><button className='navbotao'>Home</button></Link></div>
                        <div className='hover:underline'><Link to='/produtos'><button className='navbotao'>Produtos</button></Link></div>
                        <div className='hover:underline'><Link to='/categoria'><button className='navbotao'>Categoria</button></Link></div>
                        <div className='hover:underline'><Link to='/cadastroCategoria'><button className='navbotao'>Cadastrar Categoria</button></Link></div>
                        <div className='hover:underline'><Link to='/cadastroProduto'><button className='navbotao'>Cadastrar Produto</button></Link></div>
                        <div className='hover:underline'><button className='navbotao'>Perfil</button></div>
                        <div className='hover:underline'><button className='navbotao'>Sair</button></div>
                    </div>
                </div>
            </div>
            <hr className='color pink' />
        </>
        )
        }
        
        export default Navbar