import { messageTypes } from './types';

// todo(atsang): clear form?

export const addMessage = message => {
  return {
    type: messageTypes.ADD_MESSAGE,
    addMessage: message,
  };
};

export const deleteMessage = id => {
  return {
    type: messageTypes.DELETE_MESSAGE,
    deleteMessage: id,
  };
};

export const clearBoard = () => {
  return {
    type: messageTypes.CLEAR_BOARD,
  };
};