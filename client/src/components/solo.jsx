import React from 'react';
import Result from './Result.jsx';


class Solo extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
    <div>
      hello my fellow engineers this is the solo page
      <Result />
    </div>
    ) 
  }
}

export default Solo;