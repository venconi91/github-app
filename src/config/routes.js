import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// pages
import Search from './../pages/Search';
import Home from './../pages/Home';
import Followers from './../pages/Followers';
import Followings from './../pages/Followings';
import Repos from './../pages/Repos';

// components
import App from './../components/App';
import NavigationWrapper from './../components/NavigationWrapper';

const navigationRoutes = [{
    type: IndexRoute,
    component: Search
}, {
    type: Route,
    path: '/',
    component: Search
}, {
    type: Route,
    path: '/users/:username',
    component: Home
}, {
    type: Route,
    path: '/users/:username/followers',
    component: Followers
}, {
    type: Route,
    path: '/users/:username/followings',
    component: Followings
}, {
    type: Route,
    path: '/users/:username/repos',
    component: Repos
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