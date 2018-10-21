import React, { Component } from 'react';
import './App.css';
import Validation from './validationcomponent/validation';
import Char from './charComponent/charComponent';

class App extends Component {

  state = {
    Paragraph:[
      {Text: "" }
    ]
  }

  changelistnerHandler = (event) => {
    this.setState ({
      Paragraph: [
        {Text:event.target.value}
      ]
    })
  }

  deleteHandler = (paragraphIndex) => {
      
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.Paragraph[0].Text.length}</p>
        <input onChange={this.changelistnerHandler} value={this.state.Paragraph[0].Text}></input>
        <p>{this.state.Paragraph[0].Text}</p>
        <Validation paragraphlength={this.state.Paragraph[0].Text.length}></Validation>
        <Char />
      </div>
    );
  }
}

export default App;
