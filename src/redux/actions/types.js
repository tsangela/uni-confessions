import { combineReducers } from 'redux';

const getReducers = (extraReducers) => {
  return combineReducers({
    // todo(atsang): add reducers here
    ...extraReducers,
  });
};

export default getReducers;
