import React from 'react';

class YelpList extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
    <div>
      <div classNameName="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>


      <form className="form-inline">
        <label className="sr-only" for="inlineFormInput">Type</label>
        <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="type" />

        <label className="sr-only" for="inlineFormInputGroup">Location</label>
        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
          <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="location" />
        </div>

        

        <button type="submit" class="btn btn-primary">Search</button>
      </form>

    </div>
    ) 
  }
}

export default YelpList;