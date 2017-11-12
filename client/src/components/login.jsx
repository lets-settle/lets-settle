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
        // username: '', 
        email: '',
        password: ''
      };

      this.handleLoginInput = this.handleLoginInput.bind(this);
      this.loginButton = this.loginButton.bind(this);
    }

    // componentWillMount() {
    //   auth.onAuthStateChanged((user) => {
    //     if(user) {
    //       console.log('authStateChange', user.email);
    //     } else {
    //       console.log('not logged in')
    //     }
    //   })
    // }

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
      
      auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Login Error!', errorCode, errorMessage)
      }).then((result) => {
        console.log('im in login: ', result);
        // console.log('i logged in', JSON.parse(Object.values(window.sessionStorage)).uid)
        // console.log('i logged in', typeof Object.keys(window.sessionStorage)[0])
        // this.setState({
        //   userid: JSON.parse(Object.values(window.sessionStorage)).uid
        // })
        this.props.checkLogin(true);

        // const user = result.user;
        // this.setState({
          //   user
          // });
        });
        console.log(this.state.userid)
        console.log(this.state.userid)
        
      axios.post('/api/login', {
        email: this.state.email
        // uid: uid
      }).then(response => {
          console.log('getting username back', response.data)
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
          src={require('../../dist/images/logo.png')}/>
      </Link>
      <form 
        className="form-horizontal" 
        onSubmit={this.loginButton}>
        <div className="form-group">
          <div className="col-sm-10">
            <input className="form-control" 
              id="inputEmail" 
              placeholder="Email" 
              name="email" 
              value={this.state.email} 
              onChange={this.handleLoginInput}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input 
              type="password" 
              className="form-control" 
              id="inputPassword" 
              placeholder="Password" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleLoginInput}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
              <button 
                type="submit" 
                className="btn btn-danger" 
                onSubmit={() => {this.props.checkLogin(true)}}>
                Login
              </button>
          </div>
        </div>
      </form>
      <Link to = '/signup'>
        <button 
          type="click" 
          className="btn btn-danger">
          Singup
        </button>
      </Link>
    </div>
    ) 
  }
}

export default withRouter(Login);