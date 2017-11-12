// import React from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import Result from './Result.jsx';

// class YelpListEntry extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       change: false,
//       suggestion: ''
//     };
//   }

//   render() {

//     return (
//     <div>
//      <img src ={this.props.resturant.image_url} className="rounded img-fluid img-thumbnail"/> 
//      <h3><a href={this.props.resturant.url} target="_blank">{this.props.resturant.name}</a></h3> 
//      <button onClick={() => {this.props.sendSuggestion(this.props.resturant.name)}}>Suggest!</button>
//      {/* {this.state.change ? <Result suggestion={this.state.suggestion}/> : null} */}
//       <Route exact path="/homepage/friends/results" render = {() => <Result {...this.getComponentProps()}/>}/>
//     </div>
//     ) 
//   }
// }

// export default YelpListEntry;
