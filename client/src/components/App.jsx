import React from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import Login from './Login.jsx';
import CreateGroup from './CreateGroup.jsx';
import Decisions from './Decisions.jsx';
import Signup from './Signup.jsx';
import Solo from './Solo.jsx';
import YelpList from './YelpList.jsx';
import Homepage from './Homepage.jsx';
import Result from './result';
import axios from 'axios';
import bodyParser from 'body-parser';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {Button, Redirect, ButtonToolbar,Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://127.0.0.1:1128");

// const socket = io(`/${group}`);
// console.log('THIS IS GROUP', group);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      needSignUp: false,
      username: '',
      suggestion: '',
      userResturants: [],
      groupRoom: '',
      room: ''     
    }
    this.checkLogin = this.checkLogin.bind(this)
    this.checkSignup = this.checkSignup.bind(this)
    this.setUsername = this.setUsername.bind(this)
    this.sendSuggestion = this.sendSuggestion.bind(this)
    this.selectGroup = this.selectGroup.bind(this);

  }

 checkLogin(status) {
    this.setState({
      isLoggedIn: status
    });
    console.log('this is from app is this logged in?:', this.state.isLoggedIn)
  }

  checkSignup() {
    this.setState({
      needSignUp: true
    })
    console.log('this is checking to see if they need to sign up', this.state.needSignUp)
  };

  setUsername(name) {
    this.setState({
      username: name
    })
  };
  
    sendSuggestion(rest) {
      this.setState({
        suggestion : rest
      }, function() {
        console.log('suggestionnnnn OBJECT', this.state.suggestion);
        socket.emit('aSuggestion', this.state.suggestion);
      });  
      
      // socket.emit('aSuggestion', this.state.suggestion);
      
    };
    
    selectGroup(e) {
      this.setState({
        room: e.target.value
      })
      
      //room = this.state.selectedGroup;
      
      // axios.post('/api/selectGroup',{
      //   group_name: this.state.selectedGroup})
      //   .then(response => {
      //     console.log(response);
      //   }).catch(err => {
      //         console.log(err)
      //       })
    }

    componentDidMount() {
      socket.on('showSuggestion', data => {
        console.log('dataaaaaaaaSOCKET', data.received);
        console.log('stateeeee', this.state);
        let rest = this.state.userResturants.concat([data.received]);
        this.setState({
          userResturants: rest
          })
    })
   }

    // componentWillMount() {
    //   // socket.on('showSuggestion', function(data) {
    //   //   console.log('INCOME MESSAGE:', data);
    //   // })
    //   // socket.on(this.state.room, data => {
    //   //   console.log('dataaaaaaaaSOCKET', data);
    //   //   console.log('stateeeee', this.state);
    //   //   let rest = this.state.userResturants.concat(data);
    //   //   this.setState({
    //   //     userResturants: rest
    //   //     })
    //   // })
    //   socket.on('showSuggestion', data => {
    //     console.log('dataaaaaaaaSOCKET', data);
    //   })

    //   let rest = this.state.userResturants.concat(data);
    //   this.setState({
    //     userResturants: rest
    //     })
    // }

  getComponentProps(){
    return {
      checkLogin: this.checkLogin,
      checkSignup: this.checkSignup,
      isLoggedIn: this.state.isLoggedIn,
      setUsername: this.setUsername,
      username: this.state.username,
      sendSuggestion: this.sendSuggestion,
      suggestion: this.state.suggestion,
      userResturants: this.state.userResturants,
      selectGroup: this.selectGroup
    }
  };

  render () {
    return (
    <Router>
      <div>
        <Route exact path="/" render = {() => <Login {...this.getComponentProps()}/>}/>
        <Route exact path="/signup" render = {() => <Signup {...this.getComponentProps()}/>}/>
        <Route path="/homepage" render = {() => <Homepage {...this.getComponentProps()}/>}/>
        <Route exact path="/homepage/decisions" render = {() => <Decisions {...this.getComponentProps()}/>}/>
        <Route exact path="/homepage/creategroup" render = {() => <CreateGroup {...this.getComponentProps()}/>}/>
        <Route exact path="/homepage/solo" render = {() => <Solo {...this.getComponentProps()}/>}/>
        <Route exact path="/homepage/friends" render = {() => <YelpList {...this.getComponentProps()}/>}/>
        <Route exact path="/homepage/result" render = {() => <Result {...this.getComponentProps()}/>}/>}

    </div>
    </Router>
    )
  }
}

export default App;


