import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { FaGithubAlt} from 'react-icons/fa';
import axios from 'axios';
import './styles/UserRepos.css'


export class UserRepos extends Component {
  constructor(props){
    super(props);
      this.state= { 
        repos: [],
      }
    }
    componentDidMount(){
      axios.get(`https://api.github.com/users/${this.props.match.params.id}/repos`)
      .then(res => {
        let data = {
          repos: res.data,
        };
        this.setState(data) 
        console.log(data)
      })
      .catch(error => console.log(error));
  }

    render() {
    return (
      <div className='user-repos'>
        <div className='repos-header'>
       <h1>{this.props.match.params.id}'s repositories:</h1>
      <Link style={{textDecoration: 'none'}} to={`/user/${this.props.match.params.id}`}><button id='btn'>Back to User Profile</button></Link>
      </div>
        <div>
         {this.state.repos.map((repo,i) => (
           <div className='single-repo' key={this.state.repos[i].id}>
          <h1>{repo.name}</h1>
          <FaGithubAlt style={{
          borderRadius: '50%' ,
          border:'2px solid black', 
          padding:'2%',
          height:'10%' , 
          width:'10%'
        }}
        /> 
          {repo.description &&
          <div>
          <p><strong>Description:</strong></p>
          <p>{repo.description}</p>
          </div>
          }
          <a target='_blank' href={repo.svn_url}><button id='btn'>Visit Repo</button></a>
          </div>
        ))}
        </div>
        {!this.state.repos.length  &&
       <p>This user has no repositories.</p> } 
    </div>
    )
  }
}


export default UserRepos
