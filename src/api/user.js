import axios from 'axios';
import userStore from './../stores/userStore';
import followersStore from './../stores/followersStore';
// TODO: move this in contants folder
const githubApiUrl = 'https://api.github.com/users/'

export function fetchUser(username) {
  axios.get(`${githubApiUrl}${username}`)
    .then(function (response) {
      userStore.setUser(response.data)
    })
    .catch(function (error) {
      // TODO: handle error
      console.log(error);
    });
};

export function fetchFollowers(username) {
  axios.get(`${githubApiUrl}${username}/followers`)
    .then(function (response) {
      followersStore.setFollowers(response.data)
    })
    .catch(function (error) {
      // TODO: handle error
      console.log(error);
    });
};