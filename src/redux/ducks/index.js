import { combineReducers } from 'redux';

import { reducer as pokemon } from './pokemon';

const reducers = combineReducers({
  pokemon,
});

export default reducers;
