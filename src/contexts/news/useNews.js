import { useContext } from 'react';
import { NewsContext } from './NewsContext';

export const useNews = () => useContext(NewsContext);