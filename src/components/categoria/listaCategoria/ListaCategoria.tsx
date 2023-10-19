import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../service/Service';
import { toastAlerta } from '../../../utils/toastAlerta';
import CardCategoria from '../cardCategoria/CardCategoria';

function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategoria() {
    try {
      await buscar('/categoria', setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarCategoria();
  }, [categoria.length]);
  return (
    <>

      {usuario.usuario === 'root@root.com' ? (
        <>
          <div className="header flex justify-center items-center">
            <div className='container text-white'>
              <div className="flex items-center justify-center py-4 ">
                <p>Você está Logado como Administrador:</p>

                <div className=''><Link to='/cadastroCategoria'><button className='BotCadProd'>Cadastrar Categoria</button></Link></div>

              </div>

            </div>
          </div>

        </>
      ) : (<></>)
      }
      

      {categoria.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (

              <CardCategoria key={categoria.id} categoria={categoria} />

            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;