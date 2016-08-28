import React, { Component } from 'react';
import axios from 'axios';
import {fetchUser} from './../../api/user';
import DashBoardContainer from './../../containers/DashBoard';
// observer & inject
class DashBoard extends Component {
  componentWillMount() {
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