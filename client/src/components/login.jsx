import React from 'react';
import Signup from './Signup.jsx';
import Homepage from './Homepage.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
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
    
      console.log('Im logging in', this.state.email, this.state.password);
      // axios.post('/login', formData)
      //   .then(response => {
      //       console.log(response);
      //     }).catch(err => {
      //       console.log(err)
      //     })

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
      <Homepage />
      <Signup />
    </div>
    ) 
  }
}

export default Login;