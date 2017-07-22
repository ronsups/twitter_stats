import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Twitter Stats</h2>
        </div>
        <p className="App-intro">
          Search for a hashtag to view its stats.
        </p>
      </div>
    );
  }
}

export default App;
