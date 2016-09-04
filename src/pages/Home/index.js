import React, { Component } from 'react';
import HomeContainer from './../../containers/Home';
import userStore from './../../stores/userStore';

import { fetchUser } from './../../api/user';

// observer & inject
class DashBoard extends Component {
  componentWillMount() {
    userStore.clear();
    let username = this.props.params.username;
    fetchUser(username);
  }

  render() {
    return <div>
        <HomeContainer />
    </div>;
  }
}

export default DashBoard;