import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const hanldeClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="Header">
      <h1>React Hooks</h1>
      <button type="button" onClick={hanldeClick}>
        {darkMode ? "Dark Mode" : "Light mode"}
      </button>
    </div>
  );
};

export default Header;
