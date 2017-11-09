import React from 'react';

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
    <div>
      GROUP PAGE
      <form>
        <input ref="newgroup" type="text" placeholder="New Group"/>
      </form>
    </div>
    ) 
  }
}

export default CreateGroup;