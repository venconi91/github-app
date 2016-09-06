import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import getRoutes from './config/routes'

// stores
import userStore from './stores/userStore';
import repositoriesStore from './stores/repositoriesStore';

useStrict(true);

const stores = { userStore, repositoriesStore };

ReactDOM.render(
  <Provider { ...stores }>
    {getRoutes()}
  </Provider>,
  document.getElementById('app')
);
