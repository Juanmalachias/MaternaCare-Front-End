import React from 'react';
import './Home.css';

function Home({ children }) {
    return (
        <>
        <div className="header flex justify-center items-center">
          <div className='container text-white'>
            <div className="flex flex-col items-center justify-center py-4 font-bold">
              <p>Amor e cuidado que transformam vidas</p>
              <div className="flex justify-around gap-4">
              </div>
            </div>
          </div>
        </div>
        { children }
      </>
    );
}

export default Home;