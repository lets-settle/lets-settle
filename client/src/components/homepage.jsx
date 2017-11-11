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
<<<<<<< HEAD
=======
    this.sendSuggestion = this.sendSuggestion.bind(this)
    // this.selectedResturant = this.selectedResturant.bind(this)
    }

    componentDidMount() {
     socket.on('showSuggestion', data => {
           console.log('dataaaaaaaaSOCKET', data);
           console.log('stateeeee', this.state);
           let rest = this.state.userResturants.concat([data]);
           this.setState({
             userResturants: rest
    })
  })
  }

    // selectedResturant(data) {
    //     this.setState({
    //         userResturants: this.state.userResturants.push(data)
    //     }, function() {
    //         console.log('selectedResturanttttt', this.state.userResturants);
    //       });
    // }

    // handleEvent(){
    //     this.state.socket.emit
    // }

    onFriendsClick (e) {
      e.preventDefault();
        console.log('friends was clicked')
        this.setState({
            showSolo: false,
            showFriends: true,
            createGroup: false,
            showResult: false
        });
      }
    onSoloClick (e) {
      e.preventDefault();
        console.log('solo was clicked')
        this.setState({
          showSolo: true,
          showFriends: false,
          showFriends: false,
          createGroup: false,
          showResult: false
        });
    }

    onCreateGroupClick() {
        console.log('create was clicked creategroup', this.state.createGroup, this.state.showSolo, this.state.showFriends)
        this.setState({
          createGroup: true,
          showSolo: false,
          showFriends: false,
          showResult: false
<<<<<<< HEAD
<<<<<<< HEAD
        });
=======
=======
          showFriends: false
>>>>>>> [rebase]
=======
>>>>>>> [rebase]
      });
>>>>>>> [rebase]
>>>>>>> [rebase]
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
<<<<<<< HEAD
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
=======
      auth.signOut()
        .then(() => {
          // Sign-out successful.
          this.props.checkLogin(false);
          console.log('is it logged in?:', this.props.isLoggedIn)
        }).catch(error => {
        // An error happened.
        });
    }
>>>>>>> [rebase]




>>>>>>> [rebase]
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
<<<<<<< HEAD
        {/* <Link to = '/'> */}
          {/* <div>
          <img 
          id ='title' 
          src={require('http://localhost:1128/logo.png')}/>
          </div> */}
<<<<<<< HEAD
        {/* </Link> */} 
=======
        {/* </Link> */}

        {/* {this.state.showFriends ? 
          <Decisions 
            username = {this.props.username} 
            sendSuggestion = {this.sendSuggestion}/> : '' }
        {this.state.showResult ? 
          <Result 
            suggestion={this.state.suggestion} 
            userResturants={this.state.userResturants}/> : null} */}
=======
        
        <img id ='title' src={require('../../dist/images/logo.png')} />

        {(!this.state.showSolo && !this.state.showFriends && !this.state.createGroup) && <ButtonToolbar>
            <Button bsStyle="danger" bsSize="large" onClick = {this.onSoloClick}>Solo</Button>
            <Button bsStyle="danger" bsSize="large" onClick = {this.onFriendsClick}>Friends</Button>
        </ButtonToolbar>}


{/* 
        <Route path='/solo' component={Solo}/>
        <Route path='/friends' component={YelpList}/> */}

        {this.state.createGroup ? <CreateGroup setUsername = {this.props.setUsername} username = {this.props.username}/> : ''}
        {this.state.showSolo ? <Solo username = {this.props.username}/> : ''}
        {this.state.showFriends ? <YelpList username = {this.props.username}/> : '' }
        {this.state.showResult ? <Result suggestion={this.state.suggestion} userResturants={this.state.userResturants}/> : null}
        {/* <Route path='/' component={App}/> */}
        {/* <Route path='/createGroup' component={CreateGroup}/> */}
>>>>>>> [rebase]
>>>>>>> [rebase]
    </div>
    ) 
  }
}

export default Homepage;