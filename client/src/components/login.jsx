import React from 'react';
import Signup from './Signup.jsx';
import Homepage from './Homepage.jsx';

const config = require('../../../fireconfig.js')
const firebase = require('firebase');

const app = firebase.initializeApp({
  config: 
    apikey: firekey,
    authDomain: "yelpsettle.firebaseapp.com",
    databaseURL: "https://yelpsettle.firebaseio.com",
    projectId: "yelpsettle",
    storageBucket: "yelpsettle.appspot.com",
    messagingSenderId: "737656551674"
});


class Login extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        username: '',
        email: '',
        password: ''
      }
      this.handleLoginInput = this.handleLoginInput.bind(this);
      this.loginButton = this.loginButton.bind(this);
    }



    handleLoginInput (e) {
      let name = e.target.name;
      let value = e.target.value;
      this.setState({[name]: value})
    }

    loginButton (e) {
      e.preventDefault();
      let email = this.state.email;
      let password = this.state.password;

      console.log('Im logging in', this.state.email, this.state.password);

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Login Error!', errorCode, errorMessage)
      });

      axios.get('/login', {
        email: email,
        password: password
      }).then(response => {
        this.setState({
          username: response.data.username
        })
      })

      this.setState({
        email: '',
        password: ''
      })
    }
  
  render() {
    return (
    <div>
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
            <button type="submit" className="btn btn-default" onClick={this.loginButton}>Login</button>
          </div>
        </div>
      </form>
      <Homepage username={this.state.username}/>
      <Signup />
    </div>
    ) 
  }
}

export default Login;