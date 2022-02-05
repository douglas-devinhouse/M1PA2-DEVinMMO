import React from "react";
import { useGame } from "../../contexts/gameContext";
import { useNews } from "../../contexts/newsContext";
import { HeaderSearch } from "./styles";

export const Search = ({ searchType }) => {
  const { setSearchTermGame } = useGame("");
  const { setSearchTermNews } = useNews("");

  if (searchType === "games" || searchType === "news") {
    return (
      <>
        <HeaderSearch>
          <div style={{ width: "100%" }}>
            <input
              className="InputSearch"
              onChange={(event) => {
                searchType === "games" ? setSearchTermGame(event.target.value) : setSearchTermNews(event.target.value);
              }}
              type="text"
              placeholder="Pesquisar"
            />
          </div>
        </HeaderSearch>
      </>
    );
  } else return null;
};
