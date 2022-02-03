import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Routes';

import { ThemeProvider } from "styled-components";
import { GameProvider } from './contexts/gameContext';
import { NewsProvider } from './contexts/newsContext';
import { GlobalStyles } from "./styles/GlobalStyles";
import { MasterHeader } from "./components/Header/MasterHeader";
import { dark, ligth} from './styles/themes';
import { usePersistedState } from "./utils/usePersistedState";

function App() {   

  const [theme, setTheme] = usePersistedState('theme', ligth);
  const toggleTheme = () => {
    setTheme(theme.title === 'ligth' ? dark : ligth);
  }

  return (
    <ThemeProvider theme={theme}>
      <GameProvider >
      <NewsProvider >
        <div className="App"> 
            <GlobalStyles />
            
            <BrowserRouter>
              <MasterHeader toggleTheme={toggleTheme}/>              
              <Router />
            </BrowserRouter>
          </div>
      </NewsProvider>
      </GameProvider>
    
    </ThemeProvider>
  );
}

export default App;
