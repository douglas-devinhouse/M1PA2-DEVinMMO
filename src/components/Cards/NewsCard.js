import { NewsCardImg, NewsCardStyle, NewsContentArea, NewsTitle, NewsUrlButton } from "./NewsCard.styles";

export const NewsCard = ({ news }) => {
  console.log(news);

    return(
      <NewsCardStyle>
          <NewsCardImg>
            <img src={news.main_image} alt={news.title} style={{                 
                    objectFit: "cover", 
                    width: "25%",
                    height: "100%",                    
                  }}
            />

            <NewsContentArea >
              <NewsTitle>{`${news.title} ${news.short_description}`}</NewsTitle>
              <NewsUrlButton href={news.article_url}>View on site</NewsUrlButton>
            </NewsContentArea>           
            
          </NewsCardImg>
                
      </NewsCardStyle>
    );




    // return (      
    //   <NewsCardStyle>
    //   <div id={`news${news.id}`}>
    //     <div id="img">
    //       <NewsCardImg>
    //         <img src={news.main_image} alt={news.title} />
    //       </NewsCardImg>
    //     </div>
        
    //     <div id="abstract">        
    //     <h1>{news.title}</h1> 
    //       <a href={news.news_url}>
    //         {/* botão */}
    //       </a>          
          
          
    //     </div>                
    //   </div>
    //   </NewsCardStyle>
    // );


  };