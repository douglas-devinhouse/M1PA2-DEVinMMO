import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchGame from '../../services/fetchGame';
import { SlideShow } from '../FeaturedGame/SlideShow';

export const Game = () => {
    let { gameId } = useParams();    
    let [detalhe, setDetalhe] = useState('');           
    let [listScreenshots, setListScreenshots] = useState([]);

    useEffect(() => {
        const loadGame = async () => {
            let gameDetalhe = await fetchGame.getGameInfo(gameId);
            setDetalhe(gameDetalhe);
            setListScreenshots(gameDetalhe.screenshots);
        }
        loadGame();
    }, []);       

    if(listScreenshots.length === 0) {
        return(
            <>            
            <br />         
            <img src={detalhe.thumbnail} alt={detalhe.title}></img>
            <br /><br />
            <h3>{detalhe.short_description}</h3>            
            </>
        );        
    } else {
        return (
            <>            
            <SlideShow gameInfo={detalhe}/>
            </>
        );
    };      
};