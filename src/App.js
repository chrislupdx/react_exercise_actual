import React, { Component } from 'react';
import Useroutput from './Components/Useroutput';
import Userinput from './Components/Userinput';
import './App.css';

class App extends Component {

  state = {
    name: 'GEROGE',
  }

  somethingHandler = (event) => {
    this.setState({ name: event.target.value, });
  }

  render() {
    return (
    <div className="App">
    
      <Useroutput 
        name={this.state.name}/>
      <Useroutput 
        name={this.state.name} />
      <Useroutput 
        name={this.state.name}/>
      <Useroutput 
        name={this.state.name}/>
      
      <Userinput
        changed = {this.somethingHandler}
        currentName = {this.state.name}
        />
    </div>  
     
    );
  }
}

export default App;
 