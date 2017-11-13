import React from 'react';
const $ = require('jquery');
import {Button, ButtonToolbar,Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import firebase, {auth} from '../../../fireconfig.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.onLogoutClick = this.onLogoutClick.bind(this)
    }

    onLogoutClick(e) {
      e.preventDefault();
      auth.signOut().then(function() {
              this.props.checkLogin(false);
              console.log('is it logged in?:', this.props.isLoggedIn)
        // Window.localStorage.removeItem(Object.keys(window.sessionStorage)[0])
        }).catch(function(error) {
        console.log('there was an error logging out', error)
      });
    }
    
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <LinkContainer to = '/homepage/decisions'>
              <a className="navbar-brand" href="#" id="nav-title">
                {/* <img src={require('../../dist/images/yelpsettle.png')}/> */}
                Yelp Settle
              </a>
            </LinkContainer>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {this.props.username}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <LinkContainer to = '/homepage/creategroup'>
                    <a className="dropdown-item" href="#">Create Group</a>
                  </LinkContainer>
                  <div className="dropdown-divider"></div>
                  <LinkContainer to = '/'>
                    <a className="dropdown-item" href="#" onSelect={() => {this.props.checkLogin(false)}}>Log out</a>
                  </LinkContainer>
                </div>
            </div>
          </nav>
        </div>
    </div>
    ) 
  }
}

export default Homepage;