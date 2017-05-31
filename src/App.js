import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>

        <div>
          <h1>Title goes here</h1>
        </div>

        <div className='row'>

          <div className='col-xs-4'>
            pokemon index
          </div>

          <div className='col-xs-7'>
            pokemon show
          </div>

        </div>
      </div>
    );
  }
}

export default App;
