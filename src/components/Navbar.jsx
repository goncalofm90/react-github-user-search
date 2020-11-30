import './styles/Navbar.css'
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { FaHome, FaSearch, FaGithubAlt} from 'react-icons/fa';


export class Navbar extends Component {
 
  render() {
    return (
      <nav className='navbar'>
        <Link to='/'>< FaGithubAlt style={{border:'2px solid white', borderRadius:'50%', padding:'0.5em'}}/></Link>
        <h1>React GitHub Browser</h1>
        <Link className='home-link' to='/'><FaHome /> Home</Link>
        <Link to='/search'><FaSearch /> Search</Link>
      </nav>
    )
  }
}

export default Navbar
