import React, { Component } from 'react';
import Useroutput from './Components/Useroutput';
import Userinput from './Components/Userinput';
import './App.css';

class App extends Component {

  state = {
    name: [
      {name: 'GEROGE' },
      {name: 'nein'},
      {name : "ABSOLUTENOT"},
      {name: "HURRDURR"},
    ]

  }

  render() {
    return (
    <React.Fragment>
      <Useroutput name={this.state.name[0].name}/>
      <Useroutput name={this.state.name[1].name} />
      <Useroutput name={this.state.name[2].name}/>
      <Useroutput name={this.state.name[2].name}/>

      <Userinput />
    </React.Fragment>
      
     
    );
  }
}

export default App;
 