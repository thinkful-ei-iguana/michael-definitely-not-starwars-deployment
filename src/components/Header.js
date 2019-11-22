import React, { Component } from 'react'
import SearchBar from './SearchBar'

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <SearchBar />
            </div>
        )
    }
}

export default Header;