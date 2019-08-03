import React from 'react';
import PropTypes from 'prop-types';

const WatchlistButton = ({
  addWatchlist,
  removeWatchlist,
  id,
  watchlist,
}) => (
  !watchlist.includes(id)
    ? <button onClick={() => addWatchlist(id)}>+ add</button>
    : <button onClick={() => removeWatchlist(id)}>- remove</button>
);

WatchlistButton.propTypes = {
  addWatchlist: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  removeWatchlist: PropTypes.func.isRequired,
  watchlist: PropTypes.array,
};

WatchlistButton.defaultProps = {
  watchlist: [],
};


export default WatchlistButton;
