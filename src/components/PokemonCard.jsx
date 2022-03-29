
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemonUrl }) => {

    const [ pokemon, setPokemon ] = useState({});

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data));
    },[pokemonUrl]);

    return (
        <div>
            <Link to={`/pokedex/${pokemon.name}`}>
                <h2>{pokemon.name}</h2>
                <p><b>Types: </b>
                {
                    pokemon.types?.length === 2 ? (
                        `${pokemon.types?.[0].type.name}, ${pokemon.types?.[1].type.name}`
                    ) : (
                        `${pokemon.types?.[0].type.name}`
                    )
                }  
                </p>
                <p><b>hp: </b>{pokemon.stats?.[0].base_stat}</p>    
                <p><b>attack: </b>{pokemon.stats?.[1].base_stat}</p>
                <p><b>Defense: </b>{pokemon.stats?.[2].base_stat}</p>
                <p><b>Speed: </b>{pokemon.stats?.[5].base_stat}</p>
                <img src={pokemon.sprites?.front_default } alt="" />
            </Link>
        </div>
    );
};

export default PokemonCard;