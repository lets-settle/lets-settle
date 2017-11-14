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
    e.target.reset();

    axios.post('/api/solo',searchData)
    .then(response => {
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
        <div className="container">
          <div className="row justify-content-center">
            <form id="search-bar" onSubmit={this.handleSubmit}>
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
              <button type="submit" className="btn btn-danger">Search</button>
              </div>
            </form>
            <img src ={this.state.resturant.image_url} id="img"/> 
          </div>
          <div className="row justify-content-center" id="restaurant">
            <h3><a href={this.state.resturant.url} target="_blank" id="restaurant-name">{this.state.resturant.name}</a></h3> 
          </div>
        </div>
      </div>
    ) 
  }
}

export default Solo;