import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
import axios from 'axios';
import bodyParser from 'body-parser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      groups: []
    }
  }

  render () {
    return (
    <div>
    {/* <img id='title' src = {require('../dist/images/logo.png')}/> */}
        This goes to homepage or login
      {<Login />}
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));