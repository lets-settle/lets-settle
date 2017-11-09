import React from 'react';

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);

    this.addFriend = this.addFriend.bind(this);
    this.pushFriend = this.pushFriend.bind(this);

    this.state = {
      friend: null,
      friendsList : ['test']
    }
  };

  addFriend (e) {
    this.setState({
      friend: e.target.value,
    });
  };

  pushFriend (e) {
    this.setState({
      friendList: this.state.friendsList.push(this.state.friend),
      friend: ''
    })
    console.log('submit friend', this.state.friendsList);
  }
    
  render() {
    return (
    <div>
      GROUP PAGE
      <form className="form-horizontal">
        <div className="input-group">
          <input ref="newgroup" type="text" placeholder="New Group"/>

            <label htmlFor="inputName" className="col-sm-2 control-label">Add Friends: </label>
            <input ref="friendsList" type="text" className="col-sm-2 control-label" value={this.state.friend} onChange={this.addFriend}/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={this.pushFriend}>Add!</button>
            </span> 
 
        </div>
      </form>
      <form>
        <div>
          {this.state.friendsList.map( f => 
            <div>{f}</div>
          )}
        </div>
        <button>Create Group</button>
      </form>    
    </div>
    ) 
  }
}

export default CreateGroup;