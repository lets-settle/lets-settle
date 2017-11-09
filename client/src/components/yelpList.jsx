import React from 'react';
import Result from './Result.jsx';
import YelpListEntry from './YelpListEntry.jsx';
import CreateGroup from './CreateGroup.jsx';

class YelpList extends React.Component {
  constructor(props) {
    super(props);
  
    
    this.state = {
      groups : ['coolGrp', 'lameGrp', 'partyGrp']
    };

    // this.handleChange = this.handleChange.bind(this);
    this.getSearch = this.getSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();

      const searchData = {};
      for (const ref in this.refs) {
        searchData[ref] = this.refs[ref].value;
      }
      console.log('////', searchData)
    }

    getSearch() {
      // axios.post('/search', {
      //   type: form.state.type,
      //   location: form.state.location,
      //   cost: form.state.cost
      // }).then(response => {
      //   console.log(response);
      // }).catch(err => {
      //   console.log(err)
      // })
    }

  render() {

    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <select
          ref="group">
            {this.state.groups.map(group => 
              <option key={group} value={group}>{group}</option>)}
          </select>
        </div> 

        <label className="sr-only" htmlFor="inlineFormInput">Type</label>
        <input type="text" className="col-sm-2" id="inlineFormInput" placeholder="type" ref="type"/>

        <label className="sr-only" htmlFor="inlineFormInputGroup">Location</label>
        <div className="col-sm-2">
          <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="location" ref="location"/>
        </div>

        <div className="btn-group" htmlFor="inlineFormInputGroup">
          <div class="form-group">
          <select ref="cost">
              <option>$</option>
              <option>$$</option>
              <option>$$$</option>
              <option>$$$$</option>
          </select>
        </div> 
      </div>

        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
    ) 
  }
}

export default YelpList;