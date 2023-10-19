import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {

  return (
    <>
      <div className="footer flex justify-center text-white">
        <div className="container flex flex-col items-center py-4">
          <p>
            <div className='container flex '>
              <div className='hover:underline footerpadrao'><a href="https://chat.whatsapp.com/KNswtIFkQSYHfAluns7giG" target="_blank">Grupo WhatsApp das Mães</a></div>
              <div className='hover:underline footerpadrao'><a href="#" target="_blank">Telemedicina</a></div>
              <div className='hover:underline footerpadrao'><a href="#" target="_blank">Produtos</a></div>
              <Link to='/sobre' className="hover:underline">Nosso Time</Link>
              <div className='hover:underline footerpadrao'><a href="mailto:maternacaregeneration@gmail.com" target="_blank">Entre em contato</a></div>
            </div>
          </p>
          <hr/>
          <p className='copyfim'>Todos os direitos reservados à MaternaCare &copy; </p>
        </div>
      </div>
    </>
  )
}

export default Footer