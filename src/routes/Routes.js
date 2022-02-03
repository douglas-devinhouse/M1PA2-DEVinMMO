import { Routes, Route, Link } from 'react-router-dom';
import AllNews from '../components/pages/AllNews';
import AllGames from '../components/pages/AllGames';
import { Game } from '../components/pages/Game';
import { PageNotFound } from '../components/pages/pageNotFound';

export const LinkGames = () => {
    return(
        <Link className="LinkTO" to="/games">Games</Link>
    );
};

export const LinkNews = () => {
    return(
        <Link className="LinkTO" to="/news">News</Link>
    );
};

export const Router = () => {    
    
    return(
    <Routes >        
        <Route path="/" element={<AllGames />} />
        <Route path="games" element={<AllGames />} />
        <Route path="news" element={<AllNews />} />
        <Route path="game/:gameId" element={<Game />} />        

        <Route path="*" element={<PageNotFound />} />
    </Routes>
    )
};
