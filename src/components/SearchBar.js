import React, { Component } from 'react';
import API from './API'

export default class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state={
            name: {
                value: ''
            }
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }

    handleSearchType = (type) => {
        console.log(type)
    }

    handleSearchInput = () => {

    }

    validateSearch = () => {

    }


    render(){
        return(
            <div className="search-bar">
                <form id="search-form" onSubmit={e => this.handleSubmit(e)}>
                    <select name="search-type" onChange={e => this.handleSearchType(e.target.value)}>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                    </select>
                    <label forHtml="search-input">Search for:
                        <input 
                        className="search-input"
                        type="text"
                        name="search"
                        onChange={e => this.handleSearchInput(e.target.value)} />
                    </label>
                </form>
            </div>
        )
    }
}