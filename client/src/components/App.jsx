import React from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Homepage from './Homepage.jsx';
import axios from 'axios';
import bodyParser from 'body-parser';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {Button, ButtonToolbar,Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      needSignUp: false,
      username: '',
    }
    this.checkLogin = this.checkLogin.bind(this)
    this.checkSignup = this.checkSignup.bind(this)
    this.setUsername = this.setUsername.bind(this)
  }

 checkLogin(status) {
    this.setState({
      isLoggedIn: status
    });
    console.log('this is from app is this logged in?:', this.state.isLoggedIn)
  }

  checkSignup() {
    this.setState({
      needSignUp: true
    })
    console.log('this is checking to see if they need to sign up', this.state.needSignUp)
  };

  setUsername(name) {
    this.setState({
      username: name
    })
  };

  getComponentProps(){
    return {
      checkLogin: this.checkLogin,
      checkSignup: this.checkSignup,
      isLoggedIn: this.state.isLoggedIn,
      setUsername = this.setUsername,
      username = this.state.username
    }
  }



  render () {
    return (
    <Router>
    <div>
    {/* <img id ='title' src={require('../../dist/images/logo.png')} /> */}

    {(!this.state.needSignUp && !this.state.isLoggedIn) && <Login {...this.getComponentProps()} />}
    {(this.state.needSignUp && !this.state.isLoggedIn) && <Signup  {...this.getComponentProps()} />}
    {this.state.isLoggedIn  && <Homepage {...this.getComponentProps()} />}

<Route path="/login" render = {() => {<Login {...this.getComponentProps()}/>}}/>
    </div>
    </Router>
    )
  }
}

export default App;


