import React, { useEffect, useState, useReducer, useMemo, useRef } from "react";

// styles
import "./style/characters.css";

const initalState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = ({ dark }) => {
  //? Reducer 
  const [favorites, dispatch] = useReducer(favoriteReducer, initalState);
  
  //? estado de app
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  //? referencias a valores
  const searchInput = useRef(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    const isNotInFavorites = favorites.favorites.filter(
      (fav) => fav.id === favorite.id
    );
    // todavia no se encuentra en favoritos
    if (isNotInFavorites.length === 0) {
      dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
    }
  };

  const handleChange = () => {
    setSearch(searchInput.current.value);
  };

  // sin memo
  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  // con memo
  const filteredUsers = useMemo(() => {
    return characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [characters, search]);

  return (
    <div className="Characters">
      {/* Personajes favoritos */}
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      {/* Barra de busqueda */}
      <div className="search">
        <input type="text" value={search} onChange={handleChange} ref={searchInput} />
      </div>

      {/* Personajes generales */}
      {filteredUsers.map((character) => {
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
            key={id}
          >
            <div className="card-info">
              <h2>{name}</h2>
              <small className="gender">{gender}</small>
              <p className="type">{type}</p>
              <strong>{species}</strong>
            </div>
            <div className="card-image">
              <img src={image} alt={`${name}`} />
            </div>

            <button type="button" onClick={() => handleClick(character)}>
              Agregar a favoritos
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
