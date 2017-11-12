import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Result from './Result.jsx';

class YelpListEntry extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      change: false,
      suggestion: ''
    };

    // this.sendSuggestion = this.sendSuggestion.bind(this);
  }

  // sendSuggestion() {
  //   this.setState({
  //     suggestion: this.props.suggestion.name,
  //     change: true
  //   }, function() {
  //     console.log('send suggestionnnnn', this.state.suggestion);
  //   });

    // socket.emit('', this.state.suggestion)
  // }

  render() {

    return (
    <div>
     <img src ={this.props.resturant.image_url} className="rounded img-fluid img-thumbnail"/> 
     <h3><a href={this.props.resturant.url} target="_blank">{this.props.resturant.name}</a></h3> 
     <button onClick={() => {this.props.sendSuggestion(this.props.resturant.name)}}>Suggest!</button>
     {/* {this.state.change ? <Result suggestion={this.state.suggestion}/> : null} */}
     <Route exact path="/homepage/friends/results" render = {() => <Results {...this.getComponentProps()}/>}/>
    </div>
    ) 
  }
}

export default YelpListEntry;

//     let bgColor = this.state.color ? "white" : "green"
// style={{backgroundColor: bgColor}} value={this.state.suggestion}  onClick={this.changeColor}
     /* {this.props.suggestion} */