import React from 'react';
import Signup from './Signup.jsx';
import Homepage from './Homepage.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);

      this.loginButton = this.loginButton.bind(this);
    }

    loginButton (e) {
      e.preventDefault();
      
      const formData = {};
      for (const field in this.refs) {
        formData[field] = this.refs[field].value;
      }
      
      console.log('Im logging in', formData);
      // axios.post('/login', formData)
      //   .then(response => {
      //       console.log(response);
      //     }).catch(err => {
      //       console.log(err)
      //     })
    }
  
  render() {
    return (
    <div>
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-sm-10">
            <input className="form-control" id="inputUsername" placeholder="Username" ref="username" onChange={this.changeUsername}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" ref="password" onChange={this.changePassword}/>
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