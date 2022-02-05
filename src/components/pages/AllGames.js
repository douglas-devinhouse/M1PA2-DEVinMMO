import React, { useRef } from "react";
import { useGame } from "../../contexts/gameContext";
import { GameCard } from "../Cards/GameCard";
import { Search } from "../Header/Search";

const AllGames = () => {
  const elementoTopo = useRef();
  const { gamesFiltred } = useGame();

  const handleBackToTop = () => {
    elementoTopo.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Search searchType="games" />

      <div ref={elementoTopo}>
        <div style={{ margin: "120px 0 0 0px", width: "100%" }}>
          {gamesFiltred.length === 0
            ? "Sorry, no games with this title!"
            : gamesFiltred.map((game, key) => <GameCard game={game} key={key} />)}
        </div>
        <button onClick={handleBackToTop}>Back to Top</button>
      </div>
    </>
  );
};

export default AllGames;
