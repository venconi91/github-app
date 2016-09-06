import React, { Component } from 'react';
import { observer } from 'mobx-react';

import followersStore from './../../stores/followersStore';

// components
import Follows from './../../components/Follows';

@observer class Followers extends Component {

  render() {
    return <div>
        <Follows users={followersStore.followers} />
    </div>;
  }
}

export default Followers;