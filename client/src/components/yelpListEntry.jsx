import React from 'react';


class YelpListEntry extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      color: true,
      suggestion: ''
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(){
    this.setState({color: !this.state.color})
  };

  render() {
    let bgColor = this.state.color ? "white" : "green"
    return (
    <div style={{backgroundColor: bgColor}} onClick={this.changeColor} value={this.state.suggestion}>
     {this.props.suggestion}
    </div>
    ) 
  }
}

export default YelpListEntry;