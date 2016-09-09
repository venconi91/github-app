import { observable, computed, action } from 'mobx';

class ReposStore{

    @observable repos;

    constructor(repos = []) {
        this.repos = repos;
    }

    @computed get isStoreEmpty() {
        return this.repos.length > 0;
    }

    @action setRepos = (repos = []) => {
        this.repos = repos;
    }

    @action clear = () => {
        this.repos = [];
    }
}

let reposStore = new ReposStore();

export default reposStore;