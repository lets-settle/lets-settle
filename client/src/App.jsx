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
      isLoggedIn: false
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
 checkLogin(status) {
    this.setState({
      isLoggedIn: status
    });
    console.log(this.state.isLoggedIn)
  }
=======
>>>>>>> [rebase] working on login authentication
=======
  checkLogin(status) {
    this.setState({
      isLoggedIn: status
    });

    console.log(this.state.isLoggedIn)
  }
>>>>>>> [add] working on login persistence

 render () {
    return (
    <div>
    {/* <img id='title' src = {logo}/> */}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      {<Login isLoggedIn = {this.state.isLoggedIn}/>}
>>>>>>> [rebase] working on login authentication
=======
      <Login checkLogin={this.checkLogin.bind(this)} isLoggedIn={this.state.isLoggedIn}/>
>>>>>>> [add] working on login persistence
    </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById('app'));