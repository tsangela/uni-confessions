import { messageTypes } from '../actions/types';

const INITIAL_STATE = {
  messages: [],
  selectedId: null,
};

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case messageTypes.GET_MESSAGES:
      // cache messages from database
      return {
        messages: action.messages,
        selectedId: state.selectedId,
      };

    case messageTypes.ADD_MESSAGE:
      // add message to beginning of list
      return {
        messages: [action.message, ...state.messages],
        selectedId: state.selectedId,
      };

    case messageTypes.DELETE_MESSAGE:
      // delete message by id
      return {
        messages: state.messages.filter((message) => message.id !== action.id),
        selectedId: state.selectedId,
      };

    case messageTypes.SELECT_MESSAGE:
      // set id of selected message
      return {
        messages: state.messages,
        selectedId: action.id,
      };

    case messageTypes.DESELECT_MESSAGE:
      // reset selected message
      return {
        messages: state.messages,
        selectedId: null,
      };

    case messageTypes.DELETE_ALL_MESSAGES:
      // set messages to empty list
      return {
        messages: [],
        selectedId: state.selectedId,
      };

    default:
      // default messages
      return INITIAL_STATE;
  }
};

export default messageReducer;
