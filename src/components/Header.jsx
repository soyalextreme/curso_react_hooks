import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = ({ dark }) => {
  const color = useContext(ThemeContext);

  const hanldeClick = () => {
    dark.set(!dark.val);
  };

  return (
    <div
      className="Header"
      style={{
        backgroundColor: dark.val ? "black" : "white",
        color: dark.val ? "white" : "black",
        padding: "2rem",
        borderBottomWidth: "0.3rem",
        borderBottomColor: "rgba(171, 224, 96, 0.767)",
        borderBottomStyle: "solid",
      }}
    >
      <h1 style={{    color    }}>React Hooks</h1>
      <button type="button" onClick={hanldeClick}>
        {dark.val ? "Dark Mode" : "Light mode"}
      </button>
    </div>
  );
};

export default Header;
