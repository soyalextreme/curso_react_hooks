import { useState, useEffect } from "react";

const useCharacters = (url) => {
  const [characters, setCharacaters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacaters(data.results));
  }, []);

  return characters;
};

export default useCharacters;
