import React from 'react';
import PropTypes from 'prop-types';
import WatchlistButton from './WatchlistButton';
import { useGlobalState } from '../../store/store';
import { addWatchlist, removeWatchlist } from '../../store/actions/watchlistActions';

const WatchlistButtonContainer = ({ id }) => {
  const [watchlist] = useGlobalState('watchlist');

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
