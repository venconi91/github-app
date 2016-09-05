import { observable, action } from 'mobx';

class ReposStore{

    @observable repos;

    constructor(repos = []) {
        this.repos = repos;
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