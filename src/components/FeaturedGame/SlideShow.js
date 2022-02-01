import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import FeaturedGame from './FeaturedGame';
import { SlideShowStyle } from './SlideShow.styles';

export const SlideShow = ({gameInfo}) => {
  // if(gameInfo.screenshots) console.log(gameInfo.screenshots);
  
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
        {screenchostList.map((img, index) => (
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
          <div key={index} style={{width: "100%"}}>
            <img alt={`Imagem ${index}`} style={{ objectFit: "cover", width: "100%" }} src={img} />
          </div>
          </>
        ))}
      </Fade>
      {/* </Zoom> */}
      </SlideShowStyle>
    </div>
  );    
};