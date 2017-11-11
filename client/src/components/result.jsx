import React from 'react';


class Result extends React.Component {
  constructor(props) {
    super(props);

    }

  render() {
    console.log('RESULTSSSSS', this.props.userResturants);
    return (
    <div>
      {this.props.userResturants.map((resturant) => (<div>{resturant.received}</div>))}
    </div>
    ) 
  }
}
export default Result;