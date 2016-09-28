import React from 'react'
import { render } from 'react-dom'
import './stores/PokemonStore' //not importing anything FROM there, it just makes sure that the code is executed immediately 
import Layout from './components/Layout'

render(
  <Layout/>,
  document.getElementById('root')
);
