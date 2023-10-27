import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import logoNavbar from '../../assets/LogoNavBar.png'
import Menu from '../../assets/menuHa.png'
import { AuthContext } from '../../contexts/AuthContext';
import { Hamburger, ShoppingCart } from '@phosphor-icons/react'



function Navbar() {

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    return (
        <>
            <div className='navbar w-full  text-black flex justify-center fixed-header altura'>
                <div className="container flex justify-evenly text-lg ">
                    <div className='div-logo flex justify-center items-center altura'>
                        
                        <div className="flex justify-center ">
                            
                            <Link to='/home'><img src={logoNavbar} alt="" className='' /></Link>
                        </div>
                        <div className='text-2xl font-bold uppercase maternanav ml-2'>MaternaCare</div>
                        <div className='flex lg:hidden px-2'>
                            <button /*onClick={()}*/ >
                                     <img src={Menu} alt="" width={80}  />
                            </button>
                                </div>
                    </div>
                    <div className='w-full h-screen  '>
                        <div className='flex flex-col items-center justify-center'>
            

                        </div>
            

                    </div>
                   
                    <div className='hidden lg:flex flex  justify-between items-center font-bold containerbotoes'>

                        <div className='hover:underline'><Link to='/produtos'><button className='navbotao'>Produtos</button></Link></div>
                        <div className='hover:underline'><Link to='/categoria'><button className='navbotao'>Categoria</button></Link></div>
                        

                        {token === '' ? (
                            <div className='hover:underline'><Link to='/login'><button className='navbotao'>Login</button></Link></div>
                        ) : (
                            <>
                                <div className='hover:underline'><Link to='/perfil'><button className='navbotao'>Perfil</button></Link></div>
                                {usuario.usuario === 'root@root.com' ? (
                                <></>
                                ):(
                                    <div className='hover:underline'><Link to='/carrinho'><button className='navbotao'>Carrinho</button></Link></div>
                                )}
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