import './components/styles/App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import SearchUser from './components/SearchUser';
import UserProfile from './components/UserProfile';
import UserRepos from './components/UserRepos';
import {BrowserRouter as Router,Route} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/user/:id' component={UserProfile} />
      <Route exact path='/user/:id/repos' component={UserRepos} />
      <Route path='/search' component={SearchUser} />
    </div>
    </Router>
  );
}

export default App;
