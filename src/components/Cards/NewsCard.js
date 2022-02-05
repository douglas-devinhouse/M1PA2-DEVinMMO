import { NewsCardImg, NewsCardStyle, NewsContentArea, NewsTitle, NewsUrlButton } from "./NewsCard.styles";

export const NewsCard = ({ news }) => {
  return (
    <NewsCardStyle>
      <NewsCardImg>
        <img
          src={news.main_image}
          alt={news.title}
          style={{
            objectFit: "cover",
            width: "25%",
            height: "100%",
          }}
        />

        <NewsContentArea>
          <NewsTitle>{`${news.title} ${news.short_description}`}</NewsTitle>
          <NewsUrlButton href={news.article_url} target={"_blank"}>
            View on site
          </NewsUrlButton>
        </NewsContentArea>
      </NewsCardImg>
    </NewsCardStyle>
  );
};
