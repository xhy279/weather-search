import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : store => store
);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers, enhancers)}>
  <App />
</Provider>
, document.getElementById('root'));