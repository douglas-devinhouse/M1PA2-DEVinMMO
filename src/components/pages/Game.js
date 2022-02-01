import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchGame from '../../services/fetchGame';
import { GameHeader } from '../Header/GameHeader';
import { SlideShow } from '../FeaturedGame/SlideShow';
import FeaturedGame from '../FeaturedGame/FeaturedGame';


export const Game = () => {
    const { gameId } = useParams();    
    const [detalhe, setDetalhe] = useState('');        

    useEffect(() => {
        const loadGame = async () => {
            let gameDetalhe = await fetchGame.getGameInfo(gameId);            
            setDetalhe(gameDetalhe);
        }
        loadGame();
        }, []);   

    console.log(detalhe);
    // console.log("detalhe.screenshots: ", detalhe.screenshots);

        
    return(
        <>                        
            {/* <GameHeader gameTitle={detalhe.title}/> */}
            {/* <FeaturedGame game={detalhe}/> */}
            {/* <SlideShow gameInfo={detalhe} screenshots={detalhe.screenshots}/> */}
            <SlideShow gameInfo={detalhe}/>
            <img src={detalhe.thumbnail} alt={detalhe.title}></img>            
            <p>{detalhe.short_description}</p>
            
            game_url
            genre
            platform
            release_date
            publisher
            minimum_system_requirements
            screenshots
        </>        
        );    
};