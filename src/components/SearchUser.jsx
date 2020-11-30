import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { FaGithubAlt} from 'react-icons/fa';
import './styles/SearchUser.css'

export class SearchUser extends Component {
  constructor(props){
    super(props);
      this.state= { 
        query: '',
        users: [],
        showResults: false,
      }
  }
  handleChange = (evt) => {
    this.setState({
      query: evt.target.value,
    })
  };
  handleSubmit = event => {
    event.preventDefault();
    axios.get(`https://api.github.com/search/users?q=${this.state.query}`)
      .then(res => {
        let data = {
          users: res.data,
        };
        this.setState(data) 
        console.log(data)
        this.setState({showResults: true})
        this.setState({query: ''})
      })
      .catch(error => console.log(error));
      this.setState({query: ''})
  }


  render() {
    return (
      <div className='search-user'>
      <h3><FaGithubAlt /> Github User Search</h3>
      <form onSubmit={this.handleSubmit}>
        <input 
        placeholder='Search for a user'
        value={this.state.query}
        onChange={this.handleChange}
        />
        <p><button id='btn' disabled={!this.state.query || /^\s/.test(this.state.query) } onClick={this.handleSubmit}>Search</button></p>
      </form>
      {this.state.showResults &&
        <div>
           {!this.state.users.items.length &&
        <h1>There are no users with that name.</h1>
           }
         {this.state.users.items.map((user,i) => (
           <div className='results-div' key={this.state.users.items[i].id}>
          <p>{user.login}</p>
          <img src={user.avatar_url}alt='avatar'/>
          <Link style={{textDecoration: 'none'}} to={`/user/${this.state.users.items[i].login}`}><button id='btn'>View Profile</button></Link>
          </div>
        ))}
      </div>
       }
       </div>
    )
  }
}

export default SearchUser
