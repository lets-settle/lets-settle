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
            <ButtonToolbar>
                <Link to = "/homepage/solo"><Button bsStyle="danger" bsSize="large" >Solo</Button></Link>
                <Link to = "/homepage/friends"><Button bsStyle="danger" bsSize="large" >Friends</Button></Link>
            </ButtonToolbar>
        </div>
    ) 
  }
}

export default Decisions;