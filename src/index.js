import React from 'react';
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux'
import './index.css'
 import reduces from './reduces/index'
import RouterContainer from './containers/RouterContainer'
import thunkMiddleware from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
 const store=compose(createStoreWithMiddleware(reduces))
ReactDOM.render(
  <Provider store={store}>
      <RouterContainer />
  </Provider>,
  document.getElementById('root')
);
