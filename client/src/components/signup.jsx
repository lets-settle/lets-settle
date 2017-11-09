import React from 'react';
import Homepage from './Homepage.jsx';

class Signup extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        username: '',
        email: '',
        password: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
      }

      this.handleUserInput = this.handleUserInput.bind(this);
      this.validateField = this.validateField.bind(this);
      this.validateForm = this.validateForm.bind(this);
      this.signUpSubmit = this.signUpSubmit.bind(this);
      this.errorClass = this.errorClass.bind(this);
    }
    
    handleUserInput (e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value}), () => { this.validateField(name, value) };
    }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;

      switch(fieldName) {
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
                      emailValid: emailValid,
                      passwordValid: passwordValid
                    }, this.validateForm);
    }

    validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    signUpSubmit (e) {
      let form = this;
      e.preventDefault();

      const formData = {};
      for (const field in this.refs) {
        formData[field] = this.refs[field].value;
      }

      e.target.reset();

      console.log('Form submitted', formData);
      // axios.post('/signup', formData)
      //   .then(response => {
      //     console.log(response);
      //   }).catch(err => {
      //     console.log(err)
      //   })

    }

    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }

  render() {  
    return (
    <div>
      <form className="form-horizontal" onSubmit={this.signUpSubmit}>
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
        <div className="form-group">
<<<<<<< HEAD
<<<<<<< HEAD
          <label htmlFor="inputName" className="col-sm-2 control-label">Full Name</label>
=======
          <label htmlfor="inputName" className="col-sm-2 control-label">Full Name</label>
>>>>>>> [add] console logs to check if inputs values are correct
=======
          <label htmlFor="inputName" className="col-sm-2 control-label">Full Name</label>
>>>>>>> [add] working on validating sign up form. email and password.
          <div className="col-sm-10">
            <input className="form-control" id="inputName" placeholder="Full Name" name="name" value={this.state.name} onChange={this.handleUserInput}/> 
          </div>
        </div>
        <div className="form-group">
<<<<<<< HEAD
<<<<<<< HEAD
          <label htmlFor="inputUsername" className="col-sm-2 control-label">Username</label>
=======
          <label htmlfor="inputUsername" className="col-sm-2 control-label">Username</label>
>>>>>>> [add] console logs to check if inputs values are correct
=======
          <label htmlFor="inputUsername" className="col-sm-2 control-label">Username</label>
>>>>>>> [add] working on validating sign up form. email and password.
          <div className="col-sm-10">
            <input className="form-control" id="inputUsername" placeholder="Username" name="username" value={this.state.username} onChange={this.handleUserInput}/>
          </div>
        </div>
<<<<<<< HEAD
        <div className="form-group">
<<<<<<< HEAD
          <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
=======
          <label htmlfor="inputPassword" className="col-sm-2 control-label">Password</label>
>>>>>>> [add] console logs to check if inputs values are correct
=======
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
>>>>>>> [add] working on validating sign up form. email and password.
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="email" value={this.state.email} onChange={this.handleUserInput}/>
          </div>
        </div>
<<<<<<< HEAD
        <div className="form-group">
<<<<<<< HEAD
          <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
=======
          <label htmlfor="inputEmail" className="col-sm-2 control-label">Email</label>
>>>>>>> [add] console logs to check if inputs values are correct
=======
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
>>>>>>> [add] working on validating sign up form. email and password.
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" value={this.state.password} onChange={this.handleUserInput}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default" disabled={!this.state.formValid}>Sign Up</button>
          </div>
        </div>
      </form>
      <Homepage />
    </div>
    ) 
  }
}

export default Signup;