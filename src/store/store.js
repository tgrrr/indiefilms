import React from 'react';
import propTypes from 'prop-types';
import { createGlobalState } from 'react-hooks-global-state';

const initialWatchlist = (window.localStorage.getItem('watchlist'));

const initialState = {
  watchlist: initialWatchlist || [4571], // Hunter's id is on initial watchlist
  data: [],
  loading: true,
};

export const {
  GlobalStateProvider,
  setGlobalState,
  useGlobalState,
} = createGlobalState(initialState);

const Provider = ({ children }) => (
  <GlobalStateProvider>
    {children}
  </GlobalStateProvider>
);

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;

export const _setWatchlist = (s) => {
  window.localStorage.setItem('watchlist', s);
  setGlobalState('watchlist', s);
};
