import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { SlideShowStyle } from './SlideShow.styles';

export const SlideShow = ({screenshots}) => {
  if(screenshots) console.log(screenshots);
  let screenchostList = [];
    for(let i in screenshots){
      screenchostList.push(screenshots[i].image);
    }

  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }
  return (
    <div>
      <SlideShowStyle >      
      <Zoom {...zoomInProperties}>
        {screenchostList.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width: "100%" }} src={each} />
          </div>
        ))}
      </Zoom>
      </SlideShowStyle>
    </div>
  );    
};