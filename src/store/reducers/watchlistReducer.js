import initialState from '../initialState';

const watchlistReducer = (state = initialState.watchlist, action) => {
  const { id, type } = action;
  const actionTypes = {
    addWatchlist: () => [...state, id],
    removeWatchlist: () => state.filter(tvshow => tvshow !== id),
    default: () => state,
  };
  return (actionTypes[type] || actionTypes.default)();
};

export default watchlistReducer;
