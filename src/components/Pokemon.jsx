import React, { useState } from 'react';

const Pokemon = () => {
    let [pokemonList, setPokemonList] = useState([]);

    const getPokemon = () => {
        console.log("gotta catch em all!");

        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response => {
            return response.json();
        })
        .then(convertedResponse => {
            console.log(convertedResponse);
            setPokemonList(convertedResponse.results);
            console.log(pokemonList);
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <>
        <div>
            <button onClick={ getPokemon } className="mt-2 mb-2 btn btn-dark">Click to see them all!</button>
            {
                pokemonList.map((pokemon, idx) => {
                    return(
                        <div key={ idx }>
                            <h3>{ pokemon.name }</h3>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Pokemon;