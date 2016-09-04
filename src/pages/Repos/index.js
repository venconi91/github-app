import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Repo from './../../components/Repo';
import reposStore from './../../stores/reposStore';

import { fetchRepos } from './../../api/user';

@observer
class Repos extends Component {
  componentWillMount() {
    let username = this.props.params.username;
    fetchRepos(username);
  }
  render() {
    return <div>
        {reposStore.repos.map((repo) => {
            return <Repo key={repo.id} data={repo}/>
        })}
    </div>;
  }
}

export default Repos;