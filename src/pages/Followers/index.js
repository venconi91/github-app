import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// components
import Follows from './../../components/Follows';

@inject('followersStore')
@observer
class Followers extends Component {
  render() {
    let { followersStore } = this.props;
    return <div>
        <Follows users={followersStore.followers} />
    </div>;
  }
}

export default Followers;