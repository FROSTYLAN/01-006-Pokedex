import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import Search from "./Search";
import headerPokedex from "../images/headerPokedex.png";

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
      <header className="w-full">
        <img src={headerPokedex} className="w-full" alt="header" />
      </header>

      <main>
        <div className="max-w-7xl m-auto">
          <p>
            <b>Welcome {userName}.</b> Here you can find your favorite pokemon.
          </p>
          <br />
          <section className="w-full flex flex-row justify-between">
            <Search />

            <select
              className="w-1/4 ml-4 pl-2 pr-2"
              onChange={(e) => handleTypes(e.target.value)}
            >
              {types.map((type) => (
                <option key={type.url} value={type.url}>
                  {type.name}
                </option>
              ))}
            </select>
          </section>
        </div>

        <ul className="flex flex-wrap w-full justify-around mt-11">
          {pokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <ul className="list-none flex">
            {nextSet < 1 ? null : (
              <li
                onClick={() => setNextSet(nextSet - 1)}
                className="w-8 h-8 text-center leading-8 hover:cursor-pointer bg-red-300 text-white"
              >
                {"<"}
              </li>
            )}
            <li
              onClick={() => setOffset((0 + 7 * nextSet) * 16)}
              className="w-8 h-8 text-center leading-8 hover:cursor-pointer"
            >
              {0 + 7 * nextSet}
            </li>
            <li
              onClick={() => setOffset((1 + 7 * nextSet) * 16)}
              className="w-8 h-8 text-center leading-8 hover:cursor-pointer"
            >
              {1 + 7 * nextSet}
            </li>
            <li
              onClick={() => setOffset((2 + 7 * nextSet) * 16)}
              className="w-8 h-8 text-center leading-8 hover:cursor-pointer"
            >
              {2 + 7 * nextSet}
            </li>
            <li
              onClick={() => setOffset((3 + 7 * nextSet) * 16)}
              className="w-8 h-8 text-center leading-8 hover:cursor-pointer"
            >
              {3 + 7 * nextSet}
            </li>
            <li
              onClick={() => setOffset((4 + 7 * nextSet) * 16)}
              className="w-8 h-8 text-center leading-8 hover:cursor-pointer"
            >
              {4 + 7 * nextSet}
            </li>
            <li
              onClick={() => setOffset((5 + 7 * nextSet) * 16)}
              className="w-8 h-8 text-center leading-8 hover:cursor-pointer"
            >
              {5 + 7 * nextSet}
            </li>
            <li
              onClick={() => setOffset((6 + 7 * nextSet) * 16)}
              className="w-8 h-8 text-center leading-8 hover:cursor-pointer"
            >
              {6 + 7 * nextSet}
            </li>

            {nextSet < 9 ? (
              <li
                onClick={() => setNextSet(nextSet + 1)}
                className="w-8 h-8 text-center leading-8 hover:cursor-pointer bg-red-500 text-white"
              >
                {">"}
              </li>
            ) : (
              <li
                onClick={() => setOffset((7 + 7 * nextSet) * 16)}
                className="w-8 h-8 text-center leading-8 hover:cursor-pointer"
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
