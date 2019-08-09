import { combineReducers } from 'redux';
import watchlistReducer from './watchlistReducer';

const rootReducers = combineReducers({
  watchlist: watchlistReducer,
});

export default rootReducers;
