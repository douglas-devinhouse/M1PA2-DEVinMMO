import { Link } from "react-router-dom";
import { GameCardImg, GameCardStyle } from "../../styles/GameCard.styles";

export const GameCard = ({ game }) => {    
  return (      
    
      <GameCardStyle >        
        <div key={game.id}>
          <Link to={`/game/${game.id}`}>
            <GameCardImg>
              <img src={game.thumbnail} alt={game.title} />
            </GameCardImg>
          </Link>
          {/* <a href={game.game_url}><img src={game.thumbnail} alt={game.title} /></a> */}
          {/* <h1>{game.title}</h1> */}
        </div>
      </GameCardStyle>                
    
  );
};