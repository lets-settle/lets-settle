import React from 'react';
import Result from './Result.jsx';
import YelpListEntry from './YelpListEntry.jsx';
import CreateGroup from './CreateGroup.jsx';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
const axios = require('axios');
<<<<<<< HEAD
import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://127.0.0.1:1128");
<<<<<<< HEAD
import {withRouter} from "react-router-dom";
=======
=======
let homepage = require('./homepage');
>>>>>>> Add yelplist groupSelect logic and rebase
>>>>>>> Add yelplist groupSelect logic and rebase

class YelpList extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      resturants : [],
      groups: [],
<<<<<<< HEAD
      suggestion: '',
      showResult: false,
      userResturants: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendSuggestion = this.sendSuggestion.bind(this)

=======
      selectedGroup: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectGroup = this.selectGroup.bind(this);
>>>>>>> Add yelplist groupSelect logic and rebase
    };
    componentDidMount() {
      socket.on('showSuggestion', data => {
        console.log('dataaaaaaaaSOCKET', data);
        console.log('stateeeee', this.state);
        let rest = this.state.userResturants.concat([data]);
        this.setState({
          userResturants: rest
          })
        this.props.history.push("homepage/yelplist/result");
   })
   }

    componentWillMount() {
      console.log('mounttttt', this.props.username)
      let username = this.props.username;
      axios.post('/api/group', {username: username})
      .then(response => {
        const groupList = [];
        for (const res in response.data) {
          groupList.push(response.data[res].group_name)
        }
        this.setState({
          groups : groupList
        })
      })

      console.log('grabbbbbb', this.state.groups)
    };

    handleSubmit(e) {
      e.preventDefault();
      const searchData = {};
      for (const ref in this.refs) {
        if (ref === 'price') {
          searchData[ref] = this.refs[ref].value.length;
        } else {
          searchData[ref] = this.refs[ref].value;
        }
      }
      e.target.reset();
      console.log('SEARCHED DATAAAAAAA', searchData);
      axios.post('/api/selection',searchData)
      .then(response => {
         console.log(response.data);
         this.setState({
           resturants : response.data
         });  
        }).catch(err => {
          console.log(err)
        })  
    };
  sendSuggestion(restname) {
    this.setState({
      suggestion: restname,
      showResult: true

<<<<<<< HEAD
    }, function() {
      console.log('send suggestionnnnn', this.state.suggestion);
      socket.emit('aSuggestion', this.state.suggestion);
    });
  }
=======
    selectGroup(e) {
      this.setState({
        selectedGroup: e.target.value
      }, function(){
        console.log('GROUPPPPPPP', this.state.selectedGroup)
      })
      // axios.post('/api/selection',searchData)
      // .then(response => {
      //    console.log(response);
      //   }).catch(err => {
      //     console.log(err)
      //   })  

    };

>>>>>>> Add yelplist groupSelect logic and rebase
render() {
      return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select ref="group" id="inlineFormCustomSelect" onChange={this.selectGroup}>
            <option value="">Group</option>
            {this.state.groups.map((group, i) => <option key={i} value={group}>{group}</option>)}
          </select>
  
          <div className="form-inline">
          <input type="text" className="form-control" id="inlineFormInput" placeholder="type" ref="term"/>
          <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="location" ref="location"/>
          <select ref="price" id="inlineFormCustomSelect">
            <option>Price</option>
            <option>$</option>
            <option>$$</option>
            <option>$$$</option>
            <option>$$$$</option>
          </select>
          <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </form>
  
        {this.state.resturants.map( resturant => 
          (<YelpListEntry resturant={resturant} sendSuggestion={this.props.sendSuggestion}/>)
        )}
        <Route exact path="/homepage/friends/result" render = {() => <Results userResturants = {this.state.userResturants}/>}/>
      </div>
      ) 
    }
  }
  
  export default YelpList;