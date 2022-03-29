import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import Search from './Search';

const Pokedex = () => {

    const userName = useSelector(state => state.userName);

    const [pokemon, setPokemon] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1126&offset=0")
            .then(res => setPokemon(res.data.results));

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypes(res.data.results));
    },[]);

    const handleTypes = e => {
        axios.get(e)
            .then(res => setPokemon(res.data.pokemon));
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <p>Hello {userName}!</p>

            <Search />

            <select onChange={e => handleTypes(e.target.value)}>
                {
                    types.map(type => (
                        <option key={type.url} value={type.url}>
                            {type.name}
                        </option>
                    ))
                }
            </select>
            
            <ul>

                
                    
                {pokemon.map(pokemon => (
                    <PokemonCard 
                        key={pokemon.url? pokemon.url : pokemon.pokemon.url} 
                        pokemonUrl={pokemon.url? pokemon.url : pokemon.pokemon.url}
                    />
                ))}
                
            </ul>
            

        </div>
    );
};

export default Pokedex;