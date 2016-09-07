import React, { Component } from 'react';
import HomeContainer from './../../containers/Home';

// observer & inject
class DashBoard extends Component {
  render() {
    return <div>
        <HomeContainer />
    </div>;
  }
}

export default DashBoard;