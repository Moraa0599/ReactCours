import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    lengthP:[
      {ParagraghLengh: 0}
    ]
  }

  changelistnerHandler = (event) => {
    const textLength = event.target.value.length;
    this.setState ({
      lengthP: [
        {ParagraghLengh:event.target.value}
      ]
    })
  }

  render() {
    return (
      <div className="App">
      <input onChange={this.changelistnerHandler} value={this.state.lengthP[0].ParagraghLengh}></input>
      <p>{this.state.lengthP[0].ParagraghLengh}</p>
      </div>
    );
  }
}

export default App;
