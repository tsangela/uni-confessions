import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessage, getMessages } from '../../redux/actions/messageActions';
import Confession from '../common/confession';
import Empty from './empty';
import { GET_MESSAGES } from '../../resources/api';
import Loader from '../common/loader';

const Board = () => {
  const messages = useSelector((state) => state.messageReducer.messages);
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetch(GET_MESSAGES)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          dispatch(getMessages(res));
        }
      })
      .then(() => setIsFetching(false))
      .catch((err) => {
        console.error(err);
      });
  }, [dispatch]);

  const handleClick = () => {
    // trigger delete animation
    if (!isDeleting) {
      setIsDeleting(true);
    }

    // iterate all messages
    const ids = messages && messages.map((message) => message.id);

    // wait for animation to complete before deleting
    setTimeout(() => {
      ids.forEach((id) => dispatch(deleteMessage(id))); // delete all messages
      setIsDeleting(false); // reset the state for the next time the board is cleared
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
          isDeleting && messages.length !== 0 ? ' deleting' : ''
        }`}
      >
        {isFetching ? (
          <Loader />
        ) : (
          messages &&
          (messages.length > 0 ? (
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
            ))
          ) : (
            <Empty />
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
