import { Link } from "react-router-dom";

export const GameCard = ({ game }) => {    
  return (      
    <div key={game.id}>              
      <div >        
        <Link to={`/game/${game.id}`}>
          <img src={game.thumbnail} alt={game.title} />
        </Link>
        {/* <a href={game.game_url}><img src={game.thumbnail} alt={game.title} /></a> */}
        <h1>{game.title}</h1>
      </div>                
    </div>
  );
};