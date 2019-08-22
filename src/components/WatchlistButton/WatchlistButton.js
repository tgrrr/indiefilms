import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../../common/ui/ui';

const WatchlistButton = ({
  addWatchlist,
  removeWatchlist,
  id,
  watchlist,
}) => (
  <WatchlistButtonWrapper>
    {watchlist.includes(id)
      ? <Button
        className='WatchlistButton--remove'
        dataTestId={`WatchlistButton--remove__${id}`}
        onClick={() => removeWatchlist(id)}
      >
      - remove
      </Button>
      : <Button
        className='WatchlistButton--add'
        dataTestId={`WatchlistButton--add__${id}`}
        onClick={() => addWatchlist(id)}
      >
      + add
      </Button>
    }
  </WatchlistButtonWrapper>
);

const WatchlistButtonWrapper = styled.div`
.WatchlistButton--add {
  width: 150px;
}
.WatchlistButton--remove {
  width: 150px;
}
`;

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
