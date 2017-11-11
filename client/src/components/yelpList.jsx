import React from 'react';
import Result from './Result.jsx';
import YelpListEntry from './YelpListEntry.jsx';
import CreateGroup from './CreateGroup.jsx';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class YelpList extends React.Component {
  constructor(props) {
    super(props);
  
    this.groups = ['coolGrp', 'lameGrp', 'partyGrp'];
    
    this.state = {
      resturants : []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSearch = this.getSearch.bind(this);
    };

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
      // axios.post('/api/solo',searchData)
      // .then(response => {
      //    console.log(response.data);
      //    this.setState({
      //      resturant : response.data
      //    });  
      //   }).catch(err => {
      //     console.log(err)
      //   })  
    };
      
    getSearch() {
      this.setState({
        resturants : ['test1', 'test2']
      });  
    };

  render() {

    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <select ref="group" id="inlineFormCustomSelect">
          <option>Group</option>
          {this.groups.map((group, i) => <option key={i} value={group}>{group}</option>)}
        </select>

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
        <button type="submit" className="btn btn-primary" onClick={this.getSearch}>Search</button>
        </div>
      </form>

      {this.state.resturants.map( suggestion => 
        (<YelpListEntry suggestion={suggestion}/>)
      )}

    </div>
    ) 
  }
}

export default YelpList;