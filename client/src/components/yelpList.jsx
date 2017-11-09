import React from 'react';
import Result from './Result.jsx';
import YelpListEntry from './YelpListEntry.jsx';
import CreateGroup from './CreateGroup.jsx';

class YelpList extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      groups: ['coolGrp', 'lameGrp', 'partyGrp'],
      selectGroup : null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.getSearch = this.getSearch.bind(this);
    }

    handleChange(e) {
      this.setState({selectGroup:e.target.value});
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
      <form>
        <div class="form-group">
          <select
          value={this.state.selectGroup} 
          onChange={this.handleChange}>
            {this.state.groups.map(group => 
              <option key={group} value={group}>{group}</option>)}
          </select>
        </div> 

        <label className="sr-only" htmlFor="inlineFormInput">Type</label>
        <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="type" />

        <label className="sr-only" htmlFor="inlineFormInputGroup">Location</label>
        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
          <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="location" />
        </div>

        <div className="btn-group" htmlFor="inlineFormInputGroup">
          <div class="form-group">
          <select>
              <option>$</option>
              <option>$$</option>
              <option>$$$</option>
              <option>$$$$</option>
          </select>
        </div> 
      </div>

        <button type="submit" className="btn btn-primary" onClick={this.getSearch}>Search</button>
      </form>


    
    </div>
    ) 
  }
}

export default YelpList;