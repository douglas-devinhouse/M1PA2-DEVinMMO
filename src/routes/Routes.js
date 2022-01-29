import { Routes, Route } from 'react-router-dom';
import { News } from '../components/pages/news';
import AllGames from '../components/pages/AllGames';
import { PageNotFound } from '../components/pages/pageNotFound';

export const Router = () => (
    <Routes >
        <Route path="games" element={<AllGames />} />
        <Route path="news" element={<News />} />        

        <Route path="*" element={<PageNotFound />} />
    </Routes>
);
