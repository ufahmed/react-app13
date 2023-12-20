import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css'; // You can create or import CSS for styling

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <h1>List of Pokemon</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;