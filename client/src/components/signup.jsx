import React from 'react';
import Homepage from './Homepage.jsx';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import firebase, {auth} from '../../../fireconfig.js';
import axios from 'axios';
import {withRouter} from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        username: '',
        email: '',
        password: '',
        formErrors: {name: '', username: '', email: '', password: ''},
        nameValid: false,
        usernameValid: false,
        emailValid: false,
        passwordValid: false,
        formValid: false
      }

    this.handleUserInput = this.handleUserInput.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.errorClass = this.errorClass.bind(this);
    this.signUpSubmit = this.signUpSubmit.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        console.log(user);
      } else {
        console.log('not logged in')
      }
    })
  }
  
  handleUserInput (e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value},
      () => { this.validateField(name, value) });
  }
      
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let usernameValid = this.state.usernameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    
    switch(fieldName) {
      case 'name':
      nameValid = value.length > 0;
      fieldValidationErrors.name = nameValid ? '': ' field is empty';
      break;
      case 'username':
      usernameValid = value.length > 0;
      fieldValidationErrors.username = usernameValid ? '': ' field is empty';
      break;
      case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
      case 'password':
      passwordValid = value.length >= 6;
      fieldValidationErrors.password = passwordValid ? '': ' is too short';
      break;
      default:
      break;
    }
    this.setState({formErrors: fieldValidationErrors,
      nameValid: nameValid,
      usernameValid: usernameValid,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }
      
  validateForm() {
    this.setState({formValid: this.state.nameValid && this.state.usernameValid && this.state.emailValid && this.state.passwordValid});
  }
    
  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  signUpSubmit (e) {
    e.preventDefault();
    let email = this.state.email;
    
    console.log('Form submitted');

    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Sign Up Error!', errorCode, errorMessage);
    }).then((result) => {
      this.props.checkLogin(true);

      axios.post('/api/signup', {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email
      }).then(response => {
        this.props.setUsername(this.state.username)
        this.props.history.push("homepage/decisions");
        }).catch(err => {
          console.log('FAILED TO POST: ', err);
        })
    });
  }


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
            <form className="form-horizontal">
              <div className='formErrors' id="error">
                {Object.keys(this.state.formErrors).map((fieldName, i) => {
                  if(this.state.formErrors[fieldName].length > 0){
                    return (
                      <p key={i}>{fieldName} {this.state.formErrors[fieldName]}</p>
                    )        
                  } else {
                    return '';
                  }
                })}
              </div>
              <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
                <div>
                  <input className="form-control" id="inputName" placeholder="Full Name" name="name" value={this.state.name} onChange={this.handleUserInput}/> 
                </div>
              </div>
              <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
                <div>
                  <input className="form-control" id="inputUsername" placeholder="Username" name="username" value={this.state.username} onChange={this.handleUserInput}/>
                </div>
              </div>
              <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                <div>
                  <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="email" value={this.state.email} onChange={this.handleUserInput}/>
                </div>
              </div>
              <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                <div>
                  <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" value={this.state.password} onChange={this.handleUserInput}/>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <button type="submit" className="btn btn-danger" disabled={!this.state.formValid} onClick={this.signUpSubmit}>Sign Me Up!</button>
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

export default withRouter(Signup);