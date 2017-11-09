import React from 'react';
import Result from './Result.jsx';
import YelpListEntry from './YelpListEntry.jsx';
import CreateGroup from './CreateGroup.jsx';

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
        searchData[ref] = this.refs[ref].value;
      }
      e.target.reset();

      console.log('////', searchData)
    };

    getSearch() {
      this.setState({
        resturants : ['test1', 'test2']
      });  
      // axios.post('/search', {
      //   searchData
      // }).then(response => {
      //  this.resturants = response.data;
      //   console.log(response);
      // }).catch(err => {
      //   console.log(err)
      // })


    };

  render() {

    return (
    <div>
      <form onSubmit={this.handleSubmit} class="form-inline">
        <select ref="group" id="inlineFormCustomSelect">
          <option>Group</option>
          {this.groups.map(group => <option key={group} value={group}>{group}</option>)}
        </select>

        <input type="text" className="form-control" id="inlineFormInput" placeholder="type" ref="type"/>

        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="location" ref="location"/>

        <select ref="cost" id="inlineFormCustomSelect">
          <option>Cost</option>
          <option>$</option>
          <option>$$</option>
          <option>$$$</option>
          <option>$$$$</option>
        </select>

        <button type="submit" className="btn btn-primary" onClick={this.getSearch}>Search</button>
      </form>

      {this.state.resturants.map( suggestion => 
        (<YelpListEntry suggestion={suggestion}/>)
      )}

    </div>
    ) 
  }
}

export default YelpList;