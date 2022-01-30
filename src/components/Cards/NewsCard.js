
export const NewsCard = ({ news }) => {    
    return (      
      <div key={news.id}>                
        <div >        
          <a href={news.news_url}><img src={news.thumbnail} alt={news.title} /></a>
          <h1>{news.title}</h1> 
        </div>                
      </div>
    );
  };