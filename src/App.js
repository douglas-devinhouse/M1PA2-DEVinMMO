import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Routes';

import { ThemeProvider } from "styled-components";
import { GameProvider } from './contexts/game';
import { NewsProvider } from './contexts/news';
import { GlobalStyles } from "./styles/GlobalStyles";
//import { Header } from "./components/Header/Header";
import { ligth} from './styles/themes';
import { usePersistedState } from "./utils/usePersistedState";

function App() {
   const [theme] = usePersistedState('theme', ligth);

  // const toggleTheme = () => {
  //   setTheme(theme.title === 'ligth' ? dark : ligth);
  // }

  return (
    <ThemeProvider theme={theme}>
      <GameProvider >
      <NewsProvider >
        <div className="App"> 
            <GlobalStyles />
            {/* <Header toggleTheme={toggleTheme}/>*/}
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </div>
      </NewsProvider>
      </GameProvider>
    
    </ThemeProvider>
  );
}

export default App;
