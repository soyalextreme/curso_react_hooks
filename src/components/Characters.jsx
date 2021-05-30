import React, { useEffect, useState } from "react";

// styles
import "./style/characters.css";

const Characters = ({ dark }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="Characters">
      {characters.map((character) => {
        console.log(character);
        const { name, gender, image, type, species, id } = character;
        return (
          <div
            className="card-container"
            style={{
              backgroundColor: dark ? "black" : "white",
              borderColor: dark
                ? "rgba(154, 255, 4, 0.863)"
                : "rgba(59, 99, 0, 0.767)",
            }}
          >
            <div className="card-info">
              <h2 key={id}>{name}</h2>
              <small className="gender">{gender}</small>
              <p className="type">{type}</p>
              <strong>{species}</strong>
            </div>
            <div className="card-image">
              <img src={image} alt={`${name}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
