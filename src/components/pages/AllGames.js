import React, { useRef } from 'react';
import { useGame } from '../../contexts/game';
import { dark, ligth } from '../../styles/themes';
import { usePersistedState } from '../../utils/usePersistedState';
import { GameCard } from '../Cards/GameCard';
import { Header } from '../Header/Header';

const AllGames = () => {
  const elementoTopo = useRef();
  const { gamesFiltrados } = useGame();

  const handleBackToTop = () => {
      elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
  };  
  
  const [theme, setTheme] = usePersistedState('theme', ligth);
  const toggleTheme = () => {
    setTheme(theme.title === 'ligth' ? dark : ligth);
  }

  return (
  <>
    <Header toggleTheme={toggleTheme} pageTitle={'Games'}/>
    <div ref={elementoTopo}>
      <div >
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