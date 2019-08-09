import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../common/ui/ui';

const WatchlistButton = ({
  addWatchlist,
  removeWatchlist,
  id,
  watchlist,
}) => (
  !watchlist.includes(id)
    ? <Button onClick={() => addWatchlist(id)}>+ add</Button>
    : <Button onClick={() => removeWatchlist(id)}>- remove</Button>
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
