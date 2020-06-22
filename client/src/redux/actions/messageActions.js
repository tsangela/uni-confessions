import { messageTypes } from './types';

export const loadMessages = () => {
  return {
    type: messageTypes.LOAD_MESSAGES,
  };
};

export const addMessage = (message) => {
  return {
    type: messageTypes.ADD_MESSAGE,
    message,
  };
};

export const deleteMessage = (id) => {
  return {
    type: messageTypes.DELETE_MESSAGE,
    id,
  };
};

export const selectMessage = (id) => {
  return {
    type: messageTypes.SELECT_MESSAGE,
    id,
  };
};

export const deselectMessage = () => {
  return {
    type: messageTypes.DESELECT_MESSAGE,
  };
};

export const clearBoard = () => {
  return {
    type: messageTypes.CLEAR_BOARD,
  };
};
