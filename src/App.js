import React, { Component } from 'react';
import Useroutput from './Components/Useroutput';
import Userinput from './Components/Userinput';
import './App.css';

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Useroutput name="GEORGE"/>
      <Useroutput name="NEIN" />
      <Useroutput name="ABSOLUTELYNOT"/>
      <Useroutput name="HURRRDURR"/>

      <Userinput />
    </React.Fragment>
      
     
    );
  }
}

export default App;
