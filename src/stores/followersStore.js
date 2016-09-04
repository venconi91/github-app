import { observable, action } from 'mobx';

class FollowersStore {

  @observable followers;

  constructor(followers = []) {
    this.followers = followers;
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
