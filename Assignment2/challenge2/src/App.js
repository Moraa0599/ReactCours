import React, { Component } from 'react';
import './App.css';
import Validation from './validationcomponent/validation';

class App extends Component {

  state = {
    Paragraph:[
      {ParagraghText: "" , length: 0}
    ]
  }

  changelistnerHandler = (event) => {
    this.setState ({
      Paragraph: [
        {ParagraghText:event.target.value , length:event.target.value.length}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.Paragraph[0].length}</p>
        <input onChange={this.changelistnerHandler} value={this.state.Paragraph[0].ParagraghText}></input>
        <p>{this.state.Paragraph[0].ParagraghText}</p>
        <Validation paragraphlength={this.state.Paragraph[0].length}></Validation>
      </div>
    );
  }
}

export default App;
