import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Creategroup from './components/Creategroup.jsx';
import Login from './components/Login.jsx';
import Result from './components/Result.jsx';
import Signup from './components/Signup.jsx';
import YelpList from './components/YelpList.jsx';
import Homepage from './components/Homepage.jsx';
import YelpListEntry from './components/YelpListEntry.jsx';
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
        test
      <Homepage />
      <Creategroup />
      <Login />
      <Signup />
      <YelpList />
      <YelpListEntry />
      <Result />
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));