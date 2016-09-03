import { observable, computed, action } from 'mobx';

class FollowingsStore {

  @observable followings;

  constructor(followings = []) {
    this.followings = followings;
  }

  @action setFollowings = (followings) => {
    console.log('set followings')
    this.followings = followings;
  }
}

const followingsStore = new FollowingsStore();

export default followingsStore;
