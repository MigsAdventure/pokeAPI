import React, { Component } from 'react'
import PokemonActions from '../actions/PokemonActions'
import PokemonStore from '../stores/PokemonStore'
import PokeTable from './PokeTable'

export default class Layout extends Component {
  constructor() {
    super();

    this.state = {
      mainPokemon: PokemonStore.getPokemon()
    }

    this._onChange = this._onChange.bind(this);
    this.fetchPokemon = this.fetchPokemon.bind(this);
  }

  componentWillMount() {
    PokemonStore.startListening(this._onChange);
  }

  componentWillUnmount() {  
    PokemonStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      mainPokemon: PokemonStore.getPokemon()
    });
  }

  fetchPokemon() { //since this is a custom method, it needs to be bound
    let {pokemonNumber} = this.refs;
    let number = pokemonNumber.value;
    PokemonActions.fetchPokemon(number);
  }

  render() {
    const {mainPokemon} = this.state;
     console.log('state of pokemon: ', mainPokemon.sprites)
    return (
      <div className='container'>
        <h1 className='text-center'>Choose Your Pokemon!</h1>
          <div className="row">
            <input type="number" ref="pokemonNumber"/>
            <div id="mainImageContainer">
              <img className="clearfix" id ="mainImage" src={mainPokemon.image}/>
              <h3 className="clearfix" id="mainName">{mainPokemon.name}</h3>
            </div>
            <button onClick={this.fetchPokemon} className="btn btn-primary clearfix">Get Pokemon</button>
            <PokeTable/>
          </div>
      </div>
    )
  }
}
