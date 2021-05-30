import React, { useState } from "react"
import './App.css';

// component
import Header from "./components/Header";
import Characters from "./components/Characters";

function App() {
const [darkMode, setDarkMode] = useState(false);

  
  return (
    <div className="App">
      <Header dark={{val: darkMode, set: setDarkMode}}/>
      <Characters dark={darkMode} />
    </div>
  );
}

export default App;
