import React, { Component } from 'react';
import projects from './Components/projects'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My App
          <projects />
      </div>
    );
  }
}

export default App;
