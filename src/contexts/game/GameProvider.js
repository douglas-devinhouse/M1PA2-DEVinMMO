import { useEffect, useRef, useState } from 'react';
import { filtrarListaGamesPorTermoBusca } from '../../utils/gamesUtils';
import { fetchAllGames } from '../../services/fetchAllGames';
import { GameContext } from './GameContext';

export const GameProvider = ({ children }) => {
  const [termoBusca, setTermoBusca] = useState('');
  const [gamesFiltrados, setGamesFiltrados] = useState([]);    
  const games = useRef([]);

  useEffect(() => {
  // IIFE Imediately Invoked Function Expression
  (async () => {
    const lista = await fetchAllGames.getAllGames();
    games.current = lista;
    setGamesFiltrados(filtrarListaGamesPorTermoBusca(games.current, termoBusca));        
  })();
  // :)
  //eslint-disable-next-line        
  }, []);

  useEffect(() => {        
    setGamesFiltrados(filtrarListaGamesPorTermoBusca(games.current, termoBusca));
  },[termoBusca]);

  return (
    <GameContext.Provider value={{setTermoBusca, games, gamesFiltrados }}>
      {children}
    </GameContext.Provider>
  );
};