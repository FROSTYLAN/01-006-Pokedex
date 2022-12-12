import React, { useState } from "react";
import { Link } from "react-router-dom";
import pokemons from "../pokemons.json";

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
    <div className="w-3/4">
      <label htmlFor="pokemon-name"></label>
      <input
        type="text"
        className="w-3/4"
        id="pokemon-name"
        placeholder="Search..."
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="w-1/4">Search</button>
      <div className="absolute w-2/5 bg-white pl-4 z-10">
        {searchField === "" && " "
          ? null
          : results.map((result, i) => (
              <p className="mt-4 mb-4">
                <Link
                  className="text-black	no-underline"
                  to={`/pokedex/${result}/`}
                  key={i}
                >
                  {result}
                </Link>
              </p>
            ))}
      </div>
    </div>
  );
};

export default Search;
