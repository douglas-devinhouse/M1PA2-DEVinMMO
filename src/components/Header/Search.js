import React, { useEffect, useState } from 'react';
import { useGame } from '../../contexts/gameContext';
import { useNews } from '../../contexts/newsContext';

export const Search = () => {  
  const { setTermoBuscaGame } = useGame();
  const { setTermoBuscaNews } = useNews();  
  const [pageTitle, setPageTitle] = useState();

  useEffect(() => {        
    setPageTitle(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
  },[]);  
  
  if(pageTitle === 'games' || pageTitle === 'news') {
    return (
      <>
          <h1>{pageTitle}</h1>
          <div>
            <input
              onChange={(event) => {
                pageTitle === 'games' ?
                setTermoBuscaGame(event.target.value):
                setTermoBuscaNews(event.target.value);                  
              }}                
              type="text"
              placeholder="Pesquisar"
            />
          </div>           
      </>
    );
  } else return null    
};