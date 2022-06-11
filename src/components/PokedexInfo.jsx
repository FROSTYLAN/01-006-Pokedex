import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/style-info.css";
import pokedex from "../images/pokedex.png";

const PokedexInfo = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((res) => setPokemon(res.data));
  }, [name]);
  console.log(pokemon);

  return (
    <div className="Info">
      <div className="rectangle nav-pokedex">
        <div className="img">
          <img src={pokedex} alt="" />
        </div>
        <div className="rectangle small"></div>
      </div>
      <div className="info-container">
        <figure>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.order}.png`}
            alt=""
          />
        </figure>
        <p>
          <b>{pokemon.weight}</b> Weight
        </p>
        <p>
          <b>{pokemon.height}</b> Height
        </p>
        <h1>{pokemon.name}</h1>
        <h2># {pokemon.order}</h2>
      </div>

      <section className="types-container">
        <div>
          <h1>Type</h1>
          <div>
            {pokemon.types?.map((types) => (
              <div>{types.type.name}</div>
            ))}
          </div>
        </div>

        <div>
          <h1>Abilites</h1>
          <div>
            {pokemon.abilities?.map((abilities) => (
              <div>{abilities.ability.name}</div>
            ))}
          </div>
        </div>
      </section>

      <div className="movements-container">
        <h1>Movements</h1>
        <div>
          {pokemon.moves?.map((moves) => (
            <div>{moves.move.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokedexInfo;
