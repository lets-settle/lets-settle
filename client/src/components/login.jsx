import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
    <div>
      <form className="form-horizontal">
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
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input type="checkbox"/> Remember me
              </label>
            </div>
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

export default Login;