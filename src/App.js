import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Context from "./Context";
import "./App.css";

// REQUIREMENTS
// Allows users to search for character name and displays
//  matching characters.
// Deployed using Zeit's Now
// Loading Indicator
// search for: Planets, Vehicles, characters, films or speecies
// passing test suite

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }
  updateAppState = data => {
    console.log(data);
    this.setState({
      results: [...this.state.results, ...data.results]
    });
  };

  clearResults = () => {
    this.setState({
      results: []
    });
  };

  apiFetch = (searchParam, searchInput) => {
    const baseURL = "https://swapi.co/api";
    const fullUrl = `${baseURL}/${searchParam}/?search=${searchInput}`;
    console.log(fullUrl);
    return fetch(fullUrl)
      .then(response => {
        if (!response.ok) {
          console.log("An error occured");
          throw new Error("This is a problem");
        }
        return response;
      })
      .then(response => response.json())
      .then(data => this.updateAppState(data))
      .catch(err => {
        console.log("Handling error", err);
      });
  };

  render() {
    const contextValue = {
      results: this.state.results,
      apiFetch: this.apiFetch,
      clearResults: this.clearResults
    };
    return (
      <Context.Provider value={contextValue}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
      </Context.Provider>
    );
  }
}

export default App;
