import React, { Component } from 'react';
import './App.css';
import Validation from './validationcomponent/validation';
import Char from './charComponent/charComponent';

class App extends Component {

  state = {
    Paragraph:''
  }

  changelistnerHandler = (event) => {
    this.setState ({Paragraph:event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.Paragraph.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({Paragraph:updatedText});
  }


  render() {
    const letterArray = this.state.Paragraph.split('').map((letter, index ) => {
          return <Char 
           letter={letter}
            key={index}
            click={() => this.deleteCharHandler(index)}/>;
      });

    return (
      <div className="App">
        <p>{this.state.Paragraph.length}</p>
        <input onChange={this.changelistnerHandler} value={this.state.Paragraph}></input>
        <p>{this.state.Paragraph}</p>
        <Validation paragraphlength={this.state.Paragraph.length}></Validation>
        {letterArray}
      </div>
    );
  }
}

export default App;
