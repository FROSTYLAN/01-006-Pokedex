import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(pokemonUrl).then((res) => setPokemon(res.data));
  }, [pokemonUrl]);
  return (
    <div className="my-4 w-80 flex justify-center">
      <Link
        className={`rounded-2xl flex flex-col m-2 w-72 no-underline card-${pokemon.types?.[0].type.name}`}
        to={`/pokedex/${pokemon.name}`}
      >
        <figure className={`text-center ${pokemon.types?.[0].type.name}`}>
          <img
            className="relative top-8 m-auto"
            width="100px"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt=""
          />
        </figure>
        <div
          className="text-center mt-8 pb-2 mb-4"
          style={{ borderBottom: "1px solid rgb(193, 193, 193)" }}
        >
          <h2>{pokemon.name}</h2>
          <p>
            {pokemon.types?.length === 2
              ? `${pokemon.types?.[0].type.name}, ${pokemon.types?.[1].type.name}`
              : `${pokemon.types?.[0].type.name}`}
          </p>
          <span className="text-slate-500	">Type</span>
        </div>
        <div className="flex justify-around">
          <div className="w-12 text-center mb-4">
            <span className="text-slate-500	">HP</span>
            <p>{pokemon.stats?.[0].base_stat}</p>
          </div>
          <div className="w-12 text-center mb-4">
            <span className="text-slate-500	">ATTACK</span>
            <p>{pokemon.stats?.[1].base_stat}</p>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="w-12 text-center mb-4">
            <span className="text-slate-500	">DEFENSE</span>
            <p> {pokemon.stats?.[2].base_stat}</p>
          </div>
          <div className="w-12 text-center mb-4">
            <span className="text-slate-500	">SPEED</span>
            <p>{pokemon.stats?.[5].base_stat}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
