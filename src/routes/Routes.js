import { Routes, Route } from 'react-router-dom';

export const Router = () => (
    <Routes >
        <Route path="games" element={<p>Games</p>} />
        <Route path="news" element={<p>News</p>} />

        <Route path="*" element={<p>ERROR 404</p>} />
    </Routes>
);
