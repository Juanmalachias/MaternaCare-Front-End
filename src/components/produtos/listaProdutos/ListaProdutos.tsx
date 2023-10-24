import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar } from '../../../service/Service';
import { toastAlerta } from '../../../utils/toastAlerta';
import CardProdutos from '../cardProdutos/CardProdutos';
import './ListaProdutos.css'

function ListaProdutos() {
  const [produtos, setProduto] = useState<Produto[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  async function buscarPostagens() {
    try {
      await buscar('/produtos', setProduto, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, [produtos.length]);

  return (
    <>
    
      {usuario.usuario === 'root@root.com' ? (
        <>
          <div className="header flex justify-center items-center">
            <div className='container text-white'>
              <div className="flex items-center justify-center py-4 ">
                <p>Você está Logado como Administrador:</p>

                <div className=''><Link to='/cadastroProduto'><button className='BotCadProd'>Cadastrar Produto</button></Link></div>

              </div>

            </div>
          </div>

        </>
      ) : (<>
        <div className="header flex justify-center items-center">
          <div className='container text-white'>
            <div className="flex items-center justify-center py-4 font-bold text-2xl">
              <p>Escolha o produto de sua preferência!</p>
            </div>

          </div>
        </div>
        </>)
      }

      {produtos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-8 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {produtos.map((produto) => (
          <CardProdutos key={produto.id} post={produto} />
        ))}
      </div>
      
    </>
  );
}

export default ListaProdutos;