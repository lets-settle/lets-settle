import React from 'react';
import Result from './Result.jsx';
import YelpListEntry from './YelpListEntry.jsx';
import CreateGroup from './CreateGroup.jsx';

class YelpList extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      showGroups: false
    };

    this.groupClick = this.groupClick.bind(this);
    }

    groupClick (e) {
      this.setState({
        showGroups:true
      })
    }

  render() {

    return (
    <div>
      <div classNameName="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Groups
        </button>
        <div  onClick={this.groupClick} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item">Action</a>
          {/* <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a> */}
        </div>
      </div>


      <form className="form-inline">
        <label className="sr-only" htmlFor="inlineFormInput">Type</label>
        <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="type" />

        <label className="sr-only" htmlFor="inlineFormInputGroup">Location</label>
        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
          <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="location" />
        </div>

        <div className="btn-group" htmlFor="inlineFormInputGroup">
          <button type="button" className="btn btn-danger">cost</button>
          <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">$$$</a>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" >Search</button>
      </form>
      <YelpListEntry />
      <Result />
      <CreateGroup/>
    </div>
    ) 
  }
}

export default YelpList;