// import React from 'react';

// const AllGames = ({title, items}) => {
//     return (
//         <div>
//             <h2>{title}</h2>                        

//             {items.length > 0 && items.map((item, key) => (
//                 <img src={item.thumbnail} alt={item.title} key={key}></img>
//             ))}
            
//         </div>
//     );
// }

// export default AllGames;

import React, { useRef } from 'react';
import { useGame } from '../../contexts/game';
import { GameCard } from '../Cards/GameCard';

const AllGames = () => {
  const elementoTopo = useRef();
  const { gamesFiltrados } = useGame();

  const handleBackToTop = () => {
      elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
  };

  console.log({gamesFiltrados});

  return (
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
  );
};

export default AllGames;