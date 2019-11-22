import React, { Component } from "react";
import Context from "../Context";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: {
        value: ""
      },
      searchType: {
        value: "people"
      }
    };
  }
  static contextType = Context;

  handleSubmit = e => {
    e.preventDefault();
    this.context.apiFetch(
      this.state.searchType.value,
      this.state.searchInput.value
    );
  };

  handleSearchType = type => {
    console.log(type);
    this.setState({
      searchType: { value: type }
    });
  };

  handleSearchInput = searchInput => {
    this.setState({
      searchInput: { value: searchInput }
    });
  };

  validateSearch = () => {};

  render() {
    return (
      <div className="search-bar">
        <form id="search-form" onSubmit={e => this.handleSubmit(e)}>
          <select
            name="search-type"
            onChange={e => this.handleSearchType(e.target.value)}
          >
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="planets">Planets</option>
            <option value="species">Species</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
          </select>
          <label forhtml="search-input">
            Search for:
            <input
              className="search-input"
              type="text"
              name="search"
              onChange={e => this.handleSearchInput(e.target.value)}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
