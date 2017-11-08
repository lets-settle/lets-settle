import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        fullname: '',
        username: '',
        password: '',
        email: ''
      }

      this.changeName = this.changeName.bind(this);
      this.changeUsername = this.changeUsername.bind(this);
      this.changePassword = this.changePassword.bind(this);
      this.changeEmail = this.changeEmail.bind(this);
      this.signUpSubmit = this.signUpSubmit.bind(this);
    }

    changeName (value) {
      this.setState({
        fullname: value.target.value
      })
    }
    changeUsername (value) {
      this.setState({
        username: value.target.value
      })
    }
    changePassword (value) {
      this.setState({
        password: value.target.value
      })
    }
    changeEmail (value) {
      this.setState({
        email: value.target.value
      })
    }
    
    signUpSubmit () {
      let form = this;

      console.log('Form submitted')
      // axios.post('/signup', {
      //   name: form.state.fullname,
      //   username: form.state.username,
      //   password: form.state.password,
      //   email: form.state.email
      // }).then(response => {
      //   console.log(response);
      // }).catch(err => {
      //   console.log(err)
      // })

    }

  render() {
    return (
    <div>
      <form className="form-horizontal">
        <div className="form-group">
          <label for="inputName" className="col-sm-2 control-label">Full Name</label>
          <div className="col-sm-10">
            <input className="form-control" id="inputName" placeholder="Full Name" value={this.state.fullname} onChange={this.changeName}/> 
          </div>
        </div>
        <div className="form-group">
          <label for="inputUsername" className="col-sm-2 control-label">Username</label>
          <div className="col-sm-10">
            <input className="form-control" id="inputUsername" placeholder="Username" value={this.state.username} onChange={this.changeUsername}/>
          </div>
        </div>
        <div className="form-group">
          <label for="inputPassword" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={this.state.password} onChange={this.changePassword}/>
          </div>
        </div>
        <div className="form-group">
          <label for="inputEmail" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" value={this.state.email} onChange={this.changeEmail}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default" onClick={this.signUpSubmit}>Sign Up</button>
          </div>
        </div>
      </form>
    </div>
    ) 
  }
}

export default Signup;