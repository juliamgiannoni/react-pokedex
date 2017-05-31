import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PokeDetails from './components/PokeDetails'
import PokeList from './components/PokeList'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <h1>Title goes here</h1>
        </div>

        <div className='row'>
          <div className='col-xs-4'>
            <PokeList />
          </div>
          <div className='col-xs-7'>
            <PokeDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
