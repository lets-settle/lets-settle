import React from 'react';


class Result extends React.Component {
  constructor(props) {
    super(props);

    }

  render() {
    return (
    <div>
      RESULLTTTTTTTTTT
      {this.props.userResturants.map((resturant) => (<div>{resturant.name}</div>))}
      {this.props.final}
    </div>
    ) 
  }
}
export default Result;