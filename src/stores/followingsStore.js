import { observable, action } from 'mobx';

class FollowingsStore {

  @observable followings;

  constructor(followings = []) {
    this.followings = followings;
  }

  @action setFollowings = (followings) => {
    this.followings = followings;
  }
}

const followingsStore = new FollowingsStore();

export default followingsStore;
