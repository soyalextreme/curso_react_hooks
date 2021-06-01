import React, { useState } from "react"
import './App.css';

// component
import Header from "./components/Header";
import Characters from "./components/Characters";

// context
import ThemeContext from "./context/ThemeContext"

function App() {
const [darkMode, setDarkMode] = useState(false);
  
  return (
    <ThemeContext.Provider value="green">
    <div className="App">
      <Header dark={{val: darkMode, set: setDarkMode}}/>
      <Characters dark={darkMode} />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
