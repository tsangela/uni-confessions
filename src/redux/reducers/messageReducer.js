import { messageTypes } from '../actions/types';
import Default from '../../resources/default.json';

const initialState = {
  messages: Default.messages,
};

const deleteMessage = (messages, id) => {
  const ids = messages && messages.map(message => message.id);
  const index = ids.indexOf(id);
  if (index > -1) {
    messages = messages.filter((message, i) => i !== index);
  }
  return messages;
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case messageTypes.ADD_MESSAGE:
      state.messages.unshift(action.message);
      return { messages: [...state.messages] };
    case messageTypes.DELETE_MESSAGE:
      const filteredMessages = deleteMessage(state.messages, action.id);
      return { messages: filteredMessages };
    case messageTypes.CLEAR_BOARD:
      return { 
        messages: [] 
      };
    default:
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