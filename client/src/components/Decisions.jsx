import React from 'react';
const $ = require('jquery');
import {Button, ButtonToolbar} from 'react-bootstrap';
import {Route, Link} from 'react-router-dom';

class Decisions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div>
        <div className="container" id="decision-button">
          <div className="row justify-content-center">
            <ButtonToolbar>
                <Link to = "/homepage/solo"><Button bsStyle="danger" bsSize="large" id="solo">Solo</Button></Link>
                <Link to = "/homepage/friends"><Button bsStyle="danger" bsSize="large" id="squad">Squad</Button></Link>
            </ButtonToolbar>
          </div>
        </div>
      </div>
    ) 
  }
}

export default Decisions;