import React from 'react';
import Homepage from './Homepage.jsx';

class Signup extends React.Component {
  constructor(props) {
    super(props);

      this.signUpSubmit = this.signUpSubmit.bind(this);
    }
    
    signUpSubmit (e) {
      let form = this;
      e.preventDefault();

      const formData = {};
      for (const field in this.refs) {
        formData[field] = this.refs[field].value;
      }

      console.log('Form submitted')
      axios.post('/signup', formData)
        .then(response => {
          console.log(response);
        }).catch(err => {
          console.log(err)
        })

    }

  render() {  
    return (
    <div>
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="inputName" className="col-sm-2 control-label">Full Name</label>
          <div className="col-sm-10">
            <input className="form-control" id="inputName" placeholder="Full Name" ref="name" onChange={this.changeName}/> 
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputUsername" className="col-sm-2 control-label">Username</label>
          <div className="col-sm-10">
            <input className="form-control" id="inputUsername" placeholder="Username" ref="username" onChange={this.changeUsername}/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" ref="password" onChange={this.changePassword}/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" ref="email" onChange={this.changeEmail}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default" onClick={this.signUpSubmit}>Sign Up</button>
          </div>
        </div>
      </form>
      <Homepage />
    </div>
    ) 
  }
}

export default Signup;