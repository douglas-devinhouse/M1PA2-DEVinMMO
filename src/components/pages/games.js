import { useEffect, useState } from "react";
import AllGames from "../Games/AllGames";
import fetchAllGames from "../services/fetchAllGames";


export const Games = () => {
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
        <section id="listGames">        
        {gameList.map((item, key) => (
        <AllGames key={key} title={item.title} items={item.items}/> 
        ))}

        </section>    
    )
}