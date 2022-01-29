import { useEffect, useState } from "react";
import AllNews from "../News/AllNews";
import fetchAllNews from "../../services/fetchAllNews";


export const News = () => {
    //useState para get e set newsList
    const [newsList, setNewsList] = useState([]);

    //useEffect para exibir a lista de notícias assim que a pagina for carregada
    useEffect(() => {
    const loadAll = async () => {
        let listAllNews = await fetchAllNews.getAllNews();
        console.log(listAllNews);
        setNewsList(listAllNews);
    }

    loadAll();
    },[]);

    return (
        <section id="newsList">
        {newsList.map((item, key) => (
        <AllNews key={key} title={item.title} items={item.items}/> 
        ))}

        </section>    
    )
}