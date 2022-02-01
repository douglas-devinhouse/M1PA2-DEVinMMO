import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import FeaturedGame from './FeaturedGame';
import { SlideShowStyle } from './SlideShow.styles';

export const SlideShow = ({gameInfo}) => {
  let screenchostList = [];
    for(let i in gameInfo.screenshots){
      screenchostList.push(gameInfo.screenshots[i].image);
    }   

    const fadeProperties ={
      indicators: true,      
    };

  return (
    <div>
      <SlideShowStyle >            
      <Fade {...fadeProperties}>
        {screenchostList.length > 0 && screenchostList.map((img, key) => (
          <>
          <FeaturedGame  
            title={gameInfo.title} 
            developer={gameInfo.developer} 
            releaseDate={gameInfo.release_date}
            genre={gameInfo.genre} 
            description={gameInfo.short_description} 
            minRequirements={gameInfo.minimum_system_requirements}
            gameUrl={gameInfo.game_url}
          />
          <div style={{width: "100%"}}>
            <img alt={`Imagem ${key}`} style={{ objectFit: "cover", width: "100%" }} src={img} />
          </div>
          </>
        ))}
      </Fade>      
      </SlideShowStyle>
    </div>
  );    
};