import { messageTypes } from './types';

export const addMessage = message => {
  return {
    type: messageTypes.ADD_MESSAGE,
    message: message,
  };
};

export const deleteMessage = id => {
  return {
    type: messageTypes.DELETE_MESSAGE,
    id: id,
  };
};

export const selectMessage = id => {
  return {
    type: messageTypes.SELECT_MESSAGE,
    id: id,
  }
}

export const deselectMessage = () => {
  return {
    type: messageTypes.DESELECT_MESSAGE,
  }
}

export const clearBoard = () => {
  return {
    type: messageTypes.CLEAR_BOARD,
  };
};