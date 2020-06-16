import { messageTypes } from '../actions/types';
import Default from '../../resources/default.json';

const initialState = {
  messages: Default.messages,
  selectedId: null
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case messageTypes.ADD_MESSAGE:
      // add message to beginning of list
      state.messages.unshift(action.message);
      return {
        messages: [...state.messages],
        selectedId: state.selectedId
      };

    case messageTypes.DELETE_MESSAGE:
      // delete message by id
      const filteredMessages = state.messages.filter(message => message.id !== action.id);
      return {
        messages: filteredMessages,
        selectedId: state.selectedId
      };

    case messageTypes.SELECT_MESSAGE:
      // set id of selected message
      return {
        messages: state.messages,
        selectedId: action.id
      };

    case messageTypes.DESELECT_MESSAGE:
      // reset selected message
      return {
        messages: state.messages,
        selectedId: null
      };

    case messageTypes.CLEAR_BOARD:
      // set messages to empty list
      return {
        messages: [],
        selectedId: state.selectedId
      };
      
    default:
      // default messages
      return initialState;
  }
};

export default messageReducer;