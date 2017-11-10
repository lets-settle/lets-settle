import React from 'react';
import YelpList from './YelpList.jsx';
import Solo from './Solo.jsx';
import CreateGroup from './CreateGroup.jsx';
const $ = require('jquery');
import {Button, ButtonToolbar,Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        showSolo: false,
        showFriends: false,
        isHidden: false,
        createGroup: false
    };

    this.onFriendsClick = this.onFriendsClick.bind(this)
    this.onSoloClick = this.onSoloClick.bind(this)
    this.onCreateGroupClick = this.onCreateGroupClick.bind(this)
    }

    onFriendsClick (e) {
      e.preventDefault();
        console.log('friends was clicked')
        this.setState({
            showSolo: false,
            showFriends: true
            
        });
      }
    onSoloClick (e) {
      e.preventDefault();
        console.log('solo was clicked')
        this.setState({
            showSolo: true,
            showFriends: false
        });
    }

    onCreateGroupClick() {
  
        console.log('create was clicked')
        this.setState({
            createGroup: true
    
        });
    }

    toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }

    get() {
        this.setState({
          resturants : ['test1', 'test2']
        });  
    }

  render() {
    return (
    <div>
      <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Yelp Settle</a>
            </Navbar.Brand>
        </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={3} title={this.props.username}  id="basic-nav-dropdown">
              <MenuItem onSelect={this.onCreateGroupClick} eventKey={3.1}>Create Group</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.2}>Log Out</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        
        {(!this.state.showSolo &&!this.state.showFriends) && <ButtonToolbar>
          <Button bsStyle="danger" bsSize="large" onClick = {this.onSoloClick}>Solo</Button>
          <Button bsStyle="danger" bsSize="large" onClick = {this.onFriendsClick}>Friends</Button>
        </ButtonToolbar>}
        
        {this.state.showSolo && <Solo username={this.props.username}/>}
        {this.state.showFriends && <YelpList username={this.props.username}/>}
        {this.state.createGroup && <CreateGroup username={this.props.username}/>}
    </div>
    ) 
  }
}

export default Homepage;