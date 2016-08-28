import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

// pages
import HomePage from './pages/Home';

// components
import App from './components/App';

// stores
import repositoriesStore from './stores/repositoriesStore';

useStrict(true);

const stores = { repositoriesStore };

ReactDOM.render(
  <Provider { ...stores }>
    <Router history={browserHistory}>
      <Route path="/test" component={HomePage} />
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/" component={HomePage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
