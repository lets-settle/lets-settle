import React from 'react';

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);

    this.addFriend = this.addFriend.bind(this);


    this.state = {
      friend: null,
      friends : ['test']
    }
  };

  addFriend (e) {
    console.log(e.target)
    this.setState({
      friend: e.target.value,
      friends:[...this.state.friends, e.target.value]
    });
    console.log('adddddddd', this.state.friends)
  };

    
  render() {
    return (
    <div>
      GROUP PAGE
      <form className="form-horizontal">
        <div className="input-group">
          <input ref="newgroup" type="text" placeholder="New Group"/>
            <label htmlFor="inputName" className="col-sm-2 control-label">Add Friends: </label>
            <input ref="friends" type="text" className="col-sm-2 control-label" value={this.state.friend}/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={this.addFriend} >Add!</button>
            </span>   
        </div>
      </form>
      <div>
        {this.state.friends.map( f => 
          <div>{f}</div>
        )}
      </div>  
    </div>
    ) 
  }
}

export default CreateGroup;