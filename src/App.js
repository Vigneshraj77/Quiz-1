import React from 'react';

import './resources/styles.css';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import socketMiddleware from './middleware/socketMiddleware';
import rootReducer from './reducers';
import AppRoute from './component/AppRoute';
import './style/index.scss';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, socketMiddleware))
);


function App() {
  return (
    <Provider store={store}>
    <AppRoute />
  </Provider>
  );
}

export default App;
