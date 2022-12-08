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
  const [nextSet, setNextSet] = useState(0);

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
            {nextSet < 1 ? null : (
              <li
                onClick={() => setNextSet(nextSet - 1)}
                className="next-pages"
              >
                {"<"}
              </li>
            )}
            <li
              onClick={() => setOffset((0 + 7 * nextSet) * 16)}
              className="page"
            >
              {0 + 7 * nextSet}
            </li>
            <li
              onClick={() => setOffset((1 + 7 * nextSet) * 16)}
              className="page"
            >
              {1 + 7 * nextSet}
            </li>
            <li
              onClick={() => setOffset((2 + 7 * nextSet) * 16)}
              className="page"
            >
              {2 + 7 * nextSet}
            </li>
            <li
              onClick={() => setOffset((3 + 7 * nextSet) * 16)}
              className="page"
            >
              {3 + 7 * nextSet}
            </li>
            <li
              onClick={() => setOffset((4 + 7 * nextSet) * 16)}
              className="page"
            >
              {4 + 7 * nextSet}
            </li>
            <li
              onClick={() => setOffset((5 + 7 * nextSet) * 16)}
              className="page"
            >
              {5 + 7 * nextSet}
            </li>
            <li
              onClick={() => setOffset((6 + 7 * nextSet) * 16)}
              className="page"
            >
              {6 + 7 * nextSet}
            </li>

            {nextSet < 9 ? (
              <li
                onClick={() => setNextSet(nextSet + 1)}
                className="next-pages"
              >
                {">"}
              </li>
            ) : (
              <li
                onClick={() => setOffset((7 + 7 * nextSet) * 16)}
                className="page"
              >
                {7 + 7 * nextSet}
              </li>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Pokedex;
