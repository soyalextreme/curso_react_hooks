import React from "react";

const Search = ({ search, handleChange, searchInput }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        ref={searchInput}
      />
    </div>
  );
};

export default Search;
