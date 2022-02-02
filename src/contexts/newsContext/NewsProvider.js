import { useEffect, useRef, useState } from 'react';
import { filtrarListaNewsPorTermoBusca } from '../../utils/newsUtils';
import { fetchAllNews } from '../../services/fetchAllNews';
import { NewsContext } from './NewsContext';

export const NewsProvider = ({ children }) => {
  const [termoBuscaNews, setTermoBuscaNews] = useState('');
  const [newsFiltrados, setNewsFiltrados] = useState([]);    
  const news = useRef([]);

  useEffect(() => {
  // IIFE Imediately Invoked Function Expression
  (async () => {
    const lista = await fetchAllNews.getAllNews();    
    news.current = lista;
    setNewsFiltrados(filtrarListaNewsPorTermoBusca(news.current, termoBuscaNews));        
  })();
  // :)
  //eslint-disable-next-line        
  }, []);

  useEffect(() => {        
    setNewsFiltrados(filtrarListaNewsPorTermoBusca(news.current, termoBuscaNews));
  },[termoBuscaNews]);

  return (
    <NewsContext.Provider value={{setTermoBuscaNews, news, newsFiltrados }}>    
      {children}
    </NewsContext.Provider>
  );
};