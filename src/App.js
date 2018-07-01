import React, { Component } from 'react';
import PlayerContainer from './containers/player';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div>
        <PlayerContainer />
      </div>
    );
  }
}

export default App;
