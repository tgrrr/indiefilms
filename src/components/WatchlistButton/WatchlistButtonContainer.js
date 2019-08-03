import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import WatchlistButton from './WatchlistButton';
import { useGlobalState } from '../../store/store';

const WatchlistButtonContainer = ({ id }) => {
  const [watchlist, setWatchlist] = useGlobalState('watchlist');

  const addWatchlist = id => setWatchlist(
    prevWatchlist => [...prevWatchlist, id]
  );

  const removeWatchlist = id => (
    setWatchlist(
      prevWatchlist => prevWatchlist.filter(tvShow => tvShow !== id)
    )
  );

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
