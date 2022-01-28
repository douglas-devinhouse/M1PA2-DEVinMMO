import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Routes';

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import ligth from "./styles/themes/ligth";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState('theme', ligth);

  const toggleTheme = () => {
    setTheme(theme.title === 'ligth' ? dark : ligth);
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <GlobalStyles />
        <Header toggleTheme={toggleTheme}/>
        <BrowserRouter>
        <Router />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
