import React from 'react';
import Homepage from './Homepage.jsx';
const axios = require('axios');
const config = require('../../../fireconfig.js')
const firebase = require('firebase');

// const app = firebase.initializeApp(config);

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
        formValid: false,
        user: '',
      }

      this.handleUserInput = this.handleUserInput.bind(this);
      this.validateField = this.validateField.bind(this);
      this.validateForm = this.validateForm.bind(this);
      this.errorClass = this.errorClass.bind(this);
      this.signUpSubmit = this.signUpSubmit.bind(this);
    }

    componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
        }
      });
    };
    
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
      let password = this.state.password;

      console.log('Form submitted');
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Sign Up Error!', erroroCode, errorMessage);
      }).then((result) => {
        let user = result.user;
        this.setState({
          user
        });
      });

      axios.post('/api/signup', {
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      }).then(response => {
          console.log('Submit User Info to Server/DB', response);
          this.setState({
            name: '',
            username: '',
            email: '',
            password: ''
          })
        }).catch(err => {
          console.log('FAILED TO POST: ', err);
        })


    }


  render() {  
    return (
    <div>
      <form className="form-horizontal">
        <div className='formErrors'>
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
          <label htmlFor="inputName" className="col-sm-2 control-label">Full Name</label>
          <div className="col-sm-10">
            <input className="form-control" id="inputName" placeholder="Full Name" name="name" value={this.state.name} onChange={this.handleUserInput}/> 
          </div>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
          <label htmlFor="inputUsername" className="col-sm-2 control-label">Username</label>
          <div className="col-sm-10">
            <input className="form-control" id="inputUsername" placeholder="Username" name="username" value={this.state.username} onChange={this.handleUserInput}/>
          </div>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="email" value={this.state.email} onChange={this.handleUserInput}/>
          </div>
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" value={this.state.password} onChange={this.handleUserInput}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default" disabled={!this.state.formValid} onClick={this.signUpSubmit}>Sign Up</button>
          </div>
        </div>
      </form>
      <Homepage username={this.state.username}/>
    </div>
    ) 
  }
}

export default Signup;