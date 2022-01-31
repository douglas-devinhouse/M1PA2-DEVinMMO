import React from 'react';
import {Container} from './styles';
import { useGame } from '../../contexts/game';
import { useNews } from '../../contexts/news';

export const Header = ({toggleTheme, pageTitle}) => {  
  const { setTermoBuscaGame } = useGame();      
  const { setTermoBuscaNews } = useNews();  

    return (
        <Container>
            <h1>{pageTitle}</h1>
            <div>
              <input
                onChange={(event) => {
                  pageTitle === 'Games' ?
                  setTermoBuscaGame(event.target.value):
                  setTermoBuscaNews(event.target.value);                  
                }}                
                type="text"
                placeholder="Pesquisar"
              />
            </div>           
        </Container>
    )
};