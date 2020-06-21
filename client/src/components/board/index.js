import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessage } from '../../redux/actions/messages';
import Confession from '../common/confession';

const Board = () => {
  const messages = useSelector((state) => state.messageReducer.messages);
  const dispatch = useDispatch();
  const [deleting, setDeleting] = useState(false);

  const handleClick = () => {
    // trigger delete animation
    if (!deleting) {
      setDeleting(true);
    }

    // iterate all messages
    const ids = messages && messages.map((message) => message.id);

    // wait for animation to complete before deleting
    setTimeout(() => {
      ids.forEach((id) => dispatch(deleteMessage(id))); // delete all messages
      setDeleting(false); // reset the state for the next time the board is cleared
    }, 500);
  };

  const handleKey = (event) => {
    // enter key
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div id="modal-board" className="modal">
      <h1>wall of secrets</h1>
      <div className="clear-messages-wrapper">
        <span
          id="clear-all"
          className="clear-messages-button"
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={handleKey}
        >
          clear all
        </span>
      </div>
      <div
        className={`message-container${
          deleting && messages.length !== 0 ? ' deleting' : ''
        }`}
      >
        {messages &&
          messages.map((message) => (
            <Confession
              key={message.id}
              id={message.id}
              date={message.date}
              username={message.username}
              age={message.age}
              university={message.university}
              text={message.text}
            />
          ))}
      </div>
    </div>
  );
};

export default Board;
