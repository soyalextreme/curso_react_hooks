import React from "react";

const Header = ({ dark }) => {
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
          borderBottomStyle: "solid"
        }}
    >
      <h1>React Hooks</h1>
      <button type="button" onClick={hanldeClick}>
        {dark.val ? "Dark Mode" : "Light mode"}
      </button>
    </div>
  );
};

export default Header;
