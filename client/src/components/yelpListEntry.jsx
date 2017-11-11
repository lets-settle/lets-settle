import React from 'react';
<<<<<<< HEAD
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
=======
import Result from './Result.jsx';
>>>>>>> Rebase


class YelpListEntry extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      color: true,
      suggestion: ''
    };

    this.changeColor = this.changeColor.bind(this);
    this.sendSuggestion = this.sendSuggestion.bind(this);
  }

  changeColor() {
    this.setState({
      color: !this.state.color
    })
  };


  sendSuggestion() {
    this.setState({
      suggestion: this.props.suggestion.name
    }, function() {
      console.log('send suggestionnnnn', this.state.suggestion);
    });
  }

  render() {

    return (
    <div>
     <img src ={this.props.suggestion.image_url} className="rounded img-fluid img-thumbnail"/> 
     <h3><a href={this.props.suggestion.url} target="_blank">{this.props.suggestion.name}</a></h3> 
     <button onClick={this.sendSuggestion}>Suggest!</button>
     <Result suggestion={this.state.suggestion}/>
    </div>
    ) 
  }
}

export default YelpListEntry;

//     let bgColor = this.state.color ? "white" : "green"
// style={{backgroundColor: bgColor}} value={this.state.suggestion}  onClick={this.changeColor}
     /* {this.props.suggestion} */