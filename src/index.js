import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
// pages
import Search from './pages/Search';
import Home from './pages/Home';
import Followers from './pages/Followers';
import Followings from './pages/Followings';
import Repos from './pages/Repos';
// components
import App from './components/App';
import NavigationWrapper from './components/NavigationWrapper';
// stores
import userStore from './stores/UserStore';
import repositoriesStore from './stores/repositoriesStore';

useStrict(true);

const stores = { userStore, repositoriesStore };

ReactDOM.render(
  <Provider { ...stores }>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route component={NavigationWrapper}>
          <IndexRoute component={Search} />
          <Route path="/" component={Search} />
          <Route path="/users/:username" component={Home} />
          <Route path="/users/:username/followers" component={Followers} />
          <Route path="/users/:username/followings" component={Followings} />
          <Route path="/users/:username/repos" component={Repos} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
