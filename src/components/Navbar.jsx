import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { FaHome, FaSearch} from 'react-icons/fa';
import './styles/Navbar.css'


export class Navbar extends Component {
 
  render() {
    return (
      <nav className='navbar'>
        <Link to='/'><img src='images/GitHub-Mark.png' alt='logo'/></Link>
        <h1>React GitHub Browser</h1>
        <Link className='home-link' to='/'><FaHome /> Home</Link>
        <Link to='/search'><FaSearch /> Search</Link>
      </nav>
    )
  }
}

export default Navbar
