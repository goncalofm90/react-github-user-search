import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';


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
        this.setState({showResults: true})
        this.setState({query: ''})
      })
      .catch(error => console.log(error));
      this.setState({query: ''})
  }


  render() {
    return (
      <div>
      <h3>Search for a user</h3>
      <form onSubmit={this.handleSubmit}>
        <input 
        placeholder='Search for a user'
        value={this.state.query}
        onChange={this.handleChange}
        />
        <button disabled={!this.state.query || /^\s/.test(this.state.query) } onClick={this.handleSubmit}>Search</button>
      </form>
      {this.state.showResults &&
        <div>
           {!this.state.users.items.length &&
        <h1>There are no users with that name.</h1>
           }
         {this.state.users.items.map((user,i) => (
           <div key={this.state.users.items[i].id}style={{margin:'5% auto',border: '2px solid black', width:'20%'}}>
          <p>{user.login}</p>
          <img style={{width:'150px', height: '150px'}} src={user.avatar_url}alt='avatar'/>
          <Link to={`/user/${this.state.users.items[i].login}`}><button>View Profile</button></Link>
          </div>
        ))}
      </div>
       }
       </div>
    )
  }
}

export default SearchUser
