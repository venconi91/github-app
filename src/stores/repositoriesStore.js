import { observable, action } from 'mobx';

class RepositoriesStore {

  @observable repositories;

  constructor(repositories = []) {
    this.repositories = repositories;
  }

  @action setRepositories = (repositories) => {
    this.repositories = repositories;
  }
}

const repositoryStore = new RepositoriesStore();

export default repositoryStore;
