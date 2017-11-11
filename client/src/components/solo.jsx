import React from 'react';
import Result from './Result.jsx';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Solo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resturant: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const searchData = {};
    for (const ref in this.refs) {
      if (ref === 'price') {
        searchData[ref] = this.refs[ref].value.length;
      } else {
        searchData[ref] = this.refs[ref].value;
      }
    }
    console.log('SOLOOOOO DATA', searchData);
    e.target.reset();

    axios.post('/api/solo',searchData)
    .then(response => {
       console.log(response.data);
       this.setState({
         resturant : response.data
       });  
      }).catch(err => {
        console.log(err)
      })  
    
  };  
  
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <div className="form-inline">
        <input type="text" className="form-control" id="inlineFormInput" placeholder="type" ref="term"/>
        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="location" ref="location"/>
        <select ref="price" id="inlineFormCustomSelect">
          <option>Price</option>
          <option>$</option>
          <option>$$</option>
          <option>$$$</option>
          <option>$$$$</option>
        </select>
        <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>
      <img src ={this.state.resturant.image_url} className="rounded img-fluid img-thumbnail"/> 
      <h3><a href={this.state.resturant.url} target="_blank">{this.state.resturant.name}</a></h3> 
    </div>
    ) 
  }
}

export default Solo;