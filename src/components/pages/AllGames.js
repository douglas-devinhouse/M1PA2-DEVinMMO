import React, { useRef } from 'react';
import { useGame } from '../../contexts/gameContext';
import { GameCard } from '../Cards/GameCard';
import { Search } from '../Header/Search';

const AllGames = () => {
  const elementoTopo = useRef();
  const { gamesFiltrados } = useGame();

  const handleBackToTop = () => {
      elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <>    
    {/* <MasterHeader  pageTitle='Games'/> */}    
    <Search searchType="games"/>
    <div ref={elementoTopo}>
      <div style={{margin:"80px 0 0 8px", width:"100vw",}}>
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