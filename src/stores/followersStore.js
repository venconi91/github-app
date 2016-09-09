import { observable, computed, action } from 'mobx';

class FollowersStore {

  @observable followers;

  constructor(followers = []) {
    this.followers = followers;
  }

  @computed get isStoreEmpty() {
    return this.followers.length > 0;
  }

  @action setFollowers = (followers) => {
    this.followers = followers;
  }

  @action clear = () => {
    this.followers = [];
  }
}

const followersStore = new FollowersStore();

export default followersStore;
