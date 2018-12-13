import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <Routes />
      </div>
    );
  }
}

export default App;
