import React from 'react';
import PropTypes from 'prop-types';
import WatchlistButton from './WatchlistButton';
import { useGlobalState, dispatch } from '../../store/store';

const WatchlistButtonContainer = ({ id }) => {
  const [watchlist] = useGlobalState('watchlist');

  const addWatchlist = id => dispatch({ type: 'addWatchlist', id });
  const removeWatchlist = id => dispatch({ type: 'removeWatchlist', id });

  return (
    <WatchlistButton
      addWatchlist={addWatchlist}
      id={id}
      removeWatchlist={removeWatchlist}
      watchlist={watchlist}
    />
  );
};

WatchlistButtonContainer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default WatchlistButtonContainer;
