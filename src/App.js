import React, { Component } from 'react';
import Useroutput from './Components/Useroutput';
import Userinput from './Components/Userinput';
import './App.css';

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Useroutput />
      <Userinput />
    </React.Fragment>
      
     
    );
  }
}

export default App;
