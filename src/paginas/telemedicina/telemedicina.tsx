import React from 'react';
import './telemedicina.css';
import med1 from '../../assets/medicos1.png'
import med2 from '../../assets/medicos2.png'
import med3 from '../../assets/medicos3.png'


function telemedicina() {
    return (
        <>
            <div>
                <div className=''>
                    <div className="telemedicina  flex flex-col items-center justify-center py-4 font-bold" >
                        <p className=''>Telemedicina</p>
                    </div>

                    <div className='parceiros mx-auto rounded-s-lg flex flex-col items-center justify-center py-2 mb-2'>
                        <p>Nossos parceiros</p>
                    </div>
                </div>
                <div className='grid grid-flow-col-dense mb-20 fotosParceiros'>
                    <div className='cardfoto'>
                        <img src={med1} alt="" />
                    </div>
                    <div className='cardfoto'>
                        <img src={med2} alt="" />
                    </div>
                    <div className='cardfoto'>
                        <img src={med3} alt="" />
                    </div>
                </div>
                <div className='parceiros mx-auto rounded-s-lg flex flex-col items-center justify-center py-2 mb-2'>
                    <p className='mb-2'>Consulte as UBS's proximas a sua casa <a href="http://buscasaude.prefeitura.sp.gov.br/" target='blank' className='underline'>clicando aqui</a>.</p>
                    
                </div>
                <div className='mb-10 flex flex-col items-center justify-center'> 
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d266583.7943005272!2d-46.85301744988163!3d-23.542519075412326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1697766843677!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="300"
                        style={{
                            border: '0',
                            width: '976px', 
                            height: '610px', 
                        }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>





            </div>
        </>

    );
}

export default telemedicina;