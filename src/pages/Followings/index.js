import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { fetchFollowings } from './../../api/user';
import followingsStore from './../../stores/followingsStore';

import Follows from './../../components/Follows';

@observer class Followings extends React.Component {
  componentWillMount() {
    let username = this.props.params.username;
    fetchFollowings(username);
  }
  render() {
    console.log(followingsStore)
    // debugger;
    return <div>
        <Follows users={followingsStore.followings} />
    </div>;
  }
}

export default Followings;