import React from "react";
import { FeaturedHorizontal, FeaturedStyle, FeaturedVertical, FeaturedTitle, 
         FeaturedInfo, FeaturedDeveloper, FeaturedRelease, FeaturedGenre,
         FeaturedDescription, FeaturedButtom } from "./FeaturedGame.styles";
import { FeaturedGameRequirements } from "./FeaturedGameRequirements";

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
                        <FeaturedGameRequirements requirements={minRequirements}/> 
                        
                        <FeaturedButtom href={gameUrl}>Oficial Page</FeaturedButtom>
                    </section>
                </FeaturedHorizontal>
            </FeaturedVertical>
        </FeaturedStyle>        
        </>
    );
};

export default FeaturedGame;