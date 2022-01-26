import './App.css';
import { Header } from './components/Header/Header';
import { useEffect, useState } from 'react';
import fetchAllGames from './components/services/fetchAllGames';
import AllGames from './components/Games/AllGames';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Routes';

function App() {

  //useState para get e set gameList
  const [gameList, setGameList] = useState([]);

  //useEffect para exibir a lista de games assim que a pagina for carregada
  useEffect(() => {
    const loadAll = async () => {
      let listAllGames = await fetchAllGames.getAllGames();
      console.log(listAllGames);
      setGameList(listAllGames);
    }

    loadAll();
  },[]);

  return (
    <div className="App">
      <BrowserRouter>
      <Router />
      </BrowserRouter>


      <Header />                      

      <section id="listGames">        
          {gameList.map((item, key) => (
            <AllGames key={key} title={item.title} items={item.items}/> 
          ))}

      </section>
    </div>
  );
}

export default App;
