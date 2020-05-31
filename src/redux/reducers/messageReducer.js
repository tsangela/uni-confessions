import { messageTypes } from '../actions/types';
import Default from '../../resources/default.json';

const initialState = {
  messages: Default.messages,
};

const messageReducer = (state = initialState, action) => {
  let messages = state.messages;
  switch (action.type) {
    case messageTypes.ADD_MESSAGE:
      const message = action.message;
      messages.push(message);
      return { messages };
    case messageTypes.DELETE_MESSAGE:
      const index = messages.indexOf(action.id);
      if (index > -1) {
        messages.splice(index, 1);
      }
      return { messages };
    case messageTypes.CLEAR_BOARD:
      return { 
        messages: [] 
      };
    default:
      return initialState;
  }
};

export default messageReducer;