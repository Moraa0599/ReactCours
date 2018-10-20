import React, { Component } from 'react';
import './App.css';
import validation from './validationcomponent/validation';

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
      <input onChange={this.changelistnerHandler} value={this.state.Paragraph[0].ParagraghText}></input>
      <validation  ParagraphLength = {this.state.Paragraph[0].length}/>
      <p>{this.state.Paragraph[0].ParagraghText}</p>
      </div>
    );
  }
}

export default App;
