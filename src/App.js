import React, {Component} from 'react';


class App extends Component{
  render(){

let names =  ['vai bello','rcodue','troppo duci']
  return (
    
  <div >
      <header >
       {names.map(name=> <p> Ciao {name} </p>)}
      </header>
    </div>
  );
  }
}

export default App;
