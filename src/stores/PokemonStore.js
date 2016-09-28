import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher'

let _pokemon = {};
let _allPokemon = [];
let _pokeStats = [];

class PokemonStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_POKEMON':
          _pokemon =  {
            name: action.payload.pokeName,
            image:action.payload.pokeImage
          };
          this.emit('CHANGE');
          break;

          case 'RENDER_POKEMON' :
            _allPokemon = action.payload.pokeName;
            this.emit('CHANGE');
            break;

          case 'POKE_STATS' :
            console.log("pokestats",action.payload.pokeStats)
            _pokeStats = action.payload.pokeStats;
            this.emit('CHANGE');
            break;
      }
    }) //end of dispatcher
  }//end of constructor
  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getPokemon() {
      return _pokemon;
  }

  getAll() {
    return _allPokemon;
  }

  getStats() {
    return _pokeStats;
  }
}

export default new PokemonStore();