import React, { Component } from 'react';
import { observer } from 'mobx-react';

import followingsStore from './../../stores/followingsStore';

// components
import Follows from './../../components/Follows';

@observer class Followings extends Component {
  render() {
    return <div>
        <Follows users={followingsStore.followings} />
    </div>;
  }
}

export default Followings;