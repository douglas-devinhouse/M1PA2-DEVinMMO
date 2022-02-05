import React, { useRef } from "react";
import { useNews } from "../../contexts/newsContext";
import { NewsCard } from "../Cards/NewsCard";
import { Search } from "../Header/Search";

const AllNews = () => {
  const elementoTopo = useRef();
  const { newsFiltred } = useNews();

  const handleBackToTop = () => {
    elementoTopo.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Search searchType="news" />
      <div ref={elementoTopo}>
        <div style={{ margin: "120px 0 0 60px" }}>
          {newsFiltred.length === 0
            ? "Sorry, no news for that term!"
            : newsFiltred.map((news, key) => <NewsCard news={news} key={key} />)}
        </div>
        <button onClick={handleBackToTop}>Back to Top</button>
      </div>
    </>
  );
};

export default AllNews;
