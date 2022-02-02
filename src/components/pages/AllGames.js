import React, { useRef } from 'react';
import { useGame } from '../../contexts/gameContext';
import { GameCard } from '../Cards/GameCard';

const AllGames = () => {
  const elementoTopo = useRef();
  const { gamesFiltrados } = useGame();

  const handleBackToTop = () => {
      elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <>    
    {/* <MasterHeader  pageTitle='Games'/> */}    
    <div ref={elementoTopo}>
      <div style={{margin:"60px 0 0 60px"}}>
        {gamesFiltrados.length === 0
          ? 'Nenhum game encontrado'
          : gamesFiltrados.map((game, key) => 
          <GameCard game={game} key={key}/>)
          }        
      </div>      
      <button onClick={handleBackToTop}>Voltar para o topo</button>
    </div>    
  </>
  );
};

export default AllGames;