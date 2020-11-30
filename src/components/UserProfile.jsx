import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './styles/UserProfile.css'
import { FaGithubAlt, FaUser } from 'react-icons/fa';


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
        <div className='user-profile'>
          <h1><FaUser style={{marginRight: '2%'}} />{this.state.users.login}</h1>
          <p><em>{this.state.users.bio}</em></p>
          <img src={this.state.users.avatar_url} alt='avatar'/>
          <h4><em>This user has {this.state.users.public_repos} repos</em></h4>
          <Link style={{textDecoration: 'none'}} to={`/user/${this.state.users.login}/repos`}><button id='btn'>View Repos <FaGithubAlt style={{marginLeft:'0.5em'}}/></button></Link>
        </div>
      )
  }
}


export default UserProfile