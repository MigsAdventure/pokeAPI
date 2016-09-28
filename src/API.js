//file where we make API calls

import $ from 'jquery';
import ServerActions from './actions/ServerActions'


const API = {
  fetchPokemon(number) {
    $.get(`https://pokeapi.co/api/v2/pokemon/${number}`, pokemon => {
      ServerActions.receivePokemon(pokemon.sprites.front_default, pokemon.name);
    }); 
  },

  renderPokemon() {
    $.get(`http://pokeapi.co/api/v2/pokemon/?limit=712&offset=0`, pokemon => {
      ServerActions.renderPokemon(pokemon);
    });
  },

  pokeStats(number) {
     $.get(`https://pokeapi.co/api/v2/pokemon-species/${number}`, pokeStats => {
      ServerActions.pokeStats(pokeStats);
    }); 
  }

}
export default API;