import React, { useRef } from 'react';
import { useNews } from '../../contexts/news';
import { dark, ligth } from '../../styles/themes';
import { usePersistedState } from '../../utils/usePersistedState';
import { NewsCard } from '../Cards/NewsCard';
import { Header } from '../Header/Header';

const AllNews = () => {
  const elementoTopo = useRef();
  const { newsFiltrados } = useNews();

  const handleBackToTop = () => {
      elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
  };  
  
  const [theme, setTheme] = usePersistedState('theme', ligth);
  const toggleTheme = () => {
    setTheme(theme.title === 'ligth' ? dark : ligth);
  }

  return (
  <>
    <Header toggleTheme={toggleTheme} pageTitle={'News'}/>
    <div ref={elementoTopo}>
      <div >
        {newsFiltrados.length === 0
          ? 'Nenhuma notícia encontrada'
          : newsFiltrados.map((news, key) => 
          <NewsCard news={news} key={key}/>)
          }
      </div>      
      <button onClick={handleBackToTop}>Voltar para o topo</button>
    </div>
  </>
  );
};

export default AllNews;