import React from 'react';
import YelpList from './YelpList.jsx';
import Solo from './Solo.jsx';
import CreateGroup from './CreateGroup.jsx';
const $ = require('jquery');
import {Button,Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';

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
    }

    onFriendsClick (e) {
        console.log('friends was clicked')
        this.setState({
            showSolo: false,
            showFriends: true,
            
        });
      }
    onSoloClick (e) {
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
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem onSelect={this.onCreateGroupClick} eventKey={3.1}>Create Group</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.2}>Log Out</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
        <div>
        <button className ='soloButton' onClick={this.onSoloClick}>
        Solo
        </button>
        <button className ='friendsButton' onClick={this.onFriendsClick}>
        Friends
        </button>
        </div>
        {this.state.showSolo && <Solo />}
        {this.state.showFriends && <YelpList />}

        <CreateGroup/>
    </div>
    ) 
  }
}

export default Homepage;