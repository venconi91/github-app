import { observable, computed, action } from 'mobx';

class FollowingsStore {

  @observable followings;

  constructor(followings = []) {
    this.followings = followings;
  }

  @computed get isStoreEmpty() {
    return this.followings.length > 0;
  }

  @action setFollowings = (followings) => {
    this.followings = followings;
  }

  @action clear = () => {
    this.followings = [];
  }
}

const followingsStore = new FollowingsStore();

export default followingsStore;
