import React, { Component } from 'react';
import DashBoardContainer from './../../containers/DashBoard';
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
        <DashBoardContainer />
    </div>;
  }
}

export default DashBoard;