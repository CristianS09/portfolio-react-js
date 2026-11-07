import { useState } from 'react';
import Home from './App/Pages/Home/Home';
import { ThemeContext } from './App/context/ThemeContext';
import './global.css';

function App() {

  //Obtém tema armazenado.
  const storageTheme = localStorage.getItem('theme') === null ? 'dark' : localStorage.getItem('theme');

  const [theme, setTheme] = useState(storageTheme);

  return <ThemeContext.Provider value={{ setTheme, theme }}>
    <Home />
  </ThemeContext.Provider>

}

export default App;
