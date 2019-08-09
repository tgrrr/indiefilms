import { dispatch } from '../store';

export const addWatchlist = id => dispatch({ type: 'addWatchlist', id });
export const removeWatchlist = id => dispatch({ type: 'removeWatchlist', id });
