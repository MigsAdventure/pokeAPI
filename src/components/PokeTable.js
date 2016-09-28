import React, {Component} from 'react';
import PokemonStore from '../stores/PokemonStore'
import PokemonActions from '../actions/PokemonActions'

export default class PokeTable extends Component {
  constructor() {
    super();

      this.state= {
        allPokemon: PokemonStore.getAll(),
        complete: PokemonStore.getStats(),
        pokeInfo: ''
      }
    this._onChange = this._onChange.bind(this);
    this.renderPokemon = this.renderPokemon.bind(this);
    this.getStats = this.getStats.bind(this);
  }

  componentWillMount() {
    PokemonStore.startListening(this._onChange);
  }

  componentWillUnmount() {  
    PokemonStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      allPokemon: PokemonStore.getAll(),
      complete: PokemonStore.getStats(),
    })
  }

  renderPokemon() {
    PokemonActions.renderPokemon();
  }

  getStats(e) {
    let number = e;
    PokemonActions.pokeStats(number);
  }

  render() {
    let keys = ['Capture Rate: ', 'Happiness: ', 'Color: ', 'Shape: '];
    let {allPokemon, complete,} = this.state;
    let eachPokemon = allPokemon.results || [];

    console.log("this is stats",complete)
    console.log("value:", complete.capture_rate)
    return (
      <div>
        <button className="btn btn-success renderBtn" onClick={this.renderPokemon}>Render Pokemon</button>
          <div>
        { 
          eachPokemon.map((pokemon,i) => (<div onClick={this.getStats.bind(null, (i+1))}  key={i} className="col-xs-2 pokeSquare">
                                          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`} />{pokemon.name}
                                          </div>) //end of return
          ) //end of map 
        }
          <div id="test">{complete.capture_rate}</div>
          </div>
      </div>
      ) //end of return
  } //end of render
} //end of class