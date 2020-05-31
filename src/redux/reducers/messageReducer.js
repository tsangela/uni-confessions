import { messageTypes } from '../actions/types';
import Default from '../../resources/default.json';

const initialState = {
  messages: Default.messages,
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

    case messageTypes.CLEAR_BOARD:
      // set messages to empty list
      return { messages: [] };
      
    default:
      // default messages
      return initialState;
  }
};

/**
const deleteNode = id => {
  let board = document.getElementById(ID_MODAL_BOARD);
  let node = document.getElementById(id);
  node.classList.add(CLASS_ANIMATE_DELETE);
  setTimeout(() => {board.removeChild(node)}, 500);
};
 */

export default messageReducer;