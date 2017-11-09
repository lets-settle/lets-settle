import React from 'react';


class YelpListEntry extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
    <div>
     {this.props.suggestion}
    </div>
    ) 
  }
}

export default YelpListEntry;