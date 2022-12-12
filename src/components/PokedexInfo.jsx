import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/style-info.css";
import headerPokedex from "../images/headerPokedex.png";

const PokedexInfo = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((res) => setPokemon(res.data));
  }, [name]);

  return (
    <div className="Info">
      <header className="w-full">
        <img src={headerPokedex} className="w-full" alt="header" />
      </header>

      <div className="ml-8 mr-8">
        <div className="m-auto mt-40 pb-12 max-w-6xl rounded text-center flex flex-col items-center shadow-2xl">
          <figure className="w-full h-48 text-center ">
            <img
              className="relative w-48 m-auto sm:w-80 "
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt=""
            />
          </figure>
          <h2 className="mt-8 mb-4 text-3xl"># {pokemon.order}</h2>
          <div className="name-pokemon">
            <div className="line">
              <h1 className="ml-8 mr-8 text-4xl">{pokemon.name}</h1>
            </div>
          </div>
          <div className="flex">
            <div className="mt-8 mb-8 ml-12 mr-12">
              <p>Weight</p>
              <b className="text-black text-xl">{pokemon.weight}</b>
            </div>
            <div className="mt-8 mb-8 ml-12 mr-12">
              <p>Height</p>
              <b className="text-black text-xl">{pokemon.height}</b>
            </div>
          </div>

          <section className="flex flex-col md:flex-row">
            <div>
              <h3>Type</h3>
              <div className="flex ml-8 mr-8 flex-wrap justify-center">
                {pokemon.types?.map((types) => (
                  <div
                    className={`m-4 p-1 rounded-3xl text-white w-24 ${types.type.name}`}
                  >
                    {types.type.name}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3>Abilites</h3>
              <div className="flex ml-8 mr-8 flex-wrap justify-center">
                {pokemon.abilities?.map((abilities) => (
                  <div className="pt-1 pb-1 pl-4 pr-4 m-4 rounded-3xl bg-slate-200">
                    {abilities.ability.name}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="m-auto mt-24 mb-24 pb-16 pl-16 pr-16 max-w-6xl rounded shadow-2xl text-center flex flex-col items-center">
          <div className="title">
            <h1 className="text-black p-8">Movements</h1>
          </div>
          <div className="flex flex-wrap">
            {pokemon.moves?.map((moves) => (
              <div className="pt-2 pb-2 pl-8 pr-8 m-2 rounded-3xl bg-slate-200">
                {moves.move.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexInfo;
