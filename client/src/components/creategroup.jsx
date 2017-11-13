import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);

    this.addFriend = this.addFriend.bind(this);
    this.pushFriend = this.pushFriend.bind(this);
    this.sendGroup = this.sendGroup.bind(this);

    this.state = {
      friend: '',
      friendsList : [],
      created: false
    }
  };

  componentWillMount() {
    this.setState({
      friendList: this.state.friendsList.unshift(this.props.username)
    });
  };

  addFriend (e) {
    this.setState({
      friend: e.target.value,
    });
  };

  pushFriend () {
    this.setState({
      friendList: this.state.friendsList.push(this.state.friend),
      friend: ''
    })
    console.log('submit friend', this.state.friendsList);
  };

  sendGroup() {

    const create = {
      users : this.state.friendsList
    };
    for (const ref in this.refs) {
      create[ref] = this.refs[ref].value;
    }
    console.log('CREATEDDDDD', create);

    axios.post('/api/newgroup', create)
    .then(response => {
     //get back the list of groups?
      console.log('DB CREATEEEEEEEDDDD');
    }).catch(err => {
      console.log(err)
    })

    this.setState({
      friendList: []
    })

    alert('GROUP CREATED')
  };

    
  render() {
    return (
    <div>
      GROUP PAGE
      <form className="form-horizontal">
        <div className="input-group">
          <input ref="group_name" type="text" placeholder="New Group"/>
            <label htmlFor="inputName" className="col-sm-2 control-label">Add Friends: </label>
            <input type="text" className="col-sm-2 control-label" value={this.state.friend} onChange={this.addFriend}/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={this.pushFriend}>Add!</button>
            </span> 
        </div>
      </form>
      <div>
        <ul className="list-group">
          {this.state.friendsList.map( f => 
            <li className="list-group-item">{f}</li>
          )}
        </ul>
          <button onClick={this.sendGroup}>
            Create Group
          </button>
      </div>   
    </div>
    ) 
  }
}

export default CreateGroup;