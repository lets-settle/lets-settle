import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class YelpListEntry extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      color: true,
      suggestion: ''
    };

    this.changeColor = this.changeColor.bind(this);
    this.suggestionSelected = this.suggestionSelected.bind(this);
  }

  changeColor() {
    this.setState({
      color: !this.state.color
    })
  };

  suggestionSelected(e) {
    this.setState({
      suggestion: e.target.value
    })
    console.log('SUGGESTIONNN', this.state.suggestion);
  }

  render() {
    let bgColor = this.state.color ? "white" : "green"
    return (
    <div style={{backgroundColor: bgColor}} value={this.state.suggestion}  onClick={this.changeColor}>
     {this.props.suggestion}
    </div>
    ) 
  }
}

export default YelpListEntry;