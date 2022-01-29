import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Routes';

import { ThemeProvider } from "styled-components";
import { GameProvider } from './contexts/game';
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { ligth, dark } from './styles/themes';
import { usePersistedState } from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState('theme', ligth);

  const toggleTheme = () => {
    setTheme(theme.title === 'ligth' ? dark : ligth);
  }

  return (
    <ThemeProvider theme={theme}>
      <GameProvider >
        <div className="App"> 
            <GlobalStyles />
            <Header toggleTheme={toggleTheme}/>        
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </div>
      </GameProvider>
    
    </ThemeProvider>
  );
}

export default App;
