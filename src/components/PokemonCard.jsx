import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(pokemonUrl).then((res) => setPokemon(res.data));
  }, [pokemonUrl]);

  return (
    <div className="card">
      <Link
        className={`card-pokemon card-${pokemon.types?.[0].type.name}`}
        to={`/pokedex/${pokemon.name}`}
      >
        <figure className={pokemon.types?.[0].type.name}>
          <img
            width="100px"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.order}.png`}
            alt=""
          />
        </figure>
        <div className="name-pokemon">
          <h2>{pokemon.name}</h2>
          <p>
            {pokemon.types?.length === 2
              ? `${pokemon.types?.[0].type.name}, ${pokemon.types?.[1].type.name}`
              : `${pokemon.types?.[0].type.name}`}
          </p>
          <span>Type</span>
        </div>
        <div className="stats">
          <div className="stat">
            <span>HP</span>
            <p>{pokemon.stats?.[0].base_stat}</p>
          </div>
          <div className="stat">
            <span>ATTACK</span>
            <p>{pokemon.stats?.[1].base_stat}</p>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <span>DEFENSE</span>
            <p> {pokemon.stats?.[2].base_stat}</p>
          </div>
          <div className="stat">
            <span>SPEED</span>
            <p>{pokemon.stats?.[5].base_stat}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
