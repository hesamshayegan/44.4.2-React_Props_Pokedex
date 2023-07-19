import React from "react";
import Pokedex from "./Pokedex";

function Pokegame(props) {
    // Create two arrays to represent the hands of two players
    let hand1 = [];
    // Copy the original array passed via props
    let hand2 = [...props.pokemon];

    // Distribute random Pokémon from hand2 to hand1 until they have the same number of Pokémon
    while (hand1.length < hand2.length) {
       // take a random pokemon from hand 2, add it to hand 1
       let randIdx = Math.floor(Math.random() * hand2.length);
       // Remove the selected Pokémon from hand2
       let randPokemon = hand2.splice(randIdx, 1)[0]
       // Add the selected Pokémon to hand1
       hand1.push(randPokemon) 
    }

    // Calculate the total experience points (exp) for each hand
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    // Render two instances of the Pokedex component to display each player's hand
    return (
        <div>
            <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
            <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        </div>
    );
}


//  If the parent component does not provide a value for a prop, the default value specified in defaultProps will be used instead.
Pokegame.defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };
  
  export default Pokegame;