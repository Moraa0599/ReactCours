import React, { Component } from 'react';
import './App.css';
import Validation from './validationcomponent/validation';
import Char from './charComponent/charComponent';

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

  deleteHandler = (paragraphIndex) => {
      const letter = this.state.Paragraph[0].length;
      
  }


  render() {
    return (
      <div className="App">
        <p>{this.state.Paragraph[0].length}</p>
        <input onChange={this.changelistnerHandler} value={this.state.Paragraph[0].ParagraghText}></input>
        <p>{this.state.Paragraph[0].ParagraghText}</p>
        <Validation paragraphlength={this.state.Paragraph[0].length}></Validation>
        <Char letter = {this.state.Paragraph[0].ParagraghText}/>
      </div>
    );
  }
}

export default App;
