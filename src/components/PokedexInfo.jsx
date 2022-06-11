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

      <div className="main-info">
        <div className="info-container">
          <figure>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.order}.png`}
              alt=""
            />
          </figure>
          <h2># {pokemon.order}</h2>
          <div className="name-pokemon">
            <div className="line">
              <h1>{pokemon.name}</h1>
            </div>
          </div>
          <div className="stats-pokemon">
            <div>
              <p>Weight</p>
              <b>{pokemon.weight}</b>
            </div>
            <div>
              <p>Height</p>
              <b>{pokemon.height}</b>
            </div>
          </div>

          <section className="types-container">
            <div className="type-container">
              <h3>Type</h3>
              <div className="type">
                {pokemon.types?.map((types) => (
                  <div className={`abilities white-font ${types.type.name}`}>
                    {types.type.name}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3>Abilites</h3>
              <div className="type">
                {pokemon.abilities?.map((abilities) => (
                  <div className="abilities ">{abilities.ability.name}</div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="movements-container">
          <div className="title">
            <h1>Movements</h1>
          </div>
          <div className="moves">
            {pokemon.moves?.map((moves) => (
              <div className="move">{moves.move.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexInfo;
