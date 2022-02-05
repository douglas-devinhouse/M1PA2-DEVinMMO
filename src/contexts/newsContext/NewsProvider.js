import { useEffect, useRef, useState } from "react";
import { filtrarListaNewsPorTermoBusca } from "../../utils/newsUtils";
import { fetchAllNews } from "../../services/fetchAllNews";
import { NewsContext } from "./NewsContext";

export const NewsProvider = ({ children }) => {
  const [searchTermNews, setSearchTermNews] = useState("");
  const [newsFiltred, setNewsFiltred] = useState([]);
  const news = useRef([]);

  useEffect(() => {
    // IIFE Imediately Invoked Function Expression
    (async () => {
      const lista = await fetchAllNews.getAllNews();
      news.current = lista;
      setNewsFiltred(filtrarListaNewsPorTermoBusca(news.current, searchTermNews));
    })();
    // :)
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setNewsFiltred(filtrarListaNewsPorTermoBusca(news.current, searchTermNews));
  }, [searchTermNews]);

  return <NewsContext.Provider value={{ setSearchTermNews, news, newsFiltred }}>{children}</NewsContext.Provider>;
};
