import React, { Component } from 'react';
import { observer } from 'mobx-react';

import reposStore from './../../stores/reposStore';

// components
import Repo from './../../components/Repo';

@observer
class Repos extends Component {
  render() {
    return <div>
        {reposStore.repos.map((repo) => {
            return <Repo key={repo.id} data={repo}/>
        })}
    </div>;
  }
}

export default Repos;