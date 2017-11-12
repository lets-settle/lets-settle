import React from 'react';
const $ = require('jquery');
import {Button, ButtonToolbar,Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
const firebase = require('firebase/app');
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.onLogoutClick = this.onLogoutClick.bind(this)
    }

    onLogoutClick() {
<<<<<<< HEAD
      auth.signOut().then(function() {
        // Sign-out successful.
              this.props.checkLogin(false);
              console.log('is it logged in?:', this.props.isLoggedIn)
        // Window.localStorage.removeItem(Object.keys(window.sessionStorage)[0])
        }).catch(function(error) {
        // An error happened.
        console.log('there was an error logging out', error)
      });
    }
    
=======
        auth.signOut().then(function() {
          // Sign-out successful.
               this.props.checkLogin(false);
               console.log('is it logged in?:', this.props.isLoggedIn)
          // Window.localStorage.removeItem(Object.keys(window.sessionStorage)[0])
          }).catch(function(error) {
          // An error happened.
          });
      }
      
      sendSuggestion(restname) {
            this.setState({
              suggestion: restname,
              showResult: true,
              showSolo: false,
              showFriends: false,
              createGroup: false
            }, function() {
              console.log('send suggestionnnnn', this.state.suggestion);
              socket.emit('aSuggestion', this.state.suggestion);
            });
          }

<<<<<<< HEAD
=======
    sendSuggestion(restInfo) {
        this.setState({
          suggestion: restInfo,
          showResult: true,
          showSolo: false,
          showFriends: false,
          createGroup: false
        }, function() { 
          console.log('send suggestionnnnn', this.state.suggestion);
          socket.emit('aSuggestion', this.state.suggestion);
        });
    }
>>>>>>> Add yelplist groupSelect logic and rebase



>>>>>>> Add yelplist groupSelect logic and rebase
  render() {
    return (
      <div>
      <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
            <LinkContainer to = '/homepage/decisions'>
              <a href="#">Yelp Settle</a>
              </LinkContainer>
            </Navbar.Brand>
        </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={3} title={this.props.username}  id="basic-nav-dropdown">
            <LinkContainer to = '/homepage/creategroup'>
              <MenuItem onSelect={this.onCreateGroupClick} 
                eventKey={3.1}>
                Create Group
              </MenuItem>
            </LinkContainer>
              <MenuItem divider />
              <LinkContainer to = '/'>
              <MenuItem 
                onSelect={() => {this.props.checkLogin(false)}} 
                eventKey={3.2}>
                Log Out
              </MenuItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar>
        {/* <Link to = '/'> */}
          {/* <div>
          <img 
          id ='title' 
          src={require('http://localhost:1128/logo.png')}/>
          </div> */}
        {/* </Link> */} 
    </div>
    ) 
  }
}

export default Homepage;