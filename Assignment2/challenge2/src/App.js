import React, { Component } from 'react';
import './App.css';

class App extends Component {

  changelistnerHandler = (event) => {
    const textLength = event.target.value.length;
  }

  render() {
    return (
      <div className="App">
      <input></input>
      </div>
    );
  }
}

export default App;
