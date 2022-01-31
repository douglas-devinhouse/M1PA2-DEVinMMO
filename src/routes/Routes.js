import { Routes, Route } from 'react-router-dom';
import AllNews from '../components/pages/AllNews';
import AllGames from '../components/pages/AllGames';
import { Game } from '../components/pages/Game';
import { PageNotFound } from '../components/pages/pageNotFound';

export const Router = () => {    

    return(
    <Routes >        
        <Route path="games" element={<AllGames />} />
        <Route path="news" element={<AllNews />} />
        <Route path="game/:gameId" element={<Game />} />        

        <Route path="*" element={<PageNotFound />} />
    </Routes>
    )
};
