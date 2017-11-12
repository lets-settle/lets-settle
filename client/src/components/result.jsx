import React from 'react';


class Result extends React.Component {
  constructor(props) {
    super(props);

    }

  render() {
    return (
    <div>
      RESULLTTTTTTTTTT
      {this.props.suggestion}
      {/* {this.props.userResturants.map((resturant) => (<div>{resturant.received}</div>))} */}
    </div>
    ) 
  }
}
export default Result;