import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// stores
import userStore from './../stores/userStore';
import followersStore from './../stores/followersStore';
import followingsStore from './../stores/followingsStore';
import reposStore from './../stores/reposStore';

// pages
import Search from './../pages/Search';
import Home from './../pages/Home';
import Followers from './../pages/Followers';
import Followings from './../pages/Followings';
import Repos from './../pages/Repos';

// components
import App from './../components/App';
import NavigationWrapper from './../components/NavigationWrapper';

// api
import { fetchUser, fetchFollowers, fetchFollowings, fetchRepos } from './../api/user';

const navigationRoutes = [{
    type: IndexRoute,
    component: Search
}, {
    path: '/',
    component: Search
}, {
    path: '/users/:username',
    component: Home,
    onEnter: (nextState, replace, callback) => {
        userStore.clear();
        let username = nextState.params.username;
        fetchUser(username);
        callback();
    }
}, {
    path: '/users/:username/followers',
    component: Followers,
    onEnter: (nextState, replace, callback) => {
        let username = nextState.params.username;
        fetchFollowers(username);
        callback();
    },
    onLeave: () => {
        followersStore.clear();
    }
}, {
    path: '/users/:username/followings',
    component: Followings,
    onEnter: (nextState, replace, callback) => {
        let username = nextState.params.username;
        fetchFollowings(username);
        callback();
    },
    onLeave: () => {
        followingsStore.clear();
    }
}, {
    path: '/users/:username/repos',
    component: Repos,
    onEnter: (nextState, replace, callback) => {
        let username = nextState.params.username;
        fetchRepos(username);
        callback();
    },
    onLeave: () => {
        reposStore.clear()
    }
}]

export default function getRoutes() {
    return <Router history={browserHistory}>
      <Route component={App}>
        <Route component={NavigationWrapper}>
          {navigationRoutes.map((route, i) => {
            let type = route.type || Route; 
            return <type key={i} {...route} />
          })}
        </Route>
      </Route>
    </Router>
}