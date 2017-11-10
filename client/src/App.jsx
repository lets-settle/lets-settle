import React from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import Login from './components/Login.jsx';
import axios from 'axios';
import bodyParser from 'body-parser';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false
    }
  }

  loggedIn() {
    this.setState({
      isLoggedIn: true
    });  
}


  render () {
    return (
    <div>
    {/* <img id='title' src = {logo}/> */}
      {<Login isLoggedIn = {this.loggedIn}/>}
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));