import React from 'react';


class Result extends React.Component {
  constructor(props) {
    super(props);

    }

  render() {
    return (
    <div>
      RESULLTTTTTTTTTT
      {this.props.userResturants.map((resturant) => 
        (<div>
          <h3><a href={resturant.url} target="_blank">{resturant.name}</a></h3>  
        </div>)
      )}
      <div>
          FINAL CHOICE: 
          <img src ={this.props.final.image_url}/> 
          <h3><a href={this.props.final.url} target="_blank">{this.props.final.name}</a></h3>
      </div>
    </div>
    ) 
  }
}
export default Result;