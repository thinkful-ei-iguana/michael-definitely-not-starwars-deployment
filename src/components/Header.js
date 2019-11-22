import React, { Component } from 'react'
import SearchBar from './SearchBar'

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <h1>STAR SEARCH</h1>
                <SearchBar />
            </div>
        )
    }
}

export default Header;