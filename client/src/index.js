import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './App';
import * as serviceWorker from './serviceWorker';
import getReducers from './redux/reducers/index';

const middleware = process.env.NODE_ENV !== 'production' ? [logger] : [];

ReactDOM.render(
  <Provider store={createStore(getReducers(), applyMiddleware(...middleware))}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
