import React from 'react';
import Signup from './Signup.jsx';
import Homepage from './Homepage.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        username: '',
        password: ''
      }

      this.loginButton = this.loginButton.bind(this);
    }

    loginButton (e) {
      e.preventDefault();
      console.log('Im logging in');
    }
  
  render() {
    return (
    <div>
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-sm-10">
            <input className="form-control" id="inputUsername" placeholder="Username" value={this.state.username} onChange={this.changeUsername}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={this.state.password} onChange={this.changePassword}/>
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
      <Homepage />
      <Signup />
    </div>
    ) 
  }
}

export default Login;