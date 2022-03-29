import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexInfo = () => {

    const { name } = useParams();
    const [ pokemon, setPokemon ] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then(res => setPokemon(res.data));
    }, [ name ]);
    console.log(pokemon);

    return (
        <>
            <div>
                <img src={pokemon.sprites?.front_default} alt="" />
                <p><b>{pokemon.weight}</b> Weight</p>
                <p><b>{pokemon.height}</b> Height</p>
                <h1>{pokemon.name}</h1>
                <h2># {name}</h2>
            </div>

            <div>
                <h1>Type</h1>
                <div>
                    {
                        pokemon.types?.map(types => (
                            <div>
                                {types.type.name}
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <h1>Abilites</h1>
                <div>
                    {
                        pokemon.abilities?.map(abilities => (
                            <div>
                                {abilities.ability.name}
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <h1>Movements</h1>
                <div>
                    {
                        pokemon.moves?.map(moves => (
                            <div>
                                {moves.move.name}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default PokedexInfo;