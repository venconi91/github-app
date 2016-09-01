import { observable, computed, action } from 'mobx';

class FollowersStore {

  @observable followers;

  constructor(followers = []) {
    this.followers = followers;
  }

  @action setFollowers = (followers) => {
    this.followers = followers;
  }
}

const followersStore = new FollowersStore();

export default followersStore;
