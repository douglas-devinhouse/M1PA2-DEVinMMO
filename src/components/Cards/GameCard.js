
export const GameCard = ({ game }) => {    
  return (      
    <div key={game.id}>        
      <div >        
        <a href={game.game_url}><img src={game.thumbnail} alt={game.title} /></a>
        <h1>{game.title}</h1>
      </div>                
    </div>
  );
};