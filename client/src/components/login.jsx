import React from 'react';
import Signup from './Signup.jsx';
import Homepage from './Homepage.jsx';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import firebase, {auth} from '../../../fireconfig.js';
import axios from 'axios';
import {withRouter} from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        user: null,
        email: '',
        password: ''
      };

      this.handleLoginInput = this.handleLoginInput.bind(this);
      this.loginButton = this.loginButton.bind(this);
    }

    componentWillMount() {
      auth.onAuthStateChanged((user) => {
        if(user) {
          console.log('authStateChange', user.email);
          // this.props.history.push("homepage/decisions");
        } else {
          console.log('not logged in')
        }
      })
    }

    handleLoginInput (e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value})
    }

    loginButton (e) {
      e.preventDefault();
      const email = this.state.email;
      const password = this.state.password;

      // auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
      //   .then(function() {
      //     // firebase.auth().signInWithEmailAndPassword(email, password);
      //   })
      //   .catch(function(error) {
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //   });
      
      auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function() {
          return auth.signInWithEmailAndPassword(email, password);
        })
        .catch(function(error) {
          let errorCode = error.code;
          let errorMessage = error.message;
        });
      
      auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Login Error!', errorCode, errorMessage)
      }).then((result) => {
        console.log('im in login: ', result);
        this.props.checkLogin(true);
        });

        
      axios.post('/api/login', {
        email: this.state.email
      }).then(response => {
          this.props.setUsername(response.data)
          this.props.history.push("homepage/decisions");
        }, err => {
          console.log('cant get', err)
        })
                
      this.setState({
        email: '',
        password: ''
      });
    };
  
  render() {
    return (
    <div>
      <Link to = '/'>
        <img 
          id ='title' 
          src={require('../../dist/images/yelpsettle.png')}/>
      </Link>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form 
              className="form-horizontal" 
              onSubmit={this.loginButton}>
              <div className="form-group">
                <input className="form-control" 
                  id="inputEmail" 
                  placeholder="Email" 
                  name="email" 
                  value={this.state.email} 
                  onChange={this.handleLoginInput}/>
              </div>
              <div className="form-group">
                <input 
                  type="password" 
                  className="form-control" 
                  id="inputPassword" 
                  placeholder="Password" 
                  name="password" 
                  value={this.state.password} 
                  onChange={this.handleLoginInput}/>
              </div>
              <div className="form-group" id="login-buttons">
                <div>
                    <button 
                      type="submit" 
                      className="btn btn-danger"
                      onSubmit={() => {this.props.checkLogin(true)}}>
                      Login
                    </button>
                  <Link to = '/signup'>
                    <button 
                      type="click" 
                      className="btn btn-danger"
                      id="settle-button">
                      Sign Up
                    </button>
                  </Link>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    ) 
  }
}

export default withRouter(Login);