import { combineReducers } from 'redux';
import messageReducer from './messageReducer';

const getReducers = (extraReducers) => {
  return combineReducers({
    messageReducer,
    ...extraReducers,
  });
};

export default getReducers;
