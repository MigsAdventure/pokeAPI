import API from '../API'


//action creaters

const PokemonActions = {
  fetchPokemon(number) { //since the info is coming from the internet,
    API.fetchPokemon(number); //this calls this API method we created in the API file
  },

  renderPokemon() {
    API.renderPokemon();
  },

  pokeStats(number) {
    API.pokeStats(number);
  }
} //end of Pokemon actions

export default PokemonActions;