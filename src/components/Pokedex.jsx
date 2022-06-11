import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import Search from "./Search";
import pokedex from "../images/pokedex.png";

const Pokedex = () => {
  const userName = useSelector((state) => state.userName);

  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((res) => setPokemon(res.data.results));

    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypes(res.data.results));
  }, []);

  const handleTypes = (e) => {
    axios.get(e).then((res) => setPokemon(res.data.pokemon));
  };

  return (
    <div>
      <div className="rectangle nav-pokedex">
        <div className="img">
          <img src={pokedex} alt="" />
        </div>
        <div className="rectangle small"></div>
      </div>
      <main>
        <p>
          <b>Welcome {userName}.</b> Here you can find your favorite pokemon.
        </p>
        <br />
        <section className="search-pokemon">
          <Search />

          <select onChange={(e) => handleTypes(e.target.value)}>
            {types.map((type) => (
              <option key={type.url} value={type.url}>
                {type.name}
              </option>
            ))}
          </select>
        </section>

        <ul className="list-pokemon">
          {pokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Pokedex;
