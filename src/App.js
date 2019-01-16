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

  somethingHandler = () => {
    // this.state.name[0].name = 'NOTHING LEFT BUT RUIN';
    this.setState({
      name:[
        { name: 'RUIN'},
        { name: 'GLUTTON'},
        { name: 'POOP'},
        { name: 'GEORGIE'}
      ] 
    })
  }

  render() {
    return (
    <div className="App">
    
      <button onClick={this.somethingHandler}>lies</button>
      <Useroutput 
        name={this.state.name[0].name}/>
      <Useroutput 
        name={this.state.name[1].name} />
      <Useroutput 
        name={this.state.name[2].name}/>
      <Useroutput 
        name={this.state.name[3].name}/>
      
      <Userinput
        click ={this.somethingHandler} />
    </div>  
     
    );
  }
}

export default App;
 