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
  };

  sendGroup() {
    const create = {
      users : this.state.friendsList
    };

    for (const ref in this.refs) {
      create[ref] = this.refs[ref].value;
    }

    axios.post('/api/newgroup', create)
    .then(response => {
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
      <div className="container" id="create-group">
        <div className="row justify-content-center">
          <form className="form-horizontal">
            <div className="input-group">
              <input ref="group_name" type="text" placeholder="New Group" id="group-name" />
                <label htmlFor="inputName" id="add-friends" className="control-label">Add Friends: </label>
                <input type="text" className="control-label" id="" value={this.state.friend} onChange={this.addFriend}/>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={this.pushFriend}>Add!</button>
                </span> 
            </div>
          </form>
        </div>
        <div className="row justify-content-center" id="group-list">
          <div>
            <ul className="list-group">
              {this.state.friendsList.map( f =>
                <div id="friends">
                  <li className="list-group-item">{f}</li>
                </div>
              )}
            </ul>
              <button id="create-group" onClick={this.sendGroup}>
                Create Group
              </button>   
        </div>
      </div>
    </div>
    </div>
    ) 
  }
}

export default CreateGroup;