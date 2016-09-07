import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import allStores from './stores';
import getRoutes from './config/routes'

useStrict(true);

ReactDOM.render(
  <Provider { ...allStores }>
    {getRoutes()}
  </Provider>,
  document.getElementById('app')
);
