/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deselectMessage } from '../../redux/actions/messageActions';
import Clipboard from './clipboard';

const Dialog = () => {
  const messages = useSelector((state) => state.messageReducer.messages);
  const selectedId = useSelector((state) => state.messageReducer.selectedId);
  const dispatch = useDispatch();

  const getMessage = (selectedId) => {
    const selectedMessage = messages.filter(
      (message) => selectedId === message.id
    );
    return selectedMessage && selectedMessage.length > 0
      ? selectedMessage[0]
      : null;
  };

  const handleClose = () => {
    dispatch(deselectMessage());
  };

  const handleKey = (event) => {
    // enter key
    if (event.key === 'Enter') {
      handleClose();
    }
  };

  // nothing selected
  if (!selectedId) {
    return null;
  }

  // retrieve selected message
  const selectedMessage = getMessage(selectedId);
  const { id, date, username, age, university, text } = selectedMessage;

  // render dialog with message metadata
  return (
    <div className="center-wrapper dialog-container">
      <div className="dialog-overlay" onClick={handleClose} />
      <div className="modal dialog delete-container">
        <div className="title-bar">
          <span
            id={`${id}_close`}
            className="close"
            title="close"
            role="button"
            aria-label="close button"
            tabIndex={0}
            onClick={handleClose}
            onKeyDown={handleKey}
          />
        </div>
        <span className="message-date">{date}</span>
        <div className="message-user-info">
          <div>
            <span className="message-username">{username}</span>
            <span className="message-age">{age}</span>
          </div>
          <span className={`message-university ${university}`}>
            {university.toUpperCase()}
          </span>
        </div>
        <span>{text}</span>
        <Clipboard text={text} />
      </div>
    </div>
  );
};

export default Dialog;

Dialog.propTypes = {
  selectedId: PropTypes.string,
};

Dialog.defaultProps = {
  selectedId: null,
};
