import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
// pages
import HomePage from './pages/Home';
import DashBoard from './pages/DashBoard';
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
      <Route path="/test" component={HomePage} />
      <Route component={App}>
        <Route component={NavigationWrapper}>
          <IndexRoute component={HomePage} />
          <Route path="/" component={HomePage} />
          <Route path="/users/:username" component={DashBoard} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
