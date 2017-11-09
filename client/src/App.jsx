import React from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import Login from './components/Login.jsx';
import axios from 'axios';
import bodyParser from 'body-parser';
// import {BrowserRouter as Router, Link} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
<<<<<<< HEAD
      isLoggedIn: false
=======
      groups: [],
      loggedIn: false
>>>>>>> [add] working on firebase login sessions
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
<<<<<<< HEAD
    {/* <img id='title' src = {logo}/> */}
<<<<<<< HEAD
      <Login checkLogin = {this.checkLogin.bind(this)} isLoggedIn = {this.state.isLoggedIn}/>
=======
      {<Login isLoggedIn = {this.loggedIn}/>}
=======
    {/* <img id='title' src = {require('../dist/images/logo.png')}/> */}
        This goes to homepage or login
      {<Login loggedIn={this.state.loggedIn}/>}
>>>>>>> [add] working on firebase login sessions
>>>>>>> [add] working on firebase login sessions
    </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('app'));