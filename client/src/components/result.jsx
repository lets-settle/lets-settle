import React from 'react';


class Result extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
    <div>
      RESULTTTTTTTTT
      {this.props.suggestion}
    </div>
    ) 
  }
}

export default Result;