import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        showSolo: false,
        showFriends: false
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

  render() {
    return (
    <div>
        <button onClick={this.onSoloClick}>
        Solo
        </button>
        <button onClick={this.onFriendsClick}>
        Friends
        </button>
    </div>
    ) 
  }
}

export default Homepage;