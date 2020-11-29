import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export class UserProfile extends Component {
  constructor(props){
    super(props);
      this.state= { 
        users: [],
      }
    }
    componentDidMount(){
      axios.get(`https://api.github.com/users/${this.props.match.params.id}`)
      .then(res => {
        let data = {
          users: res.data,
        };
        this.setState(data) 
      })
      .catch(error => console.log(error));
  }

    render() {
      return (
        <div>
          <h1>{this.state.users.login}</h1>
          <p><em>{this.state.users.bio}</em></p>
          <img style={{width:'300px',height:'300px',border:'2px solid black' ,borderRadius:'50%'}}src={this.state.users.avatar_url} alt='avatar'/>
          <h1>This user has {this.state.users.public_repos} repos</h1>
          <Link to={`/user/${this.state.users.login}/repos`}><button>View Repos</button></Link>
        </div>
      )
  }
}


export default UserProfile