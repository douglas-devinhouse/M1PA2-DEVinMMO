import { useEffect, useRef, useState } from "react";
import { filtrarListaGamesPorTermoBusca } from "../../utils/gamesUtils";
import { fetchAllGames } from "../../services/fetchAllGames";
import { GameContext } from "./GameContext";

export const GameProvider = ({ children }) => {
  const [searchTermGame, setSearchTermGame] = useState("");
  const [gamesFiltred, setGamesFiltered] = useState([]);
  const games = useRef([]);

  useEffect(() => {
    // IIFE Imediately Invoked Function Expression
    (async () => {
      const lista = await fetchAllGames.getAllGames();
      games.current = lista;
      setGamesFiltered(filtrarListaGamesPorTermoBusca(games.current, searchTermGame));
    })();
    // :)
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setGamesFiltered(filtrarListaGamesPorTermoBusca(games.current, searchTermGame));
  }, [searchTermGame]);

  return <GameContext.Provider value={{ setSearchTermGame, games, gamesFiltred }}>{children}</GameContext.Provider>;
};
