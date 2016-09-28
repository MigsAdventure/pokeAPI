// data that we receive from the server goes inside Server Actions
//data goes to store from here
import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receivePokemon(pokeImage, pokeName) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_POKEMON',
      payload: {pokeImage, pokeName}
    }) 
  },

  renderPokemon(pokeName) {
    AppDispatcher.dispatch({
      type: 'RENDER_POKEMON',
      payload: {pokeName}
    })
  },

  pokeStats (pokeStats) {
    AppDispatcher.dispatch({
      type:'POKE_STATS',
      payload: {pokeStats}
    })
  }
}

export default ServerActions;