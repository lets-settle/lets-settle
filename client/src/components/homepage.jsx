import React from 'react';
import YelpList from './YelpList.jsx';
import App from './App.jsx';
import Solo from './Solo.jsx';
import Login from './Login.jsx';
import Decisions from './Decisions.jsx';
import CreateGroup from './CreateGroup.jsx';
import Result from './result'
const $ = require('jquery');
import {Button, ButtonToolbar,Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import socketIOClient from "socket.io-client";
const firebase = require('firebase/app');
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

<<<<<<< HEAD
//   const endpoint = "http://127.0.0.1:1128";
const socket = socketIOClient("http://127.0.0.1:1128");
=======



>>>>>>> [rebase]

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      showSolo: false,
      showFriends: false,
      isHidden: false,
      createGroup: false,
      suggestion: '',
      showResult: false,
      userResturants: []
=======
        showSolo: false,
        showFriends: false,
        isHidden: false,
        createGroup: false
>>>>>>> [rebase]
    };

    this.onFriendsClick = this.onFriendsClick.bind(this)
    this.onSoloClick = this.onSoloClick.bind(this)
    this.onCreateGroupClick = this.onCreateGroupClick.bind(this)
    this.onLogoutClick = this.onLogoutClick.bind(this)
    this.sendSuggestion = this.sendSuggestion.bind(this)
    // this.selectedResturant = this.selectedResturant.bind(this)
    }

<<<<<<< HEAD
    componentWillMount() {      
      socket.on('showSuggestion', data => {
          console.log('dataaaaaaaaSOCKET', data);
          console.log('stateeeee', this.state);
          let rest = this.state.userResturants.concat([data]);
          this.setState({
            userResturants: rest
        })
      })
=======
    componentDidMount() {
        const endpoint = "http://127.0.0.1:1128";
        const socket = socketIOClient("http://127.0.0.1:1128");
        
        socket.emit('randomNumber', {number: Math.random()});
        socket.on('heardRandomNumber', function(data){
            console.log('data', data);
        })
>>>>>>> [rebase]
    }

    // selectedResturant(data) {
    //     this.setState({
    //         userResturants: this.state.userResturants.push(data)
    //     }, function() {
    //         console.log('selectedResturanttttt', this.state.userResturants);
    //       });
    // }

    handleEvent(){
        this.state.socket.emit
    }

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
            createGroup: false,
            showResult: false
        });
    }

    onCreateGroupClick() {
<<<<<<< HEAD
      console.log('create was clicked creategroup', this.state.createGroup, this.state.showSolo, this.state.showFriends)
      this.setState({
          createGroup: true,
          showSolo: false,
          showFriends: false,
          showResult: false
      });
=======
        console.log('create was clicked creategroup', this.state.createGroup, this.state.showSolo, this.state.showFriends)
        this.setState({
            createGroup: true,
            showSolo: false,
            showFriends: false
        });
>>>>>>> [rebase]
    }

    onLogoutClick() {
        this.props.checkLogin(false);
        console.log('is it logged in?:', this.props.isLoggedIn)
        firebase.auth().signOut().then(function() {
            // Sign-out successful.

        
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



  render() {
    return (
        <Router>
    <div>
      <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Yelp Settle</a>
            </Navbar.Brand>
        </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={3} title={this.props.username}  id="basic-nav-dropdown">
            <LinkContainer to = '/createGroup' >
              <MenuItem onSelect={this.onCreateGroupClick} eventKey={3.1}>Create Group</MenuItem>
            <LinkContainer>
              <MenuItem divider />
              <MenuItem onSelect={() => {this.props.checkLogin(false)}} eventKey={3.2}>Log Out</MenuItem>

            </NavDropdown>
          </Nav>
        </Navbar>
        
        <img id ='title' src={require('../../dist/images/logo.png')} />
{/* 
        {(!this.state.showSolo && !this.state.showFriends && !this.state.createGroup) && <ButtonToolbar>
            <Button bsStyle="danger" bsSize="large" onClick = {this.onSoloClick}>Solo</Button>
            <Button bsStyle="danger" bsSize="large" onClick = {this.onFriendsClick}>Friends</Button>
        </ButtonToolbar>} */}




<<<<<<< HEAD
{/* 
        <Route path='/solo' component={Solo}/>
        <Route path='/friends' component={YelpList}/> */}

        {this.state.createGroup ? <CreateGroup setUsername = {this.props.setUsername} username = {this.props.username}/> : ''}
        {this.state.showSolo ? <Solo username = {this.props.username}/> : ''}
        {this.state.showFriends ? <YelpList username = {this.props.username} sendSuggestion = {this.sendSuggestion}/> : '' }
        {this.state.showResult ? <Result suggestion={this.state.suggestion} userResturants={this.state.userResturants}/> : null}
=======

        {/* {this.state.createGroup ? <CreateGroup setUsername = {this.props.setUsername} username = {this.state.username}/> : ''}
        {this.state.showSolo ? <Solo username = {this.state.username}/> : ''}
        {this.state.showFriends ? <YelpList username = {this.state.username}/> : '' } */}
>>>>>>> [rebase]

      <Route path='/decisions' component={Decisions}/>
    <Route path='/createGroup' component={CreateGroup}/>
    </div>
    </Router>
    ) 
  }
}

export default Homepage;