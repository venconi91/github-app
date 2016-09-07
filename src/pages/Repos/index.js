import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// components
import Repo from './../../components/Repo';

@inject('reposStore')
@observer
class Repos extends Component {
  render() {
    let { reposStore } = this.props;
    return <div>
        {reposStore.repos.map((repo) => {
            return <Repo key={repo.id} data={repo}/>
        })}
    </div>;
  }
}

export default Repos;