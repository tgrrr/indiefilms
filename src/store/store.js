import React from 'react';
import propTypes from 'prop-types';
import reduxLogger from 'redux-logger';
import { createStore } from 'react-hooks-global-state';
import { reduxDevToolsExt } from 'react-hooks-global-state/src/devtools';
import { applyMiddleware, compose } from 'redux';
import rootReducers from './reducers';
import initialState from './initialState';

const LOCAL_STORAGE_KEY = 'indiefilm_local_storage_key';
const saveStateToStorage = ({ getState }) => next => (action) => {
  const returnValue = next(action);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(getState()));
  return returnValue;
};

const middlewareArray = [reduxLogger, saveStateToStorage];

export const {
  GlobalStateProvider,
  dispatch,
  useGlobalState,
} = createStore(
  rootReducers,
  initialState,
  compose(
    applyMiddleware(...middlewareArray),
    reduxDevToolsExt(),
  ),
);

const Provider = ({ children }) => (
  <GlobalStateProvider>
    {children}
  </GlobalStateProvider>
);

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;
