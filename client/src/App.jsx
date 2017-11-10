import React from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');
import Login from './components/Login.jsx';
import axios from 'axios';
import bodyParser from 'body-parser';
// import {BrowserRouter as Router, Link} from 'react-router-dom'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false
    }
  }


  render () {
    return (
    
    <div>
    {/* <img id='title' src = {logo}/> */}
  
      <Login isLoggedIn = {this.state.isLoggedIn}/>
    </div>

    )
  }
}




ReactDOM.render(<App />, document.getElementById('app'));