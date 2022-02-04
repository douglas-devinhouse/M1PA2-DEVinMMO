import { useEffect, useRef, useState } from "react";
import { filtrarListaGamesPorTermoBusca } from "../../utils/gamesUtils";
import { fetchAllGames } from "../../services/fetchAllGames";
import { GameContext } from "./GameContext";

export const GameProvider = ({ children }) => {
  const [termoBuscaGame, setTermoBuscaGame] = useState("");
  const [gamesFiltrados, setGamesFiltrados] = useState([]);
  const games = useRef([]);

  useEffect(() => {
    // IIFE Imediately Invoked Function Expression
    (async () => {
      const lista = await fetchAllGames.getAllGames();
      // console.log(lista);
      games.current = lista;
      setGamesFiltrados(filtrarListaGamesPorTermoBusca(games.current, termoBuscaGame));
    })();
    // :)
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setGamesFiltrados(filtrarListaGamesPorTermoBusca(games.current, termoBuscaGame));
  }, [termoBuscaGame]);

  return <GameContext.Provider value={{ setTermoBuscaGame, games, gamesFiltrados }}>{children}</GameContext.Provider>;
};
