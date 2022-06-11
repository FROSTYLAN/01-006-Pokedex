import React, { useState } from "react";
import { Link } from "react-router-dom";
import pokemons from "../pokemons.json";
import "../styles/style-search.css";

const Search = () => {
  const [searchField, setSearchField] = useState("");

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.startsWith(searchField);
  });

  const results = filteredPokemons.slice(0, 8);

  const handleChange = (e) => {
    if (e !== "") {
      setSearchField(e);
    }
  };

  return (
    <div className="search">
      <label htmlFor="pokemon-name"></label>
      <input
        type="text"
        id="pokemon-name"
        placeholder="Search..."
        onChange={(e) => handleChange(e.target.value)}
      />
      <button>Search</button>
      <div className="results-container">
        {searchField === "" && " "
          ? null
          : results.map((result, i) => (
              <p>
                <Link to={`/pokedex/${result}/`} key={i}>
                  {result}
                </Link>
              </p>
            ))}
      </div>
    </div>
  );
};

export default Search;
