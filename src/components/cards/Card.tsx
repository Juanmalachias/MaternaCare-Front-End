import React from 'react';
import './Card.css'
import IMAGEMCARD1 from '../../assets/Card1.png'
import IMAGEMCARD2 from '../../assets/Card2.png'
import IMAGEMCARD3 from '../../assets/Card3.png'

const Card = () => {
    return (
        <div className='flex justify-center marginAntes'>
            <div className="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cardInteiro">
                <div className='cardImagemFinal'>
                    <a href="#">
                        <img className="rounded-t-lg" src={IMAGEMCARD1} alt="" />
                    </a>
                </div>
                <div className="cardTexto">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Informações que salvam vidas</h5>
                    </a>
                </div>
            </div>
            <div className="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cardInteiro">
                <div className='cardImagemFinal'>
                    <a href="#">
                        <img className="rounded-t-lg" src={IMAGEMCARD2} alt="" />
                    </a>
                </div>
                <div className="cardTexto">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Amor em forma de alimento</h5>
                    </a>
                </div>
            </div>
            <div className="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cardInteiro">
                <div className='cardImagemFinal'>
                    <a href="#">
                        <img className="rounded-t-lg" src={IMAGEMCARD3} alt="" />
                    </a>
                </div>
                <div className="cardTexto">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Saiba quais as vacinas que seu filho deve tomar</h5>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;

