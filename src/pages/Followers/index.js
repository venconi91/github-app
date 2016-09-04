import React, { Component } from 'react';
import { observer } from 'mobx-react';

import followersStore from './../../stores/followersStore';
import Follows from './../../components/Follows';

import { fetchFollowers } from './../../api/user';

@observer class Followers extends React.Component {
  componentWillMount() {
    let username = this.props.params.username;
    fetchFollowers(username);
  }
  render() {
    return <div>
        <Follows users={followersStore.followers} />
    </div>;
  }
}

export default Followers;