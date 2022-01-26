import './App.css';
import { Header } from './components/Header/Header';
//import { useEffect, useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Routes';

function App() {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
