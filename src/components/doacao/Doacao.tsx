import './Doacao.css'
import { Link } from 'react-router-dom'

//<button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Red</button>

const Doacao = () => {
    return (
        <div className='flex justify-center fundoimagem'>
            <div className='container flex containerTextos'>
                <div className='flex flex-col div-metade padalign'>
                    <p className='paragrafoDoacao'>
                        "Compre um produto extra e doe-o a uma mãe.
                    </p>
                    <p className='paragrafoDoacao'>
                        Seu gesto pode fazer a diferença, tocando vidas e espalhando alegria."
                    </p>

                </div>
                <div className='div-metade padalign'>
                <div><Link to='/produtos'><button type="button" className="botaoDoar">DOAR</button></Link></div>
               
                </div>
            </div>
        </div>
    );
};

export default Doacao;