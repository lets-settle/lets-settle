import React from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import Login from './Login.jsx';
import axios from 'axios';
import bodyParser from 'body-parser';
import {BrowserRouter as Router, Link} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false
    }
  }

 checkLogin(status) {
    this.setState({
      isLoggedIn: status
    });
    console.log(this.state.isLoggedIn)
  }

  render () {
    return (
    <div>
    {/* <img id='title' src = {logo}/> */}
      <Login checkLogin = {this.checkLogin.bind(this)} isLoggedIn = {this.state.isLoggedIn}/>
    </div>
    )
  }
}

export default App;


