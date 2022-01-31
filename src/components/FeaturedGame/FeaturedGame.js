import React from "react";
import { FeaturedStyle } from "./FeaturedGame.styles";
import { SlideShow } from "./SlideShow";

export default ({game}) => {
    return (
        <>        
        <FeaturedStyle>                        
            <section>            
                <div><h1>{game.title}</h1></div>
            </section>
        </FeaturedStyle>
        <SlideShow screenshots={game.screenshots}/>
        </>
    )
}