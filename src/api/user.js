import axios from 'axios';
import userStore from './../stores/userStore';
import followersStore from './../stores/followersStore';
import followingsStore from './../stores/followingsStore';
import reposStore from './../stores/reposStore';

import { githubApiUrl } from './../constants';

export function fetchUser(username) {
  axios.get(`${githubApiUrl}${username}`)
    .then(function (response) {
      userStore.setUser(response.data)
    })
    .catch(function (error) {
      userStore.setError(error.response)
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

export function fetchFollowings(username) {
  axios.get(`${githubApiUrl}${username}/following`)
    .then(function (response) {
      followingsStore.setFollowings(response.data)
    })
    .catch(function (error) {
      // TODO: handle error
      console.log(error);
    });
};

export function fetchRepos(username) {
  axios.get(`${githubApiUrl}${username}/repos`)
    .then(function (response) {
      reposStore.setRepos(response.data)
    })
    .catch(function (error) {
      // TODO: handle error
      console.log(error);
    });
};