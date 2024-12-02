import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
    const fetchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => {
            setPokemon(response.data.results);
        })
        .catch(error => {
            console.error('Error fetching Pokémon data:', error);
        });
    };

        fetchPokemon();
    }, []);
return (
    <div>
    <h1>Pokémon List</h1>
    <ul>
        {pokemon.map((poke, index) => (
        <li key={index}>{poke.name}</li>
        ))}
    </ul>
    </div>
);
};

export default PokemonList;