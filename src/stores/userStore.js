import { observable, computed, action } from 'mobx';

class UserStore {

  @observable user;

  constructor(user = {}) {
    this.user = user;
  }

  @computed get username() {
    if(this.user) {
      return this.user.login;
    }
    
    return null;
  }

  @action setUser = (user) => {
    this.user = user;
  }
}

const userStore = new UserStore();

export default userStore;
