import { messageTypes } from '../actions/types';
import { getAllMessages } from '../../resources/api';
import Default from '../../resources/default.json';

const INITIAL_STATE = {
  loadMessages: {
    isPending: false,
    isSuccess: false,
    isFailure: false,
  },
  messages: [],
  selectedId: null,
};

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case messageTypes.LOAD_MESSAGES:
      // load messages from database
      return {
        messages: [],
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

    case messageTypes.CLEAR_BOARD:
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
