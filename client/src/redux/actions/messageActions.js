import { messageTypes } from './types';

export const getMessages = (messages) => {
  return {
    type: messageTypes.GET_MESSAGES,
    messages,
  };
};

export const addMessage = (message) => {
  return {
    type: messageTypes.ADD_MESSAGE,
    message,
  };
};

export const updateMessageScore = (_id, score) => {
  return {
    type: messageTypes.UPDATE_MESSAGE_SCORE,
    _id,
    score,
  };
};

export const deleteMessage = (_id) => {
  return {
    type: messageTypes.DELETE_MESSAGE,
    _id,
  };
};

export const selectMessage = (_id) => {
  return {
    type: messageTypes.SELECT_MESSAGE,
    _id,
  };
};

export const deselectMessage = () => {
  return {
    type: messageTypes.DESELECT_MESSAGE,
  };
};

export const deleteAllMessages = () => {
  return {
    type: messageTypes.DELETE_ALL_MESSAGES,
  };
};
