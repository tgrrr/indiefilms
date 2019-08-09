import initialState from '../initialState';

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

export default watchlistReducer;
