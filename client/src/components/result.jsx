import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div>
            {this.props.userResturants.map((resturant) => 
              (<div id="suggestions">
                <h3><a href={resturant.url} target="_blank">{resturant.name}</a></h3>  
              </div>)
            )}
            <div>
          </div>
            <h3 id="final-choice">
              FINAL CHOICE:
            </h3>
              <img id="img" src ={this.props.final.image_url}/> 
              <h3 id="final-choice">
                <a id="restaurant-name" href={this.props.final.url} target="_blank">{this.props.final.name}</a>
              </h3>
          </div>
        </div>
      </div>
    </div>
    ) 
  }
}
export default Result;