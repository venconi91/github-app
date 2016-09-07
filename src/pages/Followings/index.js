import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// components
import Follows from './../../components/Follows';

@inject('followingsStore')
@observer
class Followings extends Component {
  render() {
    let { followingsStore } = this.props;
    return <div>
        <Follows users={followingsStore.followings} />
    </div>;
  }
}

export default Followings;