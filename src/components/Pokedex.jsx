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
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=16&offset=${offset}`)
      .then((res) => setPokemon(res.data.results));

    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypes(res.data.results));
  }, [offset]);

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
        <div className="inicio">
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
        </div>

        <ul className="list-pokemon">
          {pokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
          ))}
        </ul>

        <div className="pages">
          <ul>
            <li onClick={() => setOffset(0 * 16)} className="page">
              1
            </li>
            <li onClick={() => setOffset(1 * 16)} className="page">
              2
            </li>
            <li onClick={() => setOffset(2 * 16)} className="page">
              3
            </li>
            <li onClick={() => setOffset(3 * 16)} className="page">
              4
            </li>
            <li onClick={() => setOffset(4 * 16)} className="page">
              5
            </li>
            <li onClick={() => setOffset(5 * 16)} className="page">
              6
            </li>
            <li onClick={() => setOffset(6 * 16)} className="page">
              7
            </li>
            <li className="next-pages">{">"}</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Pokedex;
