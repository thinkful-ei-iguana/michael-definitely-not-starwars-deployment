import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import Context from './Context'
import API from './components/API'
import './App.css';


// REQUIREMENTS 
// Allows users to search for character name and displays
//  matching characters.
// Deployed using Zeit's Now
// Loading Indicator
// search for: Planets, Vehicles, characters, films or speecies
// passing test suite

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      results: []
    }
  }

  render(){
    const contextValue = {
      results: this.state.results
    }
    return (
      <Context.Provider value={contextValue}>
        <div className="App">
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
