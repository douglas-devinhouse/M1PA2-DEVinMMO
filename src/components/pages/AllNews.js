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


// import { useEffect, useState } from "react";
// //import AllNews from "../News/AllNews";
// import fetchAllNews from "../../services/fetchAllNews";


// export const News = () => {
//     //useState para get e set newsList
//     const [newsList, setNewsList] = useState([]);

//     //useEffect para exibir a lista de notícias assim que a pagina for carregada
//     useEffect(() => {
//     const loadAll = async () => {
//         let listAllNews = await fetchAllNews.getAllNews();
//         console.log(listAllNews);
//         setNewsList(listAllNews);
//     }

//     loadAll();
//     },[]);

//     return (
//         <section id="newsList">
//         {newsList.map((item, key) => (
//         <AllNews key={key} title={item.title} items={item.items}/> 
//         ))}

//         </section>    
//     )
// }