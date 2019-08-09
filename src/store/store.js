import React from 'react';
import propTypes from 'prop-types';
import reduxLogger from 'redux-logger';
import { createStore } from 'react-hooks-global-state';
import { reduxDevToolsExt } from 'react-hooks-global-state/src/devtools';
import { applyMiddleware, combineReducers, compose } from 'redux';

const initialState = {
  watchlist: [4571], // Hunter's id is on initial watchlist
  // data: [],
  // loading: true,
};


const watchlistReducer = (state = initialState.watchlist, action) => {
  switch (action.type) {
  case 'addWatchlist':
    return [...state, action.id];
  case 'removeWatchlist':
    return state.filter(tvshow => tvshow !== action.id);
  default:
    return state;
  }
};

const reducer = combineReducers({
  watchlist: watchlistReducer,
});

export const {
  GlobalStateProvider,
  dispatch,
  useGlobalState,
} = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(reduxThunk, reduxLogger),
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
