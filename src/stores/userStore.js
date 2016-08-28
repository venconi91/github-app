import { observable, computed, action } from 'mobx';

class UserStore {

  @observable user;

  constructor(user = {}) {
    this.user = user;
  }

  @action setUser = (user) => {
    this.user = user;
  }
}

const userStore = new UserStore();

export default userStore;
