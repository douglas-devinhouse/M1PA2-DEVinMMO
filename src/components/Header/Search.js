import React from 'react';
import { useGame } from '../../contexts/gameContext';
import { useNews } from '../../contexts/newsContext';
import { HeaderSearch } from './styles';

export const Search = ({searchType}) => {  
  const { setTermoBuscaGame } = useGame('');
  const { setTermoBuscaNews } = useNews('');

  if(searchType === 'games' || searchType === 'news') {
    return (
      <>
        <HeaderSearch >          
          <div>
            <input className='InputSearch'
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