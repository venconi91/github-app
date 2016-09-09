import { observable, computed, action } from 'mobx';

class UserStore {

  @observable user;
  @observable error;

  constructor(user = {}) {
    this.user = user;
  }

  @computed get username() {
    // TODO: fix the check (condition is always true. {} is truthy!!!)
    if(this.user) {
      return this.user.login;
    }
    
    return null;
  }

  @computed get errorMessage() {
    if(this.error) {
      return this.error.data.message;
    }
    
    return null;
  }

  @computed get isStoreEmpty() {
    return Object.keys(this.user) > 0;
  }

  @action setUser = (user) => {
    this.user = user;
  }

  @action setError = (error) => {
    this.error = error;
  }

  @action clear = () => {
    this.user = {};
    this.error = null;
  }


}

const userStore = new UserStore();

export default userStore;
