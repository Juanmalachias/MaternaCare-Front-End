import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import logoNavbar from '../../assets/LogoNavBar.png'
import { AuthContext } from '../../contexts/AuthContext';
import { ShoppingCart } from '@phosphor-icons/react'


function Navbar() {

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    return (
        <>
            <div className='navbar w-full  text-black flex justify-center fixed-header altura'>
                <div className="container flex justify-evenly text-lg ">
                    <div className='div-logo flex justify-center items-center altura'>
                        <div className="flex justify-center">
                            <Link to='/home'><img src={logoNavbar} alt="" className='' /></Link>
                        </div>
                        <div className='text-2xl font-bold uppercase maternanav'>MaternaCare</div>
                    </div>
                    <div className='flex  justify-between items-center font-bold containerbotoes'>
                        <div className='hover:underline'><Link to='/produtos'><button className='navbotao'>Produtos</button></Link></div>
                        <div className='hover:underline'><Link to='/categoria'><button className='navbotao'>Categoria</button></Link></div>

                        {token === '' ? (
                            <div className='hover:underline'><Link to='/login'><button className='navbotao'>Login</button></Link></div>
                        ) : (
                            <>
                                <div className='hover:underline'><Link to='/perfil'><button className='navbotao'>Perfil</button></Link></div>
                                <div className='hover:underline'><Link to='/carrinho'><button className='navbotao'>Carrinho</button></Link></div>
                                <div className='hover:underline'><Link to='/home'><button className='navbotao' onClick={handleLogout}>Sair</button></Link></div>
                                
                            </>
                        )
                        }
                    </div>
                </div>
            </div >
            <hr className='color pink' />
        </>
    )
}

export default Navbar