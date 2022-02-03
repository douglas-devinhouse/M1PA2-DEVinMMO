import React, { useEffect, useState } from 'react';
import { useGame } from '../../contexts/gameContext';
import { useNews } from '../../contexts/newsContext';
import { HeaderSearch } from './styles';

export const Search = ({searchType}) => {  
  const { setTermoBuscaGame } = useGame();
  const { setTermoBuscaNews } = useNews();  
  // const [pageTitle, setPageTitle] = useState();

  // useEffect(() => {        
  //   setPageTitle(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
  // },[]);  
  
  console.log(searchType)

  if(searchType === 'games' || searchType === 'news') {
    return (
      <>
        <HeaderSearch >          
          <div>
            <input
              onChange={(event) => {
                searchType === 'games' ?
                setTermoBuscaGame(event.target.value):
                setTermoBuscaNews(event.target.value);                  
              }}                
              type="text"
              placeholder="Pesquisar"
            />
          </div>
        </HeaderSearch>
      </>
    );
  } else return null    
};