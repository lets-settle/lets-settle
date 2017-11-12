import React from 'react';
const $ = require('jquery');
<<<<<<< HEAD
import {Button, ButtonToolbar} from 'react-bootstrap';
import {Route, Link} from 'react-router-dom';
=======
import {Button, ButtonToolbar,Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import socketIOClient from "socket.io-client";
import firebase, {auth} from '../../../fireconfig.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';




>>>>>>> [rebase] refactoring

class Decisions extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
  }
=======

    this.state = {
        showSolo: false,
        showFriends: false,
        isHidden: false,
        createGroup: false
    };

    this.onFriendsClick = this.onFriendsClick.bind(this)
    this.onSoloClick = this.onSoloClick.bind(this)
    this.onCreateGroupClick = this.onCreateGroupClick.bind(this)
    this.onLogoutClick = this.onLogoutClick.bind(this)
    }

    componentDidMount() {
        const endpoint = "http://127.0.0.1:1128";
        const socket = socketIOClient("http://127.0.0.1:1128");
        
        socket.emit('randomNumber', {number: Math.random()});
        socket.on('heardRandomNumber', function(data){
            console.log('data', data);
        })
    }

    handleEvent(){
        this.state.socket.emit
    }

    onFriendsClick (e) {
      e.preventDefault();
        console.log('friends was clicked')
        this.setState({
            showSolo: false,
            showFriends: true,
            createGroup: false
        });
      }
    onSoloClick (e) {
      e.preventDefault();
        console.log('solo was clicked')
        this.setState({
            showSolo: true,
            showFriends: false,
            createGroup: false
        });
    }

    onCreateGroupClick() {
        console.log('create was clicked creategroup', this.state.createGroup, this.state.showSolo, this.state.showFriends)
        this.setState({
            createGroup: true,
            showSolo: false,
            showFriends: false
        });
    }

    onLogoutClick() {
        this.props.checkLogin(false);
        console.log('is it logged in?:', this.props.isLoggedIn)
        auth.signOut().then(function() {
            // Sign-out successful.

        
           }).catch(function(error) {
            // An error happened.
           });
    }
>>>>>>> [rebase] refactoring

  render() {
    return (
        <div>
            <ButtonToolbar>
                <Link to = "/homepage/solo"><Button bsStyle="danger" bsSize="large" >Solo</Button></Link>
                <Link to = "/homepage/friends"><Button bsStyle="danger" bsSize="large" >Friends</Button></Link>
            </ButtonToolbar>
        </div>
    ) 
  }
}

export default Decisions;