import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

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
      })
      .catch(error => console.log(error));
  }

    render() {
    return (
      <div>
       <h1>{this.props.match.params.id}'s Repositories:</h1>
      <Link to={`/user/${this.props.match.params.id}`}><button>Back to User Profile</button></Link>
        <div>
         {this.state.repos.map((repo,i) => (
           <div key={this.state.repos[i].id}style={{margin:'5% auto',border: '2px solid black', width:'20%'}}>
          <p>{repo.name}</p>
          <p>{repo.description}</p>
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
