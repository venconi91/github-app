import React, { Component } from 'react';
import { observer } from 'mobx-react';

import followingsStore from './../../stores/followingsStore';
import Follows from './../../components/Follows';

import { fetchFollowings } from './../../api/user';

@observer class Followings extends React.Component {
  componentWillMount() {
    let username = this.props.params.username;
    fetchFollowings(username);
  }

  componentWillUnmount() {
    followingsStore.clear();
  }

  render() {
    return <div>
        <Follows users={followingsStore.followings} />
    </div>;
  }
}

export default Followings;