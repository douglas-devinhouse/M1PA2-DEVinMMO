import { Routes, Route } from 'react-router-dom';
import { Games } from '../components/pages/games';
import { News } from '../components/pages/news';

export const Router = () => (
    <Routes >
        <Route path="games" element={<Games />} />
        <Route path="news" element={<News />} />

        <Route path="*" element={<p>ERROR 404</p>} />
    </Routes>
);
