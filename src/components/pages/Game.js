import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchGame from '../../services/fetchGame';
import { SlideShow } from '../FeaturedGame/SlideShow';

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
        
    return(
        <>
            <SlideShow gameInfo={detalhe}/>
            <img src={detalhe.thumbnail} alt={detalhe.title}></img>            
            <p>{detalhe.short_description}</p>
        </>        
        );    
};