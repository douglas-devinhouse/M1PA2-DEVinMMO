import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchGame from "../../services/fetchGame";
import { SlideShow } from "../FeaturedGame/SlideShow";
import { GameComments } from "../Forms/GameComments/GameComments";

export const Game = () => {
  let { gameId } = useParams();
  let [detalhe, setDetalhe] = useState("");
  let [listScreenshots, setListScreenshots] = useState([]);

  useEffect(() => {
    const loadGame = async () => {
      let gameDetalhe = await fetchGame.getGameInfo(gameId);
      setDetalhe(gameDetalhe);
      setListScreenshots(gameDetalhe.screenshots);
    };

    loadGame();
  }, []);

  // console.log(detalhe);

  if (listScreenshots.length === 0) {
    return (
      <>
        <div
          style={{
            margin: "100px 0 0 0",
          }}
        >
          <img
            src={detalhe.thumbnail}
            alt={detalhe.title}
            style={{ display: "block", marginRight: "auto", marginLeft: "auto" }}
          />
          <br />
          <br />
          <h3>{detalhe.short_description}</h3>
        </div>
      </>
    );
  } else {
    return (
      <>
        <SlideShow gameInfo={detalhe} />
        <GameComments gameId={detalhe.id} />
      </>
    );
  }
};
