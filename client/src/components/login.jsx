import React from 'react';
import Signup from './Signup.jsx';
import Homepage from './Homepage.jsx';
const axios = require('axios');
const config = require('../../../fireconfig.js')
const firebase = require('firebase/app');
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const app = firebase.initializeApp(config);


class Login extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        user: null,
        // username: '',
        email: '',
        password: ''
      };

      this.handleLoginInput = this.handleLoginInput.bind(this);
      this.loginButton = this.loginButton.bind(this);
      this.signUpButton = this.signUpButton.bind(this);
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
      
      console.log('Im logging in', this.state.email, this.state.password);

      // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      //   .then(function() {
      //     // Existing and future Auth states are now persisted in the current
      //     // session only. Closing the window would clear any existing state even
      //     // if a user forgets to sign out.
      //     // ...
      //     // New sign-in will be persisted with session persistence.
      //     return firebase.auth().signInWithEmailAndPassword(email, password);
      //   })
      //   .catch(function(error) {
      //     // Handle Errors here.
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //   });
      
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Login Error!', errorCode, errorMessage)
      }).then((result) => {
        console.log('im in login: ', result);
        console.log('im in login2: ', result.user);
        this.props.checkLogin(true);
        // const user = result.user;
        // this.setState({
          //   user
          // });
        });
        
      axios.post('/api/login', {
        email: this.state.email
      }).then(response => {
          console.log('getting username back', response.data)
<<<<<<< HEAD
          this.props.setUsername(response.data);
          this.props.checkLogin(true);
=======
          this.setState({
            username: response.data 
          })
>>>>>>> [add]correctly passing username state to homepage after signing up
        }, err => {
          console.log('cant get', err)
        })
                
      this.setState({
        email: '',
        password: ''
      });
    };
    
    signUpButton(e) {
      e.preventDefault();

      // this.setState({
      //   needSignUp: true
      // })
    };
  
  render() {
    return (
      <Router>
    <div>
    <img id ='title' src={require('../../dist/images/logo.png')} />
      <form className="form-horizontal" onSubmit={this.loginButton}>
        <div className="form-group">
          <div className="col-sm-10">
            <input className="form-control" id="inputEmail" placeholder="Email" name="email" value={this.state.email} onChange={this.handleLoginInput}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" value={this.state.password} onChange={this.handleLoginInput}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <div className="checkbox">
              <label>
                <input type="checkbox"/> Remember me
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-danger" onSubmit={() => {this.props.checkLogin(true)}}>Login</button>
          </div>
        </div>
      </form>
      <button type="click" className="btn btn-danger" onClick={() => this.props.checkSignup()}>Signup</button>
    </div>
    </Router>
    ) 
  }
}

export default Login;