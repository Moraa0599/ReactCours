import React, { Component } from 'react';
import './App.css';
import Userinput from './user/Userinput';
import UserOutput from './user/UserOutput';

class App extends Component {
  state = {
    username: [
      {name:'Jose'}
    ]
  }

  changeStatehandler = (event) => {
    this.setState( {
      username: [
        { name:event.target.value}
      ]
    } )
  }

  render() {
    return (
      <div>
        <Userinput
        changeState = {this.changeStatehandler}
        oldName ={this.state.username[0].name}
        ></Userinput>

        <UserOutput 
        username ={this.state.username[0].name}/>
        
      </div>
    );
  }
}

export default App;
