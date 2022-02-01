import React from "react";
import { FeaturedHorizontal, FeaturedStyle, FeaturedVertical, FeaturedTitle, 
         FeaturedInfo, FeaturedDeveloper, FeaturedRelease, FeaturedGenre,
         FeaturedDescription, FeaturedButtom, FeaturedRequirements } from "./FeaturedGame.styles";

const FeaturedGame = ({title, developer, releaseDate, genre, description, minRequirements, gameUrl}) => {
    let firstRelease = new Date(releaseDate);     
    
    return (
        <>        
        <FeaturedStyle>
            <FeaturedVertical>
                <FeaturedHorizontal>
                    <section>
                    <FeaturedTitle>{title}</FeaturedTitle>
                        <FeaturedInfo>
                            <FeaturedDeveloper>{developer}</FeaturedDeveloper>
                            <FeaturedRelease>{firstRelease.getFullYear()}</FeaturedRelease>
                            <FeaturedGenre>{genre}</FeaturedGenre>
                        </FeaturedInfo>

                        <FeaturedDescription>{description}</FeaturedDescription>                       
                                                
                        <FeaturedRequirements>
                            <h3>Minimum System Requirements</h3>
                            <p>OS: {minRequirements.os}</p>
                            <p>Graphics: {minRequirements.graphics}</p>
                            <p>Memory: {minRequirements.memory}</p>
                            <p>Processor: {minRequirements.processor}</p>
                            <p>Storage: {minRequirements.storage}</p>
                        </FeaturedRequirements>

                        <FeaturedButtom href={gameUrl}>Oficial Page</FeaturedButtom>
                    </section>
                </FeaturedHorizontal>
            </FeaturedVertical>
        </FeaturedStyle>        
        </>
    );
};

export default FeaturedGame;