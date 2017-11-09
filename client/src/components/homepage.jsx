import React from 'react';
import YelpList from './YelpList.jsx';
import Solo from './Solo.jsx';
import CreateGroup from './CreateGroup.jsx';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        showSolo: false,
        showFriends: false,
        isHidden: false
    };

    this.onFriendsClick = this.onFriendsClick.bind(this)
    this.onSoloClick = this.onSoloClick.bind(this)
    }

    onFriendsClick (e) {
        console.log('friends was clicked')
        this.setState({
            showSolo: false,
            showFriends: true

        });
      }
    onSoloClick (e) {
        console.log('solo was clicked')
        this.setState({
            showSolo: true,
            showFriends: false
        });
    }

    toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }

  render() {
    return (
    <div>
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