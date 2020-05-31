import { messageTypes } from '../actions/types';
import Default from '../../resources/default.json';

const initialState = {
  messages: Default.messages,
  selectedId: null
};

const deleteMessage = (messages, id) => {
  // map messages to their ids
  const ids = messages && messages.map(message => message.id);
  
  // find the index of the message to delete
  const index = ids.indexOf(id);

  // filter out the message
  if (index > -1) {
    messages = messages.filter((message, i) => i !== index);
  }
  return messages;
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case messageTypes.ADD_MESSAGE:
      // add message to beginning of list
      state.messages.unshift(action.message);
      return { messages: [...state.messages] };

    case messageTypes.DELETE_MESSAGE:
      // delete message by id
      const filteredMessages = deleteMessage(state.messages, action.id);
      return { messages: filteredMessages };

    case messageTypes.SELECT_MESSAGE:
      // set id of selected message
      const { selectedId, ...rest } = state;
      return { selectedId: action.id, ...rest };

    case messageTypes.DESELECT_MESSAGE:
      // reset selected message
      return { selectedId: null, messages: state.messages };

    case messageTypes.CLEAR_BOARD:
      // set messages to empty list
      return { messages: [] };
      
    default:
      // default messages
      return initialState;
  }
};

export default messageReducer;