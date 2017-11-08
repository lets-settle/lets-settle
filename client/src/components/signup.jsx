import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        fullName = '',
        username = '',
        password = '',
        email = ''
      }

      this.changeName = this.changeName.bind(this);
      this.changeUsername = this.changeUsername.bind(this);
      this.signUpSubmit = this.signUpSubmit.bind(this);
    }

    changeName(value) {
      this.setState({
        fullname: value.target.value()
      })
    }
    
    signUpSubmit() {
      axios.post('/signup', {
        name: this.fullName,
        username: this.username,
        password: this.password,
        email: this.email
      }).then(response => {
        console.log(response);
      }).catch(err => {
        console.log(err)
      })

      this.setState({
        fullName: '',
        username: '',
        password: '',
        email: ''
      })
    }

  render() {
    return (
    <div>
      <form class="form-horizontal">
        <div class="form-group">
          <label for="inputName" class="col-sm-2 control-label">Full Name</label>
          <div class="col-sm-10">
            <input class="form-control" id="inputName" placeholder="Full Name" value={this.state.fullname} onChange={this.changeName}> 
          </div>
        </div>
        <div class="form-group">
          <label for="inputUsername" class="col-sm-2 control-label">Username</label>
          <div class="col-sm-10">
            <input class="form-control" id="inputUsername" placeholder="Username">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword" class="col-sm-2 control-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" placeholder="Password">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPwConfirmation" class="col-sm-2 control-label">Password Confirmation</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPwConfirmation" placeholder="Password">
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail" placeholder="Email">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default" onClick="">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
    ) 
  }
}

export default Signup;