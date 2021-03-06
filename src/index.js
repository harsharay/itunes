import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { makeApiCall } from "./Sagas/Saga"

import RootReducer from "./Reducers/RootReducer";

import { createStore, applyMiddleware } from "redux"

import { Provider } from "react-redux"

import createSagaMiddleware from "redux-saga"


const sagaMiddleware = createSagaMiddleware()

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(makeApiCall)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
