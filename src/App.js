import React, {Component} from 'react';
import Itemlist from './components/Itemlist';


class App extends Component{
  render(){

let names =  ['vai trello','rcodue','troppo duci','come paria']
  return (
  <div>
  <Itemlist items = {names}></Itemlist>
  </div>
  );
  }
}

export default App;
