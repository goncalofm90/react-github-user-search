import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';


export class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>
          <img style={{width:'30px', height:'30px'}}src='images/GitHub-Mark.png' alt='logo'/>
          React GitHub Browser
        </h1>
        <Link style={{padding:'1em'}} to='/'>Home</Link>
        <Link to='/search'>Search</Link>
      </nav>
    )
  }
}

export default Navbar
